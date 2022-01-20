export default function Button({ text, type, onClick, customStyle }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${customStyle} font-iregular w-full rounded-full text-center items-center px-4 py-4 border shadow-sm text-sm`}
    >
      {text}
    </button>
  );
}
