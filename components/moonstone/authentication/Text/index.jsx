export default function Text (props){
    return (
        <div className={`pl-${props.padding} mt-4 flex items-center justify-between`}>
            <div className="font-iregular text-sm text-white">
                {props.text}
                <a href={props.href} className="pl-2 font-medium underline text-quinary">
                    {props.link}
                </a>
            </div>
        </div>
    )
}