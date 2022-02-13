export default function Button({ text, type, disabled, onClick, customStyle }) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${customStyle} font-iregular w-full items-center rounded-full border px-4 py-4 text-center text-sm shadow-sm`}
    >
      {text}
    </button>
  );
}
