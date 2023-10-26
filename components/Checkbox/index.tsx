export default function Checkbox({ children, onChange }) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        className="
              peer relative mt-1
              h-4 w-4 shrink-0 appearance-none rounded-sm border-2 border-white
              bg-white
              checked:border-0 checked:bg-quinary"
        onChange={onChange}
      />
      <label>{children}</label>
      <svg
        className="
                pointer-events-none 
                absolute mt-1 hidden
                h-4 w-4
                peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}
