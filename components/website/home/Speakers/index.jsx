import Button from "/components/utils/Button"
import Speaker from "/components/website/utils/Speaker"

import speakers from "/data/speakers_selection.json"

export default function Speakers() {
    return (
        <div className="flex flex-col justify-around lg:flex-row bg-secondary pt-40 pb-20 spacing">
            <div className="mb-10 lg:w-1/2">
                <h2 className="text-white font-iextrabold text-5xl lg:text-6xl mb-8">
                    Here’s a selection of this year’s speakers
                </h2>
                <div className="w-80">
                    <a href="/speakers">
                        <Button text="MEET THE SPEAKERS" customStyle="text-white bg-primary border-tertiary hover:bg-tertiary" />
                    </a>
                </div>
            </div>
            <div className="grid gap-y-8 gap-x-2 grid-cols-2 justify-items-center lg:gap-x-8">
                {speakers.map((mentor, i) =>
                    <div key={i}>
                        <Speaker {...mentor} />
                    </div>
                )}
            </div>
        </div>
    );
}