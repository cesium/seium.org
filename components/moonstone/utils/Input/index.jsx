export default function Input({
  text,
  id,
  name,
  type,
  autocomplete,
  fgColor,
  bgColor,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`pl-6 font-iregular text-${fgColor} mt-5 block text-sm`}
      >
        {text}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autocomplete}
          required
          className={`text-iregular text-${fgColor} bg-${bgColor} block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-6 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm`}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
