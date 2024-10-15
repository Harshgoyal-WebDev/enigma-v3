import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
			import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
			import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
            import { DotScreenShader } from "./dotShader";

const BackgroundShader = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene, Camera, and Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 0.7; // Ensure the camera is far enough to see the sphere
    camera.position.y = -0.5; // Ensure the camera is far enough to see the sphere

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    
    const composer = new EffectComposer( renderer );
    composer.addPass( new RenderPass( scene, camera ) );

    const effect1 = new ShaderPass( DotScreenShader );
    effect1.uniforms[ 'scale' ].value = 4;
    composer.addPass( effect1 );

    // const effect2 = new ShaderPass( RGBShiftShader );
    // effect2.uniforms[ 'amount' ].value = 0.0015;
    // composer.addPass( effect2 );

    // const effect3 = new OutputPass();
    // composer.addPass( effect3 );

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

// Pattern code
float lines (vec2 uv, float offset){
    return smoothstep(
        0., 0.5 + offset * 0.5, abs(0.5 * (sin(uv.x * 35.) + offset * 2.))
    );
}

// Rotation
mat2 rotate2D(float angle) {
    return mat2(
        cos(angle), -sin(angle),
        sin(angle), cos(angle)
    );
}

void main() {
    float n = noise(vPosition * 1.5 + time/4.0); // Scale and offset for noise
    // Pattern colors
    // vec3 darkOrange = vec3(255.0 / 255.0, 240.0 / 255.0, 255.0 / 255.0); 
    // vec3 black = vec3(0.0, 0.0, 0.0); 
    // vec3 darkYellow = vec3(160.0 / 255.0, 240.0 / 255.0, 255.0 / 255.0); 
      vec3 firstColor = vec3(0.8, 0.4, 0.1) ;
    vec3 black = vec3(0.0, 0.0, 0.0); 
    vec3 secondColor = vec3(0.9, 0.8, 1.0);; 
    
    // Base pattern
    vec2 baseUV = rotate2D(n+0.5) * vPosition.xy * 0.1;
    float basePattern = lines(baseUV, 0.5);
    float secondPattern = lines(baseUV, 0.1);

    // Mixing of colors
    vec3 baseColor = mix(firstColor,secondColor, basePattern);
    vec3 secondBaseColor = mix(baseColor, black, secondPattern);

    gl_FragColor = vec4(secondBaseColor, 1.0);
}

// void main() {
//     float n = noise(vPosition * 2.0 + time/2.0); // Scale and offset for noise
    
//     // Aurora colors
//     vec3 color1 = vec3(0.0, 0.7, 0.5); // Green
//     vec3 color2 = vec3(0.8, 0.7, 1.0); // Blue
//     vec3 color3 = vec3(0.5, 0.0, 0.7); // Purple
//     vec3 color4 = vec3(0.0, 0.0, 0.0); // Pink

//     // Create a smooth transition between colors based on noise
//     float t1 = smoothstep(0.0, 1.0, n);
//     float t2 = smoothstep(0.2, 1.0, n);
    
//     // Blend colors to create an aurora effect
//     vec3 auroraColor = mix(color1, color2, t1);
//     auroraColor = mix(auroraColor, color3, t2);
//     auroraColor = mix(auroraColor, color4, 0.5 * sin(n * 3.0 + time)); // Adding dynamic variation

//     // Base pattern
//     vec2 baseUV = rotate2D(n + 0.6) * vPosition.xy * 0.1;
//     float basePattern = lines(baseUV, 0.5);
//     float secondPattern = lines(baseUV, 0.1);

//     // Mixing of colors
//     vec3 baseColor = mix(auroraColor, vec3(0.0), basePattern); // Mix with black
//     vec3 secondBaseColor = mix(baseColor, vec3(0.0), secondPattern);

//     gl_FragColor = vec4(secondBaseColor, 1.0); // Keep alpha at 1.0 for full opacity
// }




`;



    // Create Sphere Geometry and Shader Material
    const geometry = new THREE.PlaneGeometry(5,5); // Make sure sphere is visible
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side:THREE.DoubleSide,
      uniforms: {
        time: { value: 0.0 },
        
      },
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Add Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    // Add Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      material.uniforms.time.value = clock.getElapsedTime()/2; // Update time uniform
    //   sphere.rotation.x += 0.01; // Adjust rotation speed
    //   sphere.rotation.y += 0.01; // Adjust rotation speed
    composer.render(scene,camera);
    //   renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const style = {
    width: "100%",
    height: "100vh",
    display: "block",
    position: "fixed",
    backgroundColor: "#222", // Dark background for contrast
  };

  return (
    <div
      ref={mountRef}
      style={style}
      className="z-[-2] top-0 left-0"
    />
  );
};

export default BackgroundShader;
