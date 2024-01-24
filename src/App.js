import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import Selection from "./Selection";
import Rating from "./Rating";
import Button from "./Button";

function App() {
  const [sourceText, setSourceText] = useState("");
  const [targetText, setTargetText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("fr");
  const [sourceFlag, setSourceFlag] = useState("");
  const [targetFlag, setTargetFlag] = useState("");
  const [numberOfUsed, setNumberOfUsed] = useState(0);
  const [ratedValue, setRatedValue] = useState(null);

  const languages = [
    { name: "English", code: "en", flag: "us" },
    { name: "Chinese", code: "zh", flag: "cn" },
    { name: "Spanish", code: "es", flag: "es" },
    { name: "French", code: "fr", flag: "fr" },
    { name: "German", code: "de", flag: "de" },
    { name: "Japanese", code: "ja", flag: "jp" },
    { name: "Korean", code: "ko", flag: "kr" },
  ];

  async function translateText() {
    if (sourceText === "") return;
    if (sourceText.trim() === "") return;

    try {
      // const apiUrl = `https://translation.googleapis.com`;
      // const requestBody = {
      //   contents: [sourceText],
      //   sourceLanguageCode: { sourceLanguage },
      //   targetLanguageCode: { targetLanguage },
      // };
      // const response = await fetch(apiUrl, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(requestBody),
      // });
      // if (!response.ok) {
      //   throw new Error(
      //     `Translation request failed with status: ${response.status}`,
      //   );
      // }
      // const data = await response.json();
      // setTargetText(data)

      setTimeout(() => {
        const sourceName = languages
          .filter((lang) => lang.code === sourceLanguage)
          .map((lang) => lang.name);
        const targetName = languages
          .filter((lang) => lang.code === targetLanguage)
          .map((lang) => lang.name);

        const text = `"${sourceText}" - translated from ${sourceName[0]} to ${targetName[0]} `;
        setTargetText(text);
        if (numberOfUsed < 10) setNumberOfUsed((isUsed) => isUsed + 1);
      }, 1000);
    } catch (error) {
      if (numberOfUsed < 10) setNumberOfUsed((isUsed) => isUsed + 1);
      console.error("Error:", error.message);
    }
  }
  function setFlag() {
    const sourceFlagCode = languages
      .filter((lang) => lang.code === sourceLanguage)
      .map((lang) => lang.flag);
    const targetFlagCode = languages
      .filter((lang) => lang.code === targetLanguage)
      .map((lang) => lang.flag);
    setSourceFlag(`https://flagcdn.com/${sourceFlagCode}.svg`);
    setTargetFlag(`https://flagcdn.com/${targetFlagCode}.svg`);
  }

  useEffect(
    function () {
      translateText();
      setFlag();
      console.log("In useEffect ");
    },
    [sourceLanguage, targetLanguage],
  );
  function handelSourceTextChange(e) {
    setSourceText(e.target.value);
    if (e.target.value === "") setTargetText("");
  }

  function handelSourceLanguageChange(e) {
    if (e.target.value === targetLanguage) return;
    setSourceLanguage(e.target.value);
  }
  function handelTargetLanguageChange(e) {
    if (e.target.value === sourceLanguage) return;

    setTargetLanguage(e.target.value);
  }
  return (
    <div className="box">
      <div className="left">
        <img src={sourceFlag} alt={sourceFlag} />
      </div>
      <div className="right">
        <img src={targetFlag} alt={targetFlag} />
      </div>
      <div className="overlay"></div>
      <div className={"main"}>
        <div className={"translator"}>
          <h1>🤖translate to any language you want 🫵 </h1>

          <div className={"translator-text-box"}>
            <TextArea onChange={handelSourceTextChange} value={sourceText} />
            <TextArea value={targetText} isDisabled={true} />
          </div>

          <div className={"translator-selection-box"}>
            <Selection
              onChangeHandler={handelSourceLanguageChange}
              value={sourceLanguage}
            >
              {languages.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </Selection>

            <Button onClickHandler={translateText}>Translate</Button>
            <Selection
              onChangeHandler={handelTargetLanguageChange}
              value={targetLanguage}
            >
              {languages.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </Selection>
          </div>
        </div>

        {numberOfUsed > 5 && ratedValue === null && (
          <div className={"rate-box"}>
            <Rating setRatedValue={setRatedValue} />
          </div>
        )}
      </div>
      {ratedValue !== null ? (
        <div className={"rating-feedback"}>
          <p>{ratedValue}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
