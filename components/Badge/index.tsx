import Link from "next/link";
import { AllHTMLAttributes, ReactEventHandler, useState } from "react";

interface BadgeProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "id" | "name" | "type"> {
  name: string;
  id: string | number;
  avatar: string;
  tokens: string | number;
  owned?: boolean;
  disableLink?: boolean;
  disableOwnedHighlight?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  name,
  id,
  avatar,
  tokens,
  owned,
  disableLink = false,
  disableOwnedHighlight = false,
  ...rest
}) => {
  const [badgeLoaded, setBadgeLoaded] = useState(false);
  const [fallbackRan, setFallbackRan] = useState(false);

  const highlightBadge = owned || !disableOwnedHighlight || !badgeLoaded;

  const imageOnError: ReactEventHandler<HTMLImageElement> = (e) => {
    // prevent infinite loop fallback
    if (fallbackRan) {
      setBadgeLoaded(true);
      return;
    }

    setBadgeLoaded(false);
    e.currentTarget.src = "/images/badges/badge-not-found.svg";
    setFallbackRan(true);
  };

  return (
    <div
      className={`h-full w-full ${
        highlightBadge ? "opacity-100" : "opacity-30"
      }`}
      id={id.toString()}
      {...rest}
    >
      <Link href={disableLink ? "" : `/badge/${id}`}>
        <div className="flex aspect-square w-full select-none items-center justify-center">
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
    </div>
  );
};

export default Badge;

const BadgeSkeleton = () => {
  return (
    <div className="aspect-square w-10/12 animate-pulse rounded-full bg-gray-500 opacity-5" />
  );
};
