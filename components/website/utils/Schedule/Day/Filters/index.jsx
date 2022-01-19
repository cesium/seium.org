export function isSelected(filters, filter) {
  return filters.includes(`/${filter}/`);
}

//filters follows the format "/filter1//filter2/ ... /lastfilter/"

export default function Filters(props) {
  //must not contain slashes '/'
  const filterList = ["Talks", "Pitch", "Workshops", "Hackathons", "Breaks"];

  function onClick(filter) {
    return function () {
      if (isSelected(props.filters, filter))
        props.updateFilters(props.filters.replace(`/${filter}/`, ""));
      else props.updateFilters(`${props.filters}/${filter}/`);
    };
  }

  return (
    <div className="block mt-8 pl-4 sm:pl-20">
      <h5 className="text-xl text-gray-300 font-iregular">FILTER BY</h5>
      <div className="mt-4 grid grid-col-1 sm:block lg:w-2/3">
        {filterList.map((f, i) => (
          <button
            key={i}
            onClick={onClick(f)}
            className={`rounded-full text-center items-center m-1 px-12 py-2 text-md text-white font-ibold
                                opacity-50 border shadow-sm
                               ${
                                 isSelected(props.filters, f)
                                   ? "bg-quinary border-quinary text-primary opacity-100"
                                   : "hover:bg-secondary hover:border-secondary hover:text-quinary hover:opacity-80"
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
