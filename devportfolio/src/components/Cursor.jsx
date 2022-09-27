import React from "react";
import { useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  return <div className="cursor"></div>;
}
