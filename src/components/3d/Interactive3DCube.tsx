"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Interactive3DCube() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth || 320;
    const height = mountRef.current.clientHeight || 320;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    // Group to hold our cube & rings
    const group = new THREE.Group();
    scene.add(group);

    // Outer cyber cube wireframe
    const cubeGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const cubeEdges = new THREE.EdgesGeometry(cubeGeo);
    const cubeMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      linewidth: 2,
      transparent: true,
      opacity: 0.85
    });
    const wireframeCube = new THREE.LineSegments(cubeEdges, cubeMat);
    group.add(wireframeCube);

    // Inner glowing crystal
    const innerGeo = new THREE.OctahedronGeometry(1.3, 0);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6,
      emissive: 0x2e1065,
      shininess: 90,
      wireframe: false,
      transparent: true,
      opacity: 0.8
    });
    const innerCrystal = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerCrystal);

    // Glowing wireframe around the inner crystal
    const innerWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(innerGeo),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.9 })
    );
    group.add(innerWire);

    // Orbiting Neon Ring 1
    const ringGeo1 = new THREE.TorusGeometry(2.2, 0.03, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // Orbiting Neon Ring 2
    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.03, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xd946ef, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Lights
    const pointLight = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 4, 20);
    purpleLight.position.set(-5, -5, 3);
    scene.add(purpleLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Interaction controls (drag to spin)
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocityX = 0.008;
    let velocityY = 0.005;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - previousMousePosition.x;
      const deltaY = clientY - previousMousePosition.y;

      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;

      velocityX = deltaX * 0.003;
      velocityY = deltaY * 0.003;

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);

    dom.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!isDragging) {
        // Natural rotation + inertia
        group.rotation.y += velocityX;
        group.rotation.x += velocityY;

        // Dampen velocity back to subtle idle rotation
        velocityX = THREE.MathUtils.lerp(velocityX, 0.006, 0.02);
        velocityY = THREE.MathUtils.lerp(velocityY, 0.004, 0.02);
      }

      ring1.rotation.z += delta * 0.8;
      ring2.rotation.x += delta * 0.5;
      innerCrystal.rotation.y -= delta * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      dom.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      dom.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
      window.removeEventListener("resize", handleResize);

      cancelAnimationFrame(animId);
      cubeGeo.dispose();
      cubeEdges.dispose();
      cubeMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      innerWire.geometry.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();

      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative group flex flex-col items-center">
      <div
        ref={mountRef}
        className="w-72 h-72 sm:w-80 sm:h-80 cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-105"
        title="Döndürmek için tıkla ve sürükle!"
      />
      <div className="mt-2 text-xs font-mono text-cyan-400/70 flex items-center gap-1.5 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        {isInteracting ? "3D Döndürülüyor..." : "3D Küpü Döndürmek İçin Sürükle"}
      </div>
    </div>
  );
}
