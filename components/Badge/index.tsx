import Link from "next/link";
import { AllHTMLAttributes, memo, useState } from "react";

interface BadgeProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "id" | "name" | "type"> {
  name: string;
  id: string | number;
  avatar: string;
  tokens: string | number;
  owned: boolean;
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
  const [badge404, setBadge404] = useState(false);

  const highlightBadge = owned || disableOwnedHighlight || !badgeLoaded;

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

          {badge404 && (
            <img src={"/images/badges/badge-not-found.svg"} alt={name} />
          )}

          <img
            src={avatar}
            alt={name}
            onLoad={() => setBadgeLoaded(true)}
            onError={() => {
              setBadge404(true);
              setBadgeLoaded(true);
            }}
            hidden={!badgeLoaded || badge404}
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

export default memo(Badge);

const BadgeSkeleton = () => {
  return (
    <div className="aspect-square w-10/12 animate-pulse rounded-full bg-gray-500 opacity-5" />
  );
};
