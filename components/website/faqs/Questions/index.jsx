import Question from './Question';

import questions from '/data/faqs';

export default function Questions(props) {
    return (
        <div className="flex flex-col">
            {questions.map((question,i) => (
                <Question key={i} {...question} />
            ))}
        </div>
    );
}