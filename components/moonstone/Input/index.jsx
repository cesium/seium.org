export default function Input({ text, id, name, type, autocomplete, className }) {
    return (
        <div>
            <label htmlFor={id} className="pl-6 text-white mt-5 block text-sm">
                {text}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autocomplete}
                    required className="pl-6 text-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm bg-darkest_blue placeholder-gray-400 focus:outline-none sm:text-sm"
                />
            </div>
        </div>
    );
}