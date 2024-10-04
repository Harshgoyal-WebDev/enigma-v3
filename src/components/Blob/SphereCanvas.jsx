"use client";
import { Environment} from "@react-three/drei";
import { Canvas,} from "@react-three/fiber";
import React, { Suspense, useMemo ,useEffect} from "react";
import Blob from "../Blob/Blob";
import Lights from "../Blob/Lights";
import { animated } from "@react-spring/web";
import { BlobSetting } from "../Blob/utils/blobSetting";
import { pages } from "../Blob/Text/data";
import useUsefulHooks from "../Blob/hooks/useWheel";

const SphereCanvas = ({ current, setCurrent }) => {
  const { prevPage, nextPage, lastAction } = useUsefulHooks();

  const {bg, ambient, lights, ...setting } = useMemo(
    () => BlobSetting[pages[current].name],
    [nextPage, prevPage, current]
  );

  return (
    <animated.div
      className="w-full h-full"
      style={{ background: bg, transition: "ease-out 0.5s" }} >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} className="blobifyCanvas w-screen h-screen overflow-hidden">
        <ambientLight intensity={ambient} />
        <Lights lights={lights} />
        <Suspense fallback={null}>
          <Blob {...setting} />
        </Suspense>
        <Environment files={"/environment.hdr"} />
      </Canvas>
    </animated.div>
  );
};


export default SphereCanvas;
