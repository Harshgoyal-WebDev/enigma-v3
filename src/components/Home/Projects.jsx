import React, { useEffect, useState } from "react";
import CardMesh from "../Meshes/CardMesh";
import {
  View,
  Preload,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger)

const Projects = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-screen h-full py-[5%] overflow-hidden bg-black" id="projects">
      <div className="w-full flex justify-between gap-[3vw] translate-x-[55%] project-handles">
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium text-white">Patronum</h3>
          <p className="text-[1.1vw] opacity-60 text-white">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60 text-white">2023</p>
        </div>
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </div>
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </div>
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </div>
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </div>
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </div>
        <div className="w-[8vw] h-full flex flex-col gap-[1vw]">
          <h3 className="grotesk text-[1.2vw] font-medium">Patronum</h3>
          <p className="text-[1.1vw] opacity-60">
            Web Design Marketing Branding
          </p>
          <p className="text-[1.1vw] opacity-60">2023</p>
        </div>
      </div>
      <div className="w-full h-full">
        <View className="view" style={{ height: height, width: width }}>
          <ambientLight intensity={1} /> Adjust ambient light intensity
          {/* Adjust the point light position and intensity */}
          <pointLight position={[-2, 0, 5]} intensity={1} color="white" />
          {/* Adjust the directional light position and intensity */}
          <directionalLight
            position={[0, 0, 5]}
            intensity={4}
            color="white"
            shadow={{
              near: 1,
              far: -20,
              mapSize: { width: 1024, height: 1024 },
            }}
          />
          {/* Try adding helper to visualize lights during development */}
          {/* <directionalLightHelper args={[directionalLight, 1]} /> */}
          {/* <pointLightHelper args={[pointLight, 1]} /> */}
          <fog attach="fog" color="black" near={9} far={12} />
          <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
          <CardMesh />
          <OrbitControls makeDefault />
        </View>
      </div>
    </section>
  );
};

export default Projects;
