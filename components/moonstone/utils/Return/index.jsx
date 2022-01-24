import Link from "next/link";

export default function Return({ componentStyle }) {
  return (
    <Link
      href="/"
      className={`${componentStyle} flex items-center justify-center font-iregular text-quinary sm:absolute`}
    >
      &lt; Back to SEI website
    </Link>
  );
}
