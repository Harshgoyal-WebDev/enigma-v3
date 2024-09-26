import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  View,
  Preload,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Mesh from "@/components/Mesh";

gsap.registerPlugin(ScrollTrigger);

export default function Sample() {
  const [rootElement, setRootElement] = useState(null);
  
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const meshRef = useRef(null); // Initialize the ref for the group
  const section4Ref = useRef(null);
  const [isSection4InView, setIsSection4InView] = useState(false); // State to track section 4

  // Set root element and window size on mount
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setRootElement(document.getElementById("root"));

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section4Top = section4Ref.current.offsetTop;
      const section4Height = section4Ref.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= section4Top && scrollPosition <= section4Top + section4Height + windowHeight) {
        setIsSection4InView(true);
      } else {
        setIsSection4InView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [section4Ref]);

  return (
    <>
      <section className="w-screen h-screen bg-yellow-400" id="section-1"></section>
      <section className="w-screen h-screen bg-blue-400" id="section-2"></section>
      <section className="w-screen h-screen bg-red-400" id="section-3"></section>
      <section
        id="section-4"
        ref={section4Ref}
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        {/* Regular HTML with canvas bits mixed into it (<View>) */}
        <View className="view" style={{ height: height, width: width }}>
          <Common color="lightblue" />
           {/* Wrap the mesh in a group */}
            <Mesh/> {/* Pass the state as a prop */}
          
          <OrbitControls makeDefault />
        </View>
      </section>

    </>
  );
}

function Common({ color }) {
  return (
    <>
      {color && <color attach="background" args={[color]} />}
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset="dawn" />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
    </>
  );
}