export default function Return({ top, left, mt, mt_sm }) {
    return (
        <a href="/" className={`text-quinary mt-${mt} sm:mt-${mt_sm} flex items-center justify-center sm:absolute sm:top-${top} sm:left-${left}`}>
            &lt; Back to SEI website
        </a>
    );
}
