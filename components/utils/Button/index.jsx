export default function Button({ text, type, onClick, customStyle }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${customStyle} w-full items-center rounded-full border px-4 py-4 text-center font-iregular text-sm shadow-sm`}
    >
      {text}
    </button>
  );
}
