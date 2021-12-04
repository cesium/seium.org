export default function Button({ text, type, bg_color, fg_color, border, padding}) {
    return (
        <button type={type} className={`bg-${bg_color} text-${fg_color} w-full rounded-full text-center items-center px-${padding} py-1 border border-${border} shadow-sm text-sm`}>
            { text }
        </button>
    );
}