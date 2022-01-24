export default function CodeInput() {
  return (
    <div className="pt-4">
      <input
        type="text"
        placeholder="CODE"
        className="h-10 w-80 rounded-full border border-quinary pl-4 pr-28 font-iregular"
      ></input>
      <button className="-ml-28 h-10 w-28 rounded-full bg-quinary font-iregular">
        SEND
      </button>
    </div>
  );
}
