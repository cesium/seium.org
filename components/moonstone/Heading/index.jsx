export default function Heading({text, children}) {
    return (
        <div className="flex w-full mb-5 border-b-solid border-b-2 border-black grid-cols-2">
            <div className="col-span-1">
                <span className="font-bold text-2xl">{text}</span>
            </div>
            <div className="col-span-1 w-full">
                {children}
            </div>
        </div>
        
    );
}