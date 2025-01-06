import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Warrior = ({ scale }) => {
  const warrior = useGLTF("src/assets/fantasy_warrior.glb");

  return (
    <mesh>
      {/* Lighting for the scene */}
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[10, 20, 10]}
        angle={0.25}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={2048}
      />
      <pointLight intensity={1} position={[0, 10, 0]} />
      <primitive
        object={warrior.scene}
        scale={scale}
        position={[0, -1.5, 0]} // Adjusted to center the model vertically
        rotation={[0, 0.5, 0]} // Slight rotation for a dynamic look
      />
    </mesh>
  );
};


const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
  );
  // const [modelScale, setModelScale] = useState(1);

  // useEffect(() => {
  //   // Dynamically calculate scale based on viewport height
  //   const handleResize = () => {
  //     const canvasHeight = window.innerHeight;
  //     const modelHeight = canvasHeight * 0.038; // 50% of viewport height
  //     const baseModelHeight = 10; // Assume base model height in 3D units
  //     setModelScale(modelHeight / baseModelHeight);
  //   };

  //   handleResize(); // Set initial scale
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // return (
  //   <Canvas
  //     frameloop="demand"
  //     shadows
  //     dpr={[1, 2]}
  //     camera={{ position: [15, 5, 10], fov: 30 }}
  //     gl={{ preserveDrawingBuffer: true }}
  //     className="w-full h-full"
  //   >
  //     <Suspense fallback={<CanvasLoader />}>
  //       <OrbitControls
  //         enableZoom={false}
  //         maxPolarAngle={Math.PI / 2}
  //         minPolarAngle={Math.PI / 2}
  //       />
  //       <Warrior scale={modelScale} />
  //     </Suspense>
  //     <Preload all />
  //   </Canvas>
  // );
};

export default ComputersCanvas;