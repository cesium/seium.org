export default function Checkbox({ onChange, selected, children }) {
  return (
    <div>
      <label className="rounded-sm bg-quinary">
        <input className="hidden" type="checkbox" onChange={onChange}></input>
        <span
          className={`text-sm text-white ${
            selected ? "bg-quinary" : "bg-white"
          } select-none border-2 border-quinary px-1 font-ibold`}
        >
          {" "}
          &#10003;
        </span>
      </label>
      <label className="text-md ml-2 select-none text-white">{children}</label>
    </div>
  );
}
