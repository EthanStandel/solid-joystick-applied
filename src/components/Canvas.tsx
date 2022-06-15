import { JoystickMoveEvent } from "solid-joystick";
import { Accessor, Component, createEffect, createSignal, onCleanup, untrack } from "solid-js";
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshMatcapMaterial, Mesh } from "three";

type CanvasProps = {
  leftJoystickState: Accessor<JoystickMoveEvent>;
  rightJoystickState: Accessor<JoystickMoveEvent>;
}

export const Canvas: Component<CanvasProps> = ({ leftJoystickState, rightJoystickState }) => {
  const container = <div onDblClick={() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.querySelector("#root")?.requestFullscreen();
    }
  }} /> as HTMLDivElement;
  const [size, setSize] = createSignal({ width: window.innerWidth, height: window.innerHeight });

  const resizeHandler = () =>
    setSize({ width: window.innerWidth, height: window.innerHeight });
  window.addEventListener("resize", resizeHandler);
  onCleanup(() => window.removeEventListener("resize", resizeHandler))

  createEffect(() => {
    const { renderer, scene, camera } = createInitialScene(container, size());

    onCleanup(() => container.removeChild(renderer.domElement))

    const animate = () => {
      const leftStick = untrack(leftJoystickState).offset.percentage;
      const rightStick = untrack(rightJoystickState).offset.percentage;
  
      camera.translateX(.1 * leftStick.x);
      camera.translateZ(.1 * leftStick.y);
  
      camera.rotateX(.03 * -rightStick.y);
      camera.rotateY(.03 * -rightStick.x);
  
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    animate();
  });

  return container;
}

const createInitialScene = (container: HTMLDivElement, { width, height }: { width: number; height: number }) => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshMatcapMaterial({ color: "red" });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  container.appendChild(renderer.domElement);

  return { renderer, scene, camera, cube };
}