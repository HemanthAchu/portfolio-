import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const NameAnimation = () => {
  const name = "hemanthathe"; // your name
  const [displayedText, setDisplayedText] = useState(""); // to store the letters being displayed

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + name[index]);
      index += 1;
      if (index === name.length) {
        clearInterval(interval); // stop the interval once all letters are displayed
      }
    }, 200); // Change 200 for faster or slower animation

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Store the springs for each letter ahead of time, avoiding dynamic calls inside render.
  const springs = displayedText
    .split("")
    .map((_, index) =>
      useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: index * 200, // delay to create staggered effect
      })
    );

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1 style={{ fontFamily: "Arial, sans-serif" }}>
        {displayedText.split("").map((letter, index) => (
          <animated.span key={index} style={springs[index]}>
            {letter}
          </animated.span>
        ))}
      </h1>
    </div>
  );
};

export default NameAnimation;
