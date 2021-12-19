import {useState} from 'react';
import Button from '/components/utils/Button';

export default function Challenge({list, title, description, extraDescription, actionItem, prizes, prizesUrls}) {

    const [st, changeState] = useState(false);
    const changeVisibility = () => {
        changeState(!st);
    };

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-24">
            <div>
                <ul className="font-ibold text-xl">
                    {list.map((name) => <li className={`mb-6 ${name == title ? "text-white ml-8" : "text-gray-700"}`}><a href={`#${name}`}>{name}</a></li>)}
                </ul>
            </div>
            <div>
                <h2 className="font-iextrabold text-white text-3xl md:text-4xl xl:text-5xl">{title}</h2>
                <p className="mt-10 font-iregular text-white">{description}</p>

                <div className={`mt-5 w-24 ${extraDescription == "" ? "hidden" : "block"}`}>
                    <Button onClick={(e) => changeVisibility()} fg_color="white" text={st ? "-" : "+"}/>
                </div>
                

                <div className={!st ? "hidden" : "block"}>
                    <p className="mt-10 font-iregular text-white">{extraDescription}</p>
                </div>            

                <div>
                    <h3 className="mt-5 mb-3 text-white text-ibold text-xl md:text-md xl:text-md ">Awards 🏆</h3>
                    <p><a href={prizesUrls[0]} className="text-iregular text-aqua">1<sup>st</sup> place - {prizes[0]}</a></p>
                    <p><a href={prizesUrls[1]} className="text-iregular text-aqua">2<sup>nd</sup> place - {prizes[1]}</a></p>
                    <p><a href={prizesUrls[2]} className="text-iregular text-aqua">3<sup>rd</sup> place - {prizes[2]}</a></p>
                </div>

                <div className="mt-5">
                    {actionItem}
                </div>
            </div>
        </div>
    );
}