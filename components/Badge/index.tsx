import Link from "next/link";

export default function Badge({ name, id, avatar, tokens, owned }) {
  return (
    <Link
      href={`/badge/${id}`}
      className={`h-full w-full ${owned ? "opacity-100" : "opacity-30"}`}
    >
      <div>
        <img src={avatar} alt={name}></img>
      </div>
      <div className="flex flex-col justify-items-center text-center font-iregular">
        <div>{name}</div>
        <div>{tokens} 💰 </div>
      </div>
    </Link>
  );
}
