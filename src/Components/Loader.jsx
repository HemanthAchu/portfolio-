import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 1000,  // To ensure it's on top of other elements in the scene
      }}
    >
      <span
        className="canvas-loader"
        style={{
          width: "50px",   // You can adjust the size of your loader here
          height: "50px",  // Same for height
          borderRadius: "50%",
          border: "5px solid #6670F1",  // Loader color, change as needed
          borderTop: "5px solid transparent",  // To give the spinning effect
          animation: "spin 1s linear infinite",  // This creates a spinning effect
        }}
      ></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress.toFixed(3)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
