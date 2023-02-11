import Button from "@components/Button";

export default function Pitch() {
  return (
    <div className="xl:9/12 w-full font-iextrabold text-white lg:w-9/12">
      <h2 className="text-4xl font-bold">
        We gather speakers, attract parterns and give our imagination wings, all
        for this to be your favorite week.
      </h2>
      <div className="mt-8 flex w-56">
        <a href="/team">
          <Button
            text="MEET THE TEAM"
            customStyle="hover:text-quinary hover:border-quinary"
          />
        </a>
      </div>
    </div>
  );
}
