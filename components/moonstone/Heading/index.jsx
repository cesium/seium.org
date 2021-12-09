export default function Heading({text, children}) {
    return (
        <div className="w-full mb-5 pb-3 border-b-solid border-b-2 border-black grid-cols-2 overflow-hidden">
            <div className="col-span-1 flex float-left h-full">
                <p className="inline-block align-middle font-bold text-2xl">{text}</p>
            </div>
            <div className="col-span-1 flex float-right">
                {children}
            </div>
        </div>
        
    );
}