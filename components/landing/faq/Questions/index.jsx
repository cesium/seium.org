import Link from 'next/link'
import React, { useState } from 'react';

export default function Questions(props) {
    const questions = [
        { title: 'How does the Hackathon work?', href: "", link: "Explore Hackathon", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.' },
        { title: 'What is the Moonstone?', href: "", link: "", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.' },
        { title: 'How does the Challenges work?', href: "", link: "", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.' },
        { title: 'Will the talks be recorded?', href: "", link: "", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.' },
        { title: 'What do I need to access the online conference?', href: "", link: "", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.' },
        { title: 'Will you provide a certificate of attendance?', href: "", link: "", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis erat in tellus porta, ut suscipit arcu iaculis. Sed tempor massa ipsum, et ornare dui dignissim vitae. Maecenas erat felis, laoreet sit amet felis quis, molestie pellentesque purus. Nam a euismod ante, a tincidunt elit.' },
    ]

    function Question(props) {
        const { title, description, href, link} = props
        const [showQuestion, setShowQuestion] = useState(true)

        return (
            <div className="text-white">
                <h2 className="text-2xl font-bold mb-4">{ title }</h2>
                <p className={showQuestion ? "hidden" : ""}>{ description }</p>
                <div className="flex justify-end">
                    <Link href={ href }>
                        <a className="text-aqua font-bold text-sm mr-4">{ link }</a>
                    </Link>
                    <button className="" onClick={() => setShowQuestion(!showQuestion)}> + </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            {questions.map((question) => (
                <Question { ...question }/>
            ))}
        </div>
    );
  }