export default function Button({ onClickHandler, children }) {
  return (
    <button onClick={onClickHandler} className={"translate-btn"}>
      {children}
    </button>
  );
}
