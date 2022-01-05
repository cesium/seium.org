export default function Button({ text, type, bg_color, fg_color, border, padding, onClick}) {
    return (
        <button onClick={onClick} type={type} className={`font-iregular bg-${bg_color} text-${fg_color} w-full rounded-full text-center items-center px-4 py-1 border border-${border} shadow-sm text-xl`}>
            { text }
        </button>
    );
}