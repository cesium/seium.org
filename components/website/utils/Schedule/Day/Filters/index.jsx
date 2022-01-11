
export function isSelected(filters, filter)
{
    return filters.includes(`/${filter}/`);
}

//filters follows the format "/filter1//filter2/ ... /lastfilter/"

export default function Filters(props)
{
    //must not contain slashes '/'
    const filterList = [ "Talks", "Pitch", "Workshops", "Hackathons", "Breaks" ];

    function onClick(filter)
    {
        return function()
        {
            if (isSelected(props.filters, filter))
                props.updateFilters(props.filters.replace(`/${filter}/`, ""));
            else
                props.updateFilters(`${props.filters}/${filter}/`);
        }
    }

    return (
        <div className="block mt-8 pl-20">
            <h5 className="text-xl text-gray-300 font-iregular">FILTER BY</h5>
            <div className="mt-4 lg:w-2/3">
                { filterList.map((f, i) => <button key={i} onClick={onClick(f)}
                    className={`rounded-full text-center items-center m-1 px-12 py-2 text-md text-white font-ibold
                               border border-gray-300 shadow-sm
                               ${isSelected(props.filters, f) ?
                                    "bg-quinary border-quinary" :
                                    "hover:bg-tertiary hover:border-tertiary"}
                               `}>
                        { f }
                    </button>
                )}
            </div>
        </div>
    );
}