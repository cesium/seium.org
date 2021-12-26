export default function Return({ ml, mt, mt_sm }) {
    return (
        <a href="/" className={`sm:ml-${ml} text-aqua mt-${mt} sm:mt-${mt_sm} flex items-center justify-center sm:absolute`}>
            &lt; Back to SEI website
        </a>
    );
}
