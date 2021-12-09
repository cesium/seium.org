import Button from "/components/utils/Button"
import Speaker from "./Speaker"

export default function Speakers() {
    return (
        <div className="flex flex-col justify-around lg:flex-row bg-dark_blue pt-40 pb-20 spacing">
            <div className="mb-10 lg:w-1/2">
                <h2 className="text-white font-bold text-5xl lg:text-6xl mb-8">
                    Here’s a selection of this year’s speakers
                </h2>
                <div>
                    <Button text="EXPLORE" />
                </div>
            </div>
            <div className="grid gap-y-8 gap-x-2 grid-cols-2 justify-items-center lg:gap-x-8">
                <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
                <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
                <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
                <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
                <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
                <Speaker id="joaooliveira" name="João Oliveira" job="CEO and Founder" company="Fake Company"/>
            </div>
        </div>
    );
}