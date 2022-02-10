import Link from "next/link";

export default function Badge({ name, id, avatar, tokens }) {
  return (
    <Link href={`/badge/${id}`}>
      <a className="h-full w-full">
        <div>
          <img src={avatar} className="" alt="Error"></img>
        </div>
        <div className="grid grid-rows-2 justify-items-center font-iregular">
          <div>{name}</div>
          <div>{tokens} 💰 </div>
        </div>
      </a>
    </Link>
  );
}
