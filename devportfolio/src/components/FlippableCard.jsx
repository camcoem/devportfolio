import React from "react";
import Card from "./Card";
import { useState } from "react";

export default function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippableCardContainer">
      <Card />
    </div>
  );
}
