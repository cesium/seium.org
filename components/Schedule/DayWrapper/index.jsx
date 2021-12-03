import { useState, useEffect, useRef } from 'react'

function safeParseFloat(str)
{
    if (str === undefined || str === null || str === "")
        return 0;

    return parseFloat(str);
}

function getHeight(elem)
{
    return elem.clientHeight - safeParseFloat(window.getComputedStyle(elem, null).getPropertyValue('padding-top'))
                             - safeParseFloat(window.getComputedStyle(elem, null).getPropertyValue('padding-bottom'));
}

export default function DayWrapper(props)
{
    const paddingTop = 50;

    const [style, updateStyle] = useState({"position": "", "top": paddingTop, "padding": 0});
    const inputRef = useRef();

    const scrollHandler = _ => {
        const offset = paddingTop - inputRef.current.parentNode.getBoundingClientRect().top
            - safeParseFloat(window.getComputedStyle(inputRef.current.parentNode, null).getPropertyValue('padding-top'));
        const height = getHeight(inputRef.current.parentNode) - getHeight(inputRef.current.childNodes[0]) - paddingTop;
        console.log("height: " + height);
        //console.log("offset: " + offset);

        if (offset < 0)
            updateStyle(prevStyle => ({...prevStyle, "position": "", "padding-top": 0}));
        else if (offset < height)
            updateStyle(prevStyle => ({...prevStyle, "position": "fixed", "padding-top": 0}));
        else
            updateStyle(prevStyle => ({...prevStyle, "position": "", "padding-top": height}));
    };

    useEffect(() => {
        scrollHandler();
        addEventListener("scheduleUpdate", scrollHandler, false);
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);

    return (
        <div id="cena" ref={inputRef} className="" style={style}>
            { props.day }
        </div>
    );
}