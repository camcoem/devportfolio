import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e);
    };

    window.addEventListener("mouseMove ", mouseMove);

    return () => {
      window.removeEventListener(" mousemove ", mouseMove);
    };
  }, []);

  return <div className="cursor"></div>;
}
