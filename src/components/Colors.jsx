import { useState } from "react";
export default function Colors() {
  const [isHex, setIsHex] = useState(true);
  const [color, setColor] = useState("000000");

  function handleColor() {
    let newColor = "";
    if (isHex) {
      const hexValues = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      for (let i = 0; i < 6; i++) {
        const char = hexValues[Math.floor(Math.random() * hexValues.length)];
        newColor += char;
      }
      setColor(newColor);
    } else {
      const num1 = Math.floor(Math.random() * 255);
      const num2 = Math.floor(Math.random() * 255);
      const num3 = Math.floor(Math.random() * 255);
      newColor = `rgb(${num1},${num2},${num3})`;
      setColor(newColor);
    }
  }

  function handleFormat() {
    const newIsHex = !isHex;
    setIsHex(newIsHex);
    if (newIsHex) {
      setColor("000000");
    } else {
      setColor("rgb(0,0,0)");
    }
  }

  return (
    <main className="space-y-4">
      <h1 className="text-center text-3xl font-bold">Color Generator</h1>
      <p className="font-semibold text-xl">
        Current Format: {isHex ? "Hex" : "RGB"}
      </p>
      <button
        className="px-3 py-2 shadow-lg shadow-gray-500/50 bg-blue-500 text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97] uppercase"
        onClick={handleFormat}
      >
        Change Format
      </button>
      <p className="font-semibold text-xl">
        Color: {isHex ? `#${color}` : color}
      </p>
      <button
        className="px-3 py-2 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97] uppercase"
        onClick={handleColor}
      >
        Change Color
      </button>
      <div
        className={`w-64 h-64 ${
          isHex ? `bg-[#${color}]` : `bg-[${color}]`
        } rounded`}
      ></div>
    </main>
  );
}
