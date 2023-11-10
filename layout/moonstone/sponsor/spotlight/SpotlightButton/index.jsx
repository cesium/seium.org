import Button from "@components/Button";

export default function SpotlightButton() {
  return (
    <div className="mt-8 w-auto">
      <Button
        customStyle="m-auto block h-16 w-full rounded-full bg-quinary"
        text="Ativar Spotlight"
      />
    </div>
  );
}
