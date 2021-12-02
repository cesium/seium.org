export default function Input({ text, id, name, type, autocomplete, fgColor, bgColor }) {
    return (
        <div>
            <label htmlFor={id} className={`pl-6 text-${fgColor} mt-5 block text-sm`}>
                {text}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autocomplete}
                    required className={`text-${fgColor} bg-${bgColor} pl-6 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm`}
                />
            </div>
        </div>
    );
}