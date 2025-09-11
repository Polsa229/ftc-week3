import React from "react";

const colorMap = {
  red: "#FF0000",
  apricot: "#FBCEB1",
  black: "#000000",
  silver: "#C0C0C0",
  tan: "#D2B48C",
  white: "#FFFFFF",
};

const ColorSwatch = ({ color }) => {
  const colorArray = color.split("&").map((c) => c.trim());
  const isGradient = colorArray.length > 1;

  const background = isGradient
    ? `linear-gradient(90deg, ${
        colorMap[colorArray[0]] || colorArray[0]
      } 50%, ${colorMap[colorArray[1]] || colorArray[1]} 50%)`
    : colorMap[colorArray[0]] || colorArray[0];

  return (
    <div
      className="w-[15px] h-[15px] rounded-[10px] opacity-100"
      style={{
        background,
        transform: "rotate(0deg)",
        border: "1px solid #ccc",
      }}
      title={color}
    />
  );
};

export default ColorSwatch;
