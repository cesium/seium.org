import Button from "@components/Button";

export default function Pitch() {
  return (
    <div className="xl:9/12 font-terminal-uppercase w-full select-none text-white lg:w-9/12">
      <h2 className="text-4xl font-bold">
        We gather speakers, attract partners and give our imagination wings, all
        for this to be your favorite week.
      </h2>
      <div className="mt-8 flex w-56">
        <a href="/team">
          <Button
            title="MEET THE TEAM"
            className="h-20 w-56 border-2 border-white text-white hover:border-quinary hover:text-quinary"
            bold={true}
          />
        </a>
      </div>
    </div>
  );
}
