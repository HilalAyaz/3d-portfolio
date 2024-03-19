import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-40 h-40 border-4 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-ping" />
      </div>
    </Html>
  );
};

export default Loader;
