import React, { useState } from "react";
import Button from "./Button";
import JSConfetti from "js-confetti";

export default function Rating({ setRatedValue }) {
  const emojiList = ["😕", "😐", "😊", "😃", "😍"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  const jsConfetti = new JSConfetti();

  function congratulation() {
    jsConfetti.addConfetti({
      emojis: [emojiList[selectedIndex - 1]],
    });
    jsConfetti.addConfetti();
    setRatedValue(emojiList[selectedIndex - 1]);
  }

  return (
    <div className={"rating"}>
      <div className={"emojis"}>
        {emojiList.map((emoji, index) => (
          <p
            onClick={() => setSelectedIndex(index + 1)}
            key={emoji}
            onMouseOver={() => {
              setShowSlider(true);
              setHoveredIndex(index + 1);
            }}
            onMouseOut={() => {
              setShowSlider(false);
              setHoveredIndex(0);
            }}
            className={`${hoveredIndex === index + 1 ? "emoji-hovered" : ""} `}
          >
            {emoji}
          </p>
        ))}
      </div>
      {selectedIndex !== 0 ? (
        <Button onClickHandler={() => congratulation()}>Rate</Button>
      ) : (
        ""
      )}

      <div
        className={`slider  
        ${showSlider ? "slider-visible" : ""}
        ${selectedIndex > 0 ? "slider-visible" : ""}`}
      >
        {hoveredIndex !== 0 ? (
          <p>{emojiList[hoveredIndex - 1]}</p>
        ) : (
          <p>{emojiList[selectedIndex - 1]}</p>
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
