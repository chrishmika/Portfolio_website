import { Html, useProgress } from "@react-three/drei";
import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="font-normal text-xl text-center">
      {progress}% LOADING
    </Html>
  );
};

export default Loader;
