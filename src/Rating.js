import Button from "./Button";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";

export default function Rating({ onClick, setRating }) {
  const emoji = ["😕", "😐", "😊", "😃", "😍"];
  const [selected, setSelcted] = useState(0);
  const jsConfetti = new JSConfetti();

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
          <p onClick={() => setSelcted(index + 1)} key={em}>
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
