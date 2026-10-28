"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface InteractivePortraitProps {
  baseImageUrl?: string;
  revealImageUrl?: string;
  blobRadius?: number;
  blobFadeSpeed?: number;
  className?: string;
}

export const InteractivePortrait: React.FC<InteractivePortraitProps> = ({
  baseImageUrl = "/assets/hamzah-formal-crop.webp",
  revealImageUrl = "/assets/hamzah-casual-crop.webp",
  blobRadius = 0.38,
  blobFadeSpeed = 2.4,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let isDisposed = false;

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 640;

    // Scene & Camera (Orthographic)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000
    );
    camera.position.z = 1;

    // WebGL Renderer with full alpha transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const gu = {
      time: { value: 0 },
      dTime: { value: 0 },
      aspect: { value: width / height },
    };

    // Render Targets for fluid trail ping-pong
    let rtOutput = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });
    let prevRenderTarget = new THREE.WebGLRenderTarget(width, height, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
    });

    const uniforms = {
      pointer: { value: new THREE.Vector2(10, 10) },
      pointerDown: { value: 1.0 },
      pointerRadius: { value: blobRadius },
      pointerDuration: { value: blobFadeSpeed },
      prevFrame: { value: prevRenderTarget.texture },
      time: gu.time,
      dTime: gu.dTime,
      aspect: gu.aspect,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.pointer.value.x = ((event.clientX - rect.left) / width) * 2 - 1;
      uniforms.pointer.value.y = -(((event.clientY - rect.top) / height) * 2 - 1);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const touch = event.touches[0];
        uniforms.pointer.value.x = ((touch.clientX - rect.left) / width) * 2 - 1;
        uniforms.pointer.value.y = -(((touch.clientY - rect.top) / height) * 2 - 1);
      }
    };

    const handleMouseLeave = () => {
      uniforms.pointer.value.set(10, 10);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchend", handleMouseLeave);

    const blobMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time, dTime, aspect, pointerDown, pointerRadius, pointerDuration;
        uniform vec2 pointer;
        uniform sampler2D prevFrame;
        varying vec2 vUv;

        float hash(vec2 p) { 
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); 
        }
        
        float noise(vec2 p) {
          vec2 i = floor(p); 
          vec2 f = fract(p); 
          f = f * f * (3.0 - 2.0 * f);
          float a = hash(i); 
          float b = hash(i + vec2(1.0, 0.0)); 
          float c = hash(i + vec2(0.0, 1.0)); 
          float d = hash(i + vec2(1.0, 1.0));
          return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
        }

        void main() {
          float rVal = texture2D(prevFrame, vUv).r;
          rVal -= clamp(dTime / pointerDuration, 0.0, 0.05);
          rVal = clamp(rVal, 0.0, 1.0);
          
          float f = 0.0;
          if (pointerDown > 0.5) {
            vec2 uv = (vUv - 0.5) * 2.0 * vec2(aspect, 1.0);
            vec2 mouse = pointer * vec2(aspect, 1.0);
            vec2 toMouse = uv - mouse;
            float angle = atan(toMouse.y, toMouse.x);
            float dist = length(toMouse);
            
            float noiseVal = noise(vec2(angle * 3.0 + time * 0.5, dist * 5.0));
            float noiseVal2 = noise(vec2(angle * 5.0 - time * 0.3, dist * 3.0 + time));
            float radiusVariation = 0.7 + noiseVal * 0.5 + noiseVal2 * 0.3;
            float organicRadius = pointerRadius * radiusVariation;
            
            f = 1.0 - smoothstep(organicRadius * 0.05, organicRadius * 1.2, dist);
            f *= 0.8 + noiseVal * 0.2;
          }
          
          rVal += f * 0.3;
          rVal = clamp(rVal, 0.0, 1.0);
          gl_FragColor = vec4(vec3(rVal), 1.0);
        }
      `,
    });

    const rtScene = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blobMaterial);
    const rtCamera = new THREE.Camera();

    const renderBlob = () => {
      renderer.setRenderTarget(rtOutput);
      renderer.render(rtScene, rtCamera);
      renderer.setRenderTarget(null);
      const temp = prevRenderTarget;
      prevRenderTarget = rtOutput;
      rtOutput = temp;
      uniforms.prevFrame.value = prevRenderTarget.texture;
    };

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "anonymous";

    let baseMesh: THREE.Mesh | null = null;
    let revealMesh: THREE.Mesh | null = null;

    const baseTexture = textureLoader.load(baseImageUrl, () => {
      if (isDisposed) return;
      setIsReady(true);
      fitTextures();
    });

    const revealTexture = textureLoader.load(revealImageUrl, () => {
      if (isDisposed) return;
      fitTextures();
    });

    const baseMaterial = new THREE.MeshBasicMaterial({
      map: baseTexture,
      transparent: true,
    });
    baseMesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), baseMaterial);
    baseMesh.position.z = 0;
    scene.add(baseMesh);

    const revealMaterial = new THREE.ShaderMaterial({
      uniforms: {
        texBlob: { value: rtOutput.texture },
        map: { value: revealTexture },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec4 vPosProj;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          vPosProj = gl_Position;
        }
      `,
      fragmentShader: `
        uniform sampler2D texBlob;
        uniform sampler2D map;
        varying vec2 vUv;
        varying vec4 vPosProj;

        void main() {
          vec2 blobUV = ((vPosProj.xy / vPosProj.w) + 1.0) * 0.5;
          vec4 blobData = texture2D(texBlob, blobUV);
          if (blobData.r < 0.02) discard;

          vec4 texColor = texture2D(map, vUv);
          // Apply soft edge fade according to blob intensity
          texColor.a *= smoothstep(0.02, 0.45, blobData.r);
          gl_FragColor = texColor;
        }
      `,
      transparent: true,
    });
    revealMesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), revealMaterial);
    revealMesh.position.z = 0.1;
    scene.add(revealMesh);

    const fitTextures = () => {
      const currentWidth = container.clientWidth;
      const currentHeight = container.clientHeight;
      if (!currentWidth || !currentHeight) return;

      const img = baseTexture.image;
      if (!img) return;

      // Fit contain inside portrait container with bottom alignment
      const scale = Math.min(currentWidth / img.width, currentHeight / img.height);
      const planeWidth = img.width * scale;
      const planeHeight = img.height * scale;

      if (baseMesh) {
        baseMesh.geometry.dispose();
        baseMesh.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        baseMesh.position.set(0, -(currentHeight - planeHeight) / 2, 0);
      }
      if (revealMesh) {
        revealMesh.geometry.dispose();
        revealMesh.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        revealMesh.position.set(0, -(currentHeight - planeHeight) / 2, 0.1);
      }
    };

    const clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      const dt = clock.getDelta();
      gu.time.value += dt;
      gu.dTime.value = dt;

      if (revealMaterial) {
        revealMaterial.uniforms.texBlob.value = rtOutput.texture;
      }

      renderBlob();
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (isDisposed) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (!newWidth || !newHeight) return;

      camera.left = newWidth / -2;
      camera.right = newWidth / 2;
      camera.top = newHeight / 2;
      camera.bottom = newHeight / -2;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      gu.aspect.value = newWidth / newHeight;
      fitTextures();
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    cleanupRef.current = () => {
      isDisposed = true;
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchend", handleMouseLeave);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      baseTexture.dispose();
      revealTexture.dispose();
      rtOutput.dispose();
      prevRenderTarget.dispose();
      blobMaterial.dispose();
      if (baseMesh) {
        baseMesh.geometry.dispose();
        baseMaterial.dispose();
      }
      if (revealMesh) {
        revealMesh.geometry.dispose();
        revealMaterial.dispose();
      }
    };

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [baseImageUrl, revealImageUrl, blobRadius, blobFadeSpeed]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* Fallback & Loading Fade-In */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isReady ? "opacity-0" : "opacity-100"
        } flex items-center justify-center`}
      >
        <img
          src={baseImageUrl}
          alt="Hamzah Ikhsan Portrait"
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
};
