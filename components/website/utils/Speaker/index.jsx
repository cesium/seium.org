import Image from "next/image";

export default function Speaker({ id, name, job, company }) {
  return (
    <div className="text-white hover:text-quinary z-30 filter grayscale hover:filter-none">
      <Image src={`/images/speakers/${id}.png`} width="210" height="210" />
      <p className="text-md font-iextrabold"> {name} </p>
      <p className="text-md font-imedium"> {job} </p>
      <p className="text-md font-imedium"> {company} </p>
    </div>
  );
}
