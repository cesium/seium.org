import challenges from "/data/challenges.json";

export default function List({ title }) {
  const list = Object.keys(challenges);

  return (
    <ul className="font-ibold text-xl">
      {list.map((challenge, i) => (
        <li
          key={i}
          className={`mb-6 ${
            challenge == title ? "text-white ml-8" : "text-gray-700"
          }`}
        >
          <a href={`#${challenge}`}>{challenge}</a>
        </li>
      ))}
    </ul>
  );
}
