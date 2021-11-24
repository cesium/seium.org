import Image from "next/image"

export default function Speaker({ id, name, job, company }) {
  return (
    <div className="text-white">
      <Image src={`/images/speakers/${id}.png`} width="210" height="210" />
      <p className="text-md font-bold"> { name } </p>
      <p className="text-md "> { job } </p>
      <p className="text-md "> { company } </p>
    </div>
  );
}