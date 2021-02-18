// import  "../assets/css/style.css";

const Input = (props) => {
  return (
    <div className="input-container">
      <label>
        <p className="label" style={{ ...props.label2 }}>
          {" "}
          {props.label}{" "}
        </p>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
          style={{
            backgroundColor: props.error ? "rgba(255, 68, 68, 0.08)" : "",
            ...props.input2,
          }}
        />
      </label>
      <p className="textError"> {props.error ? props.error : ""}</p>
    </div>
  );
};
export default Input;
