export default function TextArea({ value, onChange, isDisabled = false }) {
  return (
    <textarea
      className={"text"}
      name=""
      id=""
      cols="30"
      rows="10"
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    >
      {value}
    </textarea>
  );
}
