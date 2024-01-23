function App() {
  return (
    <div className="box">
      <div className="left">
        <img src="https://flagcdn.com/gb-nir.svg" alt="Flag" />
      </div>
      <div className="right">
        <img src="https://flagcdn.com/fm.svg" alt="Flag" />
      </div>
      <div className="overlay"></div>
      <div className={"translator"}>
        <h1>🤖translate to any language you want 🫵 </h1>

        <div className={"translator-text-box"}>
          <textarea className={"text"} name="" id="" cols="30" rows="10">
            Hello
          </textarea>

          <textarea className={"text"} name="" id="" cols="30" rows="10">
            Merhaba
          </textarea>
        </div>

        <div className={"translator-selection-box"}>
          <select className={"select-language"} name="" id="">
            <option value="">English</option>
            <option value="">Turkish</option>
          </select>

          <button className={"translate-btn"}>Translate</button>

          <select className={"select-language"} name="" id="">
            <option value="">Turkish</option>
            <option value="">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
