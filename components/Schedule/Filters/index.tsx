import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Filters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filterList = ["Talks", "Pitch", "Workshops", "Breaks"] as const;

  const handleClickFilter = useCallback(
    (filter: (typeof filterList)[number]) => {
      const params = new URLSearchParams(searchParams);

      const currentSelectedFilters = params.get("filter");

      const currentSelectedFiltersArray =
        currentSelectedFilters?.split(",") ?? [];

      const findFilterIndex = currentSelectedFiltersArray.indexOf(filter);

      if (findFilterIndex !== -1) {
        currentSelectedFiltersArray.splice(findFilterIndex, 1);
      } else {
        currentSelectedFiltersArray.push(filter);
      }

      params.set("filter", currentSelectedFiltersArray.join(","));

      const queryString = params.toString();

      router.push(pathname + "?" + queryString, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const isFilterSelected = useCallback(
    (filter: (typeof filterList)[number]) => {
      const currentSelectedFilters =
        searchParams.get("filter")?.split(",") ?? [];

      return currentSelectedFilters.indexOf(filter) !== -1;
    },
    [searchParams],
  );

  return (
    <div className="mt-8 block pl-4 sm:pl-20">
      <h5 className="font-iregular text-xl text-gray-300">FILTER BY</h5>
      <div className="grid-col-1 mt-4 grid sm:block lg:w-2/3">
        {filterList.map((filter, i) => (
          <button
            key={i}
            onClick={() => handleClickFilter(filter)}
            className={`text-md m-1 items-center rounded-full border px-12 py-2 text-center font-ibold
                                text-white shadow-sm
                                ${
                                  isFilterSelected(filter)
                                    ? "border-quinary bg-quinary text-primary opacity-100"
                                    : "opacity-50 hover:border-quinary hover:bg-secondary hover:text-quinary hover:opacity-80"
                                }
                                `}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
