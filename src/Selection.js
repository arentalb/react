export default function Selection({ children, value, onChange }) {
  return (
    <select
      className={"select-language"}
      name="targetLanguage"
      id="target"
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}
