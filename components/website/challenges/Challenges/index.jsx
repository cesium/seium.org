import Challenge from "./Challenge";

import challenges from '/data/challenges.json';

export default function Challenges() {
    return (
        <div className="flex flex-col w-full bg-dark_blue px-40 pb-20 spacing">
            {Object.keys(challenges).map(key =>
                <div key={key}>
                    <Challenge
                        title={key}
                        prizes={challenges[key].prizes}
                        description={challenges[key].descriptions}
                        rules={challenges[key].rules} 
                        />
                </div>
            )}
        </div>
    );
}