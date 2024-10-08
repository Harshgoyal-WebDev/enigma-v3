"use client";
import { Environment, View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo } from "react";
import Blob from "../Blob/Blob";
import Lights from "../Blob/Lights";
import { animated } from "@react-spring/three";
import { BlobSetting } from "../Blob/utils/blobSetting";
import { pages } from "../Blob/Text/data";
import useUsefulHooks from "../Blob/hooks/useWheel";

const SphereCanvas = ({ current, setCurrent }) => {
  const { prevPage, nextPage, lastAction } = useUsefulHooks();

  const { bg,ambient, lights, ...setting } = useMemo(
    () => BlobSetting[pages[current].name],
    [nextPage, prevPage, current]
  );

  return (
    <View style={{ background:bg }} className="w-screen h-screen z-[-5] overflow-hidden negative">
      <animated.mesh camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={ambient} />
        <Lights lights={lights} />
        <Suspense fallback={null}>
          <Blob {...setting}/>
        </Suspense>
        <Environment files={"/environment.hdr"} />
      </animated.mesh>
    </View>
  );
};

export default SphereCanvas;
