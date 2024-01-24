import React, { useState } from "react";
import Button from "./Button";
import JSConfetti from "js-confetti";

export default function Rating({ onClick, setRating }) {
  const emoji = ["😕", "😐", "😊", "😃", "😍"];
  const [selected, setSelected] = useState(0);
  const [showSlider, setShowSlider] = useState(false);
  const jsConfetti = new JSConfetti();
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  function congrat() {
    jsConfetti.addConfetti({
      emojis: [emoji[selected - 1]],
    });
    jsConfetti.addConfetti();
  }
  return (
    <div className={"rating"}>
      <div className={"emojis"}>
        {emoji.map((em, index) => (
          <p
            onClick={() => setSelected(index + 1)}
            key={em}
            onMouseOver={() => {
              setShowSlider(true);
              setHoveredIndex(index);
            }}
            onMouseOut={() => {
              setShowSlider(false);
              setHoveredIndex(-1);
            }}
            className={`${hoveredIndex === index ? "emoji-hovered" : ""} `}
          >
            {em}
          </p>
        ))}
      </div>
      {selected !== 0 ? (
        <Button
          onClick={() => {
            congrat();
            onClick((isUsed) => isUsed + 1);
            setRating(selected);
          }}
        >
          Rate
        </Button>
      ) : (
        ""
      )}

      <div
        className={`slider  
        ${showSlider ? "slider-visible" : ""}
        ${selected > 0 ? "slider-visible" : ""}`}
      >
        {hoveredIndex !== -1 ? (
          <p>{emoji[hoveredIndex]}</p>
        ) : (
          <p>{emoji[selected - 1]}</p>
        )}
      </div>
    </div>
  );
}

{
  /*{Array.from({ length: 5 }).map((_, index) => (*/
}
{
  /*  <p>{index}</p>*/
}
{
  /*))}*/
}
