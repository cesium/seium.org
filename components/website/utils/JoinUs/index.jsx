export default function Navbar(props) {
    return (
        <a
            href=""
            className={`flex transform rotate-15 -mt-5 text-xl font-ibold items-center justify-center h-28 w-28 text-${props.fgColor} bg-${props.button} rounded-full translate-x-0`}>
            Join us 👋
        </a>);
}