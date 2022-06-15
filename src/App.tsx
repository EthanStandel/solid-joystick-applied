import { Joystick, JoystickMoveEvent, initialStates } from "solid-joystick";
import { Component, createSignal, JSX } from "solid-js";
import { Canvas } from "./components/Canvas";

export const App: Component = () => {
  const [leftJoystickState, setLeftJoystickState] = createSignal<JoystickMoveEvent>(initialStates.eventState());
  const [rightJoystickState, setRightJoystickState] = createSignal<JoystickMoveEvent>(initialStates.eventState());
  
  return (
    <>
      <Canvas leftJoystickState={leftJoystickState} rightJoystickState={rightJoystickState} />
      <div style={styles.joystickContainer}>
        <Joystick
          enableGamepadSupport={true}
          onMove={setLeftJoystickState}
          baseProps={{ style: styles.joystickBase }}
          handleProps={{ style: styles.joystickHandle }}
        />
        <Joystick
          enableGamepadSupport={{ xIndex: 2, yIndex: 3 }}
          onMove={setRightJoystickState}
          baseProps={{ style: styles.joystickBase }}
          handleProps={{ style: styles.joystickHandle }}
        />
      </div>
    </>
  );
};

const styles: Record<string, JSX.CSSProperties> = {
  joystickContainer: {
    position: "fixed",
    bottom: "1rem",
    left: "1rem",
    width: "calc(100vw - 2rem)",
    "justify-content": "space-between",
    display: "flex",
    gap: "1rem"
  },
  joystickBase: {
    "border-radius": "50%",
    "z-index": 1,
    height: "min(35vh, 35vw)",
    width: "min(35vh, 35vw)",
    background: "rgba(255, 255, 255, .1)"
  },
  joystickHandle: {
    width: "50%",
    height: "50%",
    background: "rgba(255, 0, 0, .1)",
    "border-radius": "50%"
  }
}