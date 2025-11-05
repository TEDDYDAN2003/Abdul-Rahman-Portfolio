"use client";
import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useState, useRef, Suspense } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props) => {
  const ref = useRef<PointsType>(null);
  const ref2 = useRef<PointsType>(null);
  const ref3 = useRef<PointsType>(null);

  // Original star field with more stars
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 1.2 })
  );

  // Additional distant stars
  const [distantStars] = useState(() =>
    random.inSphere(new Float32Array(3000), { radius: 1.8 })
  );

  // Twinkling stars (smaller cluster)
  const [twinkleStars] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.0 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }

    // Slower rotation for distant stars
    if (ref2.current) {
      ref2.current.rotation.x -= delta / 20;
      ref2.current.rotation.y -= delta / 25;
    }

    // Slight counter-rotation for depth effect
    if (ref3.current) {
      ref3.current.rotation.x += delta / 12;
      ref3.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Original main stars - enhanced count */}
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Distant background stars - smaller and dimmer */}
      <Points
        ref={ref2}
        stride={3}
        positions={distantStars}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#8892b0"
          size={0.0015}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </Points>

      {/* Brighter accent stars */}
      <Points
        ref={ref3}
        stride={3}
        positions={twinkleStars}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0025}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;