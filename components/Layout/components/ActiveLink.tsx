import Link from "next/link";

type IActiveLinkProps = {
  link: string;
  href: string;
  basePath: string;
};

export default function ActiveLink({ link, href, basePath }: IActiveLinkProps) {
  const activeStyle = href === `/${basePath}/${link}` && "text-quinary";

  return (
    <Link
      href={`/${basePath}/${link}`}
      className={`py-8 font-ibold text-xs uppercase transition duration-200 hover:text-quinary ${activeStyle}`}
    >
      {link}
    </Link>
  );
}
