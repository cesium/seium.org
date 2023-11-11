import Link from "next/link";

interface Props {
  componentStyle?: string;
}

export default function Return({ componentStyle }: Props) {
  return (
    <Link
      href="/"
      className={`${componentStyle} flex items-center justify-center font-iregular text-quinary sm:absolute`}
    >
      &lt; Back to SEI website
    </Link>
  );
}
