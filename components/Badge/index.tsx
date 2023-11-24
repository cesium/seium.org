import Link from "next/link";
import { ReactEventHandler } from "react";

interface BadgeProps {
  name: string;
  id: string | number;
  avatar: string;
  tokens: string | number;
  owned: boolean;
}

export default function Badge({ name, id, avatar, tokens, owned }: BadgeProps) {
  const imageOnError: ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = "/images/badges/badge-template.svg";
  };

  return (
    <Link
      href={`/badge/${id}`}
      className={`h-full w-full ${owned ? "opacity-100" : "opacity-30"}`}
    >
      <div>
        <img src={avatar} onError={imageOnError} alt="Badge Image"></img>
      </div>

      <div className="flex flex-col justify-items-center text-center font-iregular">
        <div>{name}</div>
        <div>{tokens} 💰 </div>
      </div>
    </Link>
  );
}
