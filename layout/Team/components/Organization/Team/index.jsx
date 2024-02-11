import Member from "../Member";

export default function Team({ title, list, cols = 3 }) {
  return (
    <div>
      <h3 className="font-terminal-uppercase mb-4 text-white">{title}</h3>
      <div
        className="grid justify-items-center gap-8"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {list.map((member) => (
          <Member key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
