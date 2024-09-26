import "@/styles/globals.css";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import {ReactLenis} from "@studio-freight/react-lenis";
import { DefaultSeo } from "next-seo";
import {
  View,
  Preload,
} from "@react-three/drei";
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
    }},[])
  return (
    <>
    <DefaultSeo
        title="Enigma-v3"
        description="digital experience design agency"
        additionalLinkTags={[
          {
            rel: "preload",
            href: "/assets/fonts/fonts/grotesk/LensGrotesk-Medium.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/fonts/sans/GeneralSans-Regular.woff",
            as: "font",
            type: "font/woff",
            crossOrigin: "",
          },
        ]}
      />
  <ReactLenis root lerp={0.3}>

  <Component {...pageProps} />
  
  <Canvas
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
        }}
        eventSource={rootElement}
      >
        <View.Port />
        <Preload all />
      </Canvas>
  </ReactLenis>
  </>
  )
  
}
