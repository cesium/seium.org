import Button from "/components/Button";

export default function Pitch() {
    return (
        <div className="w-3/5 text-white">
            <h2 className="text-4xl font-bold">
                We gather speakers, attract parterns and give our imagination wings, all for this to be your favorite week.
            </h2>
            <div className="mt-8">
                <Button type="submit" text="KNOW THE TEAM" fg_color="white" bg_color="" padding="36"/>
            </div>
        </div>
    );
}