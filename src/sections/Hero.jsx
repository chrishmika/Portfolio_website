import HeroText from "../components/HeroText";
import ParallelxVackground from "../components/ParallelxVackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallelxVackground />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut scale={isMobile && 1} position={isMobile && [0, -1.5, 0]} />
              {/* <OrbitControls /> */}
              <Rig />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
    // state.camera.position.z = Math.cos(state.clock.getElapsedTime() * 0.25) * 2;
  });
}

export default Hero;
