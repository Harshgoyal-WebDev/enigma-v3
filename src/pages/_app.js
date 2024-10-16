import "@/styles/globals.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { DefaultSeo } from "next-seo";
import { View, Preload, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import BackgroundShader from "@/components/Background/backgroundShader";
import * as THREE from "three";
import Camera from "@/components/Homepage/Camera";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App({ Component, pageProps }) {
  const [rootElement, setRootElement] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setRootElement(document.getElementById("root"));

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    const lineDraws = document.querySelectorAll(".bg-lines");
  
    gsap.fromTo(
      lineDraws, // Pass the NodeList directly
      { scaleY: 0, transformOrigin: "top" }, // Initial state
      {
        scaleY: 1, // Final state: scale to full height
        duration: 2,
        ease: "power4.out", // Elastic easing
        stagger: 0.15, // This will now apply stagger correctly to each element
        scrollTrigger: {
          trigger: lineDraws[0], // Trigger based on the first line element
          start: "top 80%", // Start when the top of the first line hits 80% of the viewport
          end: "bottom 20%",
          scrub: false,
          markers: false, // Set to true for debugging
        },
      }
    );
  });
  

  return (
    <>
      <DefaultSeo
        title="Enigma-v3"
        description="digital experience design agency"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/enigma-logo.svg',
            sizes: '32x32',
          },
          {
            rel: "preload",
            href: "/assets/fonts/grotesk/LensGrotesk-Medium.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/sans/GeneralSans-Regular.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
        ]}
      
      />
      <ReactLenis root options={{}}>
        <Component {...pageProps} />
        {/* <div className="grid-container absolute z-[-1] top-0 left-0 flex justify-between w-screen h-screen">
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
          <div className="grid-lines bg-lines"></div>
        </div> */}
        <Canvas
         camera={{position:[0,0,7]}}
          className="view"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height:"100vh",
            width: "100vw",
            pointerEvents: "none",
            zIndex:"-1"
          }}
          eventSource={rootElement}
        >
          <View.Port />
          <Preload all />
          {/* <Camera/> */}
        </Canvas>
      </ReactLenis>
    </>
  );
}
