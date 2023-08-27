import Image from "next/image";

export default function Speaker({ id, name, job, company }) {
  return (
    <div className="z-30 text-white grayscale filter hover:text-quinary hover:filter-none">
      <Image
        src={`/images/speakers/${id}.png`}
        width="210"
        height="210"
        alt={name}
      />
      <p className="text-md font-terminal-uppercase"> {name} </p>
      <p className="text-md font-imedium"> {job} </p>
      <p className="text-md font-imedium"> {company} </p>
    </div>
  );
}
