import Link from "next/link";
import { ReactEventHandler, useState } from "react";

interface BadgeProps {
  name: string;
  id: string | number;
  avatar: string;
  tokens: string | number;
  owned: boolean;
}

export default function Badge({ name, id, avatar, tokens, owned }: BadgeProps) {
  const [badgeLoaded, setBadgeLoaded] = useState(false);
  const [fallbackRan, setFallbackRan] = useState(false)

  const imageOnError: ReactEventHandler<HTMLImageElement> = (e) => {
    // prevent infinite loop fallback
    if (fallbackRan) {
      setBadgeLoaded(true);
      return
    }

    setBadgeLoaded(false);
    e.currentTarget.src = "/images/badges/badge-not-found.svg";
    setFallbackRan(true)
  };

  return (
    <Link
      href={`/badge/${id}`}
      className={`h-full w-full ${owned ? "opacity-100" : "opacity-30"}`}
    >
      <div className="flex justify-center items-center w-full aspect-square select-none">

        {!badgeLoaded && <BadgeSkeleton />}

        <img
          src={avatar}
          alt={name}
          onLoad={() => setBadgeLoaded(true)}
          onError={imageOnError}
        />
      </div>

      <div className="flex flex-col justify-items-center text-center font-iregular">
        <div>{name}</div>
        <div>{tokens} 💰 </div>
      </div>
    </Link>
  );
}

const BadgeSkeleton = () => {
  return (
    <div className="w-10/12 aspect-square rounded-full bg-gray-500 animate-pulse opacity-10"/>
  );
};
