export default function Selection({ children, value, onChangeHandler }) {
  return (
    <select
      className={"select-language"}
      name="targetLanguage"
      id="target"
      value={value}
      onChange={onChangeHandler}
    >
      {children}
    </select>
  );
}
