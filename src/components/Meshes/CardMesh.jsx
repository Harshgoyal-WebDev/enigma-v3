import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CardMesh() {
  const cardRef = useRef(null);

  const texture1 = useLoader(TextureLoader, "./assets/home/image-1.jpg");
  const texture2 = useLoader(TextureLoader, "./assets/home/image-2.jpg");
  const texture3 = useLoader(TextureLoader, "./assets/home/image-3.jpg");
  const texture4 = useLoader(TextureLoader, "./assets/home/image-4.jpg");
  const texture5 = useLoader(TextureLoader, "./assets/home/image-5.jpg");
  const texture6 = useLoader(TextureLoader, "./assets/home/image-6.jpg");
  const texture7 = useLoader(TextureLoader, "./assets/home/project-7.webp");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
       
        // markers: true,
        start: "top top",
        end: "+=2000 top",
        scrub: true,
      },
    });
    //  tl.to(".project-handles",{
    //   xPercent:-75,
    //   duration:5,
    //   ease:"none"
    //  })
    // Move the group to the left
    tl.to(cardRef.current.position, {
      x: -10, 
      duration: 5,
      delay:-5,
      ease: "none",
    }); 

    // Rotate each mesh individually on the y-axis
    cardRef.current.children.forEach((mesh, index) => {
      tl.to(
        mesh.rotation,
        {
          y: mesh.rotation.y - Math.PI / 4, 
          duration: 5,
          ease: "none",
          delay:-5
        },
        0
      ); 
    });
  }, []);

  return (
    <>
      <group ref={cardRef} position={[0, 0, 0]}>
        <mesh position={[1, 0.4, 0]} rotation={[0, -1.6, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="blue" />{" "}
          <meshStandardMaterial attach="material-1" color="blue" />{" "}
          <meshStandardMaterial attach="material-2" color="blue" />{" "}
          <meshStandardMaterial attach="material-3" color="blue" />{" "}
          <meshStandardMaterial attach="material-4" map={texture1} />{" "}
          <meshStandardMaterial attach="material-5" map={texture1} />
        </mesh>
        <mesh position={[3, 0.4, 0]} rotation={[0, -1.4, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="red" />{" "}
          <meshStandardMaterial attach="material-1" color="red" />{" "}
          <meshStandardMaterial attach="material-2" color="red" />{" "}
          <meshStandardMaterial attach="material-3" color="red" />{" "}
          <meshStandardMaterial attach="material-4" map={texture2} />{" "}
          <meshStandardMaterial attach="material-5" map={texture2} />
        </mesh>
        <mesh position={[5, 0.4, 0]} rotation={[0, -1.2, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="green" />{" "}
          <meshStandardMaterial attach="material-1" color="green" />{" "}
          <meshStandardMaterial attach="material-2" color="green" />{" "}
          <meshStandardMaterial attach="material-3" color="green" />{" "}
          <meshStandardMaterial attach="material-4" map={texture3} />{" "}
          <meshStandardMaterial attach="material-5" map={texture3} />
        </mesh>
        <mesh position={[7, 0.4, 0]} rotation={[0, -1, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="hotpink" />{" "}
          <meshStandardMaterial attach="material-1" color="hotpink" />{" "}
          <meshStandardMaterial attach="material-2" color="hotpink" />{" "}
          <meshStandardMaterial attach="material-3" color="hotpink" />{" "}
          <meshStandardMaterial attach="material-4" map={texture4} />{" "}
          <meshStandardMaterial attach="material-5" map={texture4} />
        </mesh>
        <mesh position={[9, 0.4, 0]} rotation={[0, -0.8, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="black" />{" "}
          <meshStandardMaterial attach="material-1" color="black" />{" "}
          <meshStandardMaterial attach="material-2" color="black" />{" "}
          <meshStandardMaterial attach="material-3" color="black" />{" "}
          <meshStandardMaterial attach="material-4" map={texture5} />{" "}
          <meshStandardMaterial attach="material-5" map={texture5} />
        </mesh>
        <mesh position={[11, 0.4, 0]} rotation={[0, -0.6, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="yellow" />{" "}
          <meshStandardMaterial attach="material-1" color="yellow" />{" "}
          <meshStandardMaterial attach="material-2" color="yellow" />{" "}
          <meshStandardMaterial attach="material-3" color="yellow" />{" "}
          <meshStandardMaterial attach="material-4" map={texture6} />{" "}
          <meshStandardMaterial attach="material-5" map={texture6} />
        </mesh>
        <mesh position={[13, 0.4, 0]} rotation={[0, -0.4, 0]}>
          <boxGeometry args={[3.5, 4.5, 0.1]} />
          <meshStandardMaterial attach="material-0" color="cyan" />{" "}
          <meshStandardMaterial attach="material-1" color="cyan" />{" "}
          <meshStandardMaterial attach="material-2" color="cyan" />{" "}
          <meshStandardMaterial attach="material-3" color="cyan" />{" "}
          <meshStandardMaterial attach="material-4" map={texture7} />{" "}
          <meshStandardMaterial attach="material-5" map={texture7} />
        </mesh>
      </group>
    </>
  );
}
