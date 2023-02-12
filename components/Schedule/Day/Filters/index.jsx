export function isSelected(filters, filter) {
  return filters.includes(`/${filter}/`);
}

//filters follows the format "/filter1//filter2/ ... /lastfilter/"

export default function Filters(props) {
  //must not contain slashes '/'
  const filterList = ["Talks", "Pitch", "Workshops", "Breaks"];

  function onClick(filter) {
    return function () {
      if (isSelected(props.filters, filter))
        props.updateFilters(props.filters.replace(`/${filter}/`, ""));
      else props.updateFilters(`${props.filters}/${filter}/`);
    };
  }

  return (
    <div className="mt-8 block pl-4 sm:pl-20">
      <h5 className="font-iregular text-xl text-gray-300">FILTER BY</h5>
      <div className="grid-col-1 mt-4 grid sm:block lg:w-2/3">
        {filterList.map((f, i) => (
          <button
            key={i}
            onClick={onClick(f)}
            className={`text-md m-1 items-center rounded-full border px-12 py-2 text-center font-ibold
                                text-white shadow-sm
                               ${
                                 isSelected(props.filters, f)
                                   ? "border-quinary bg-quinary text-primary opacity-100"
                                   : "opacity-50 hover:border-quinary hover:bg-secondary hover:text-quinary hover:opacity-80"
                               }
                               `}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
