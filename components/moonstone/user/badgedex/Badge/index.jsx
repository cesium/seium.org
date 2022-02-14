import Link from "next/link";

export default function Badge({ name, id, avatar, tokens, opacity }) {
  return (
    <Link href={`/badge/${id}`}>
      <a className={`h-full w-full ${opacity}`}>
        <div>
          <img src={avatar} alt={name}></img>
        </div>
        <div className="flex flex-col justify-items-center text-center font-iregular">
          <div>{name}</div>
          <div>{tokens} 💰 </div>
        </div>
      </a>
    </Link>
  );
}
