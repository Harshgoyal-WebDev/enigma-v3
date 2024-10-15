// src/components/Background/BackgroundShader.js
import React, { useRef, useEffect } from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, RenderPass, ShaderPass } from "three-stdlib";
import { DotScreenShader } from "./dotShader";

// Extend the required classes to make them available in R3F
extend({ EffectComposer, RenderPass, ShaderPass });

const BackgroundShader = () => {
  const { scene, camera, gl, size } = useThree();
  const composer = useRef();
  const materialRef = useRef();
  const clock = useRef(new THREE.Clock()); // Use a ref to retain the clock instance

  // Vertex Shader
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment Shader
  const fragmentShader = `
    varying vec3 vPosition;
    uniform float time;

    float mod289(float x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 perm(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

    float noise(vec3 p) {
        vec3 a = floor(p);
        vec3 d = p - a;
        d = d * d * (3.0 - 2.0 * d);

        vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
        vec4 k1 = perm(b.xyxy);
        vec4 k2 = perm(k1.xyxy + b.zzww);

        vec4 c = k2 + a.zzzz;
        vec4 k3 = perm(c);
        vec4 k4 = perm(c + 1.0);

        vec4 o1 = fract(k3 * (1.0 / 41.0));
        vec4 o2 = fract(k4 * (1.0 / 41.0));

        vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
        vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

        return o4.y * d.y + o4.x * (1.0 - d.y);
    }

    float lines(vec2 uv, float offset) {
        return smoothstep(0., 0.5 + offset * 0.5, abs(0.5 * (sin(uv.x * 5.) + offset * 2.0)));
    }

    mat2 rotate2D(float angle) {
        return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    }

    void main() {
        float n = noise(vPosition * 0.3 + time / 4.0);
        vec3 firstColor = vec3(0.8, 0.4, 0.1);
        vec3 black = vec3(0.0, 0.0, 0.0);
        vec3 secondColor = vec3(0.9, 0.8, 1.0);
        
        vec2 baseUV = rotate2D(n + 0.5) * vPosition.xy * 0.1;
        float basePattern = lines(baseUV, 0.5);
        float secondPattern = lines(baseUV, 0.1);

        vec3 baseColor = mix(firstColor, secondColor, basePattern);
        vec3 secondBaseColor = mix(baseColor, black, secondPattern);

        gl_FragColor = vec4(secondBaseColor, 1.0);
    }
  `;

  useEffect(() => {
    // Set up EffectComposer
    composer.current = new EffectComposer(gl);
    composer.current.setSize(size.width, size.height);
    composer.current.addPass(new RenderPass(scene, camera));

    const dotScreenPass = new ShaderPass(DotScreenShader);
    dotScreenPass.uniforms["scale"].value = 1.5; // Adjust scale value here
    composer.current.addPass(dotScreenPass);

    // Resize handler
    const handleResize = () => {
      composer.current.setSize(size.width, size.height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gl, scene, camera, size]);

  // Animation loop for the custom shader material
  useFrame(() => {
    const elapsedTime = clock.current.getElapsedTime(); // Use the clock to get elapsed time
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = elapsedTime; // Update time uniform
    }
    composer.current.render(); // Render the composer
  }, 1); // Set 1 as priority to render after everything else

  return (
    <mesh>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        uniforms={{
          time: { value: 0.0 },
        }}
      />
    </mesh>
  );
};

export default BackgroundShader;
