export default function Link({href, fgColor, children}) {
    return (
        <a href={href} className={`pl-6 text-${fgColor} h-auto inline-block underline`}>{children}</a>
    );
}