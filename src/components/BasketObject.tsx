import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function BasketObject() {
  const image = useLoader(
    TextureLoader,
    new URL("./assets/basket.png", import.meta.url).href
  );
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        transparent
        map={image}
      />
    </mesh>
  );
}

export default BasketObject;
