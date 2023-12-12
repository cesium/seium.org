import Link from "next/link";
import Button from "@components/Button";

export default function Regulations() {
  return (
    <div className="spacing justify-center bg-secondary pt-20 pb-20 sm:flex sm:flex-col lg:flex-row">
      <div className="w-full gap-y-8 text-center sm:mt-6 sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-2 lg:gap-x-8">
        <div className="sm:mt-2">
          <h2 className="relative text-xl font-bold text-white md:w-full md:text-3xl">
            Ready to go? 👉
          </h2>
        </div>
        <div className="mt-6 sm:mt-0 sm:w-80">
          <Link href={"/docs/hackathon.pdf"}>
            <Button
              title="READ THE RULES"
              customStyle="text-white bg-primary border-tertiary hover:bg-tertiary"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
