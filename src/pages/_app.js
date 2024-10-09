import "@/styles/globals.css";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { DefaultSeo } from "next-seo";
import { View, Preload } from "@react-three/drei";
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
  }, []);
  return (
    <>
      <DefaultSeo
        title="Enigma-v3"
        description="digital experience design agency"
        additionalLinkTags={[
          {
            rel: "preload",
            href: "/assets/fonts/grotesk/LensGrotesk-Medium.woff",
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
      <ReactLenis root options={{
        
      }}>
        <Component {...pageProps} />
        <div className="grid-container absolute z-[-1] top-0 left-0 flex justify-between">
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
          <div className="grid-lines"></div>
        </div>
        <Canvas
          className="view"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            z:-1,
            pointerEvents: "none",
          }}
          eventSource={rootElement}
        >
          <View.Port />
          <Preload all />
        </Canvas>
      </ReactLenis>
    </>
  );
}
