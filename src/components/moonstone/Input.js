// import  "../assets/css/style.css";

const Input = ({
  label,
  label2,
  type,
  name,
  placeholder,
  value,
  handleChange,
  error,
  input2,
  isDisabled = false,
}) => {
  return (
    <div className="input-container">
      <label>
        <p className="label" style={{ ...label2 }}>
          {" "}
          {label}{" "}
        </p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          {...(isDisabled ? { readOnly: "readonly" } : undefined)}
          style={{
            backgroundColor: error ? "rgba(255, 68, 68, 0.08)" : "",
            ...input2,
          }}
        />
      </label>
      <p className="textError"> {error ? error : ""}</p>
    </div>
  );
};
export default Input;
