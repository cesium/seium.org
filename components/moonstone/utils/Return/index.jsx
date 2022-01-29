import Link from "next/link";

export default function Return({ componentStyle }) {
  return (
    <Link href="/">
      <a
        className={`${componentStyle} text-quinary font-iregular flex items-center justify-center sm:absolute`}
      >
        &lt; Back to SEI website
      </a>
    </Link>
  );
}
