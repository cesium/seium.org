import Link from 'next/link'
import React, { useState } from 'react';

import questions from '/data/faqs';

function Question(props) {
    const { title, description, href, link } = props
    const [showQuestion, setShowQuestion] = useState(true)

    return (
        <div className="text-white border-t-2 border-white py-4">
            <h2 className="text-2xl md:text-4xl font-iextrabold mb-4">{title}</h2>
            <p className={showQuestion ? "hidden" : ""}>{description}</p>
            <div className="flex justify-end items-center">
                <Link href={href}>
                    <a className="text-quinary font-iextrabold text-sm mr-4">{link}</a>
                </Link>
                <button className="bg-quinary px-2 font-iextrabold text-xl text-white rounded-full w-16" onClick={() => setShowQuestion(!showQuestion)}>
                    {showQuestion ? "+" : "-"}
                </button>
            </div>
        </div>
    );
}

export default function Questions(props) {
    return (
        <div className="flex flex-col">
            {questions.map((question) => (
                <Question {...question} />
            ))}
        </div>
    );
}