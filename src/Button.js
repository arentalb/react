export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className={"translate-btn"}>
      {children}
    </button>
  );
}
