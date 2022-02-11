export default function Button({ children, onClick }) {
  return (
    <div className="w-auto">
      <button
        onClick={onClick}
        className="m-auto block h-16 w-full rounded-full bg-quinary"
      >
        <p className="font-ibold font-bold">{children}</p>
      </button>
    </div>
  );
}
