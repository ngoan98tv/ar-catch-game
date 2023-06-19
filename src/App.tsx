import {
  BrowserCompatibility,
  FaceLandmark,
  FaceTracker,
  ZapparCamera,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import { useState } from "react";

import BasketObject from "./components/BasketObject";

function App() {
  const [faceVisible, setFaceVisible] = useState(false);

  const handleFaceVisible = () => setFaceVisible(true);
  const handleFaceInvisible = () => setFaceVisible(false);

  return (
    <>
      <BrowserCompatibility fallback={<div>Sorry!</div>} />
      <ZapparCanvas>
        <ZapparCamera
          userCameraMirrorMode="css"
          userFacing
        />
        <FaceTracker
          onVisible={handleFaceVisible}
          onNotVisible={handleFaceInvisible}
        />
        {faceVisible && (
          <FaceLandmark target="chin">
            <BasketObject />
          </FaceLandmark>
        )}
        <directionalLight
          position={[2.5, 8, 5]}
          intensity={1.5}
        />
      </ZapparCanvas>
    </>
  );
}

export default App;
