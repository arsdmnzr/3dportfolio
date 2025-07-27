import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

function ResumeBox() {
  return (
    <mesh>
      <boxGeometry args={[3, 4, 0.3]} />
      <meshStandardMaterial color="lightblue" />
      <Html center>
        <div style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          <strong>Linux Admin</strong><br />
          Arshad Manzoor
        </div>
      </Html>
    </mesh>
  );
}

export default function Resume3D() {
  return (
    <section style={{ height: "400px" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ResumeBox />
        <OrbitControls />
      </Canvas>
    </section>
  );
}
