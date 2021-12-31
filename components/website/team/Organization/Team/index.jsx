import Member from "../Member";

export default function Team({ title, list }) {
    return (
        <div>
            <h3 className="font-iextrabold text-white mb-4">{title}</h3>
            <div className="grid grid-cols-2 gap-8 justify-items-center">
                {list.map(member => (
                    <Member { ...member }/>
                ))}
            </div>
        </div>
    );
}