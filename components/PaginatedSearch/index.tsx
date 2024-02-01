import { ReactElement, useEffect, useState } from "react";

export default function PaginatedSearch<Elem>({
  limit,
  fetchElems,
  showElems,
  children
} : {
  limit: number,
  fetchElems: (query: string, offset: number, limit: number) => Promise<Elem[]> | Elem[],
  showElems: (elems : Elem[]) => ReactElement
  children?: ReactElement
}) {
  const [ query, updateQuery ] = useState<string>("");
  const [ offset, updateOffset ] = useState<number>(0);
  const [ elems, updateElems ] = useState<Elem[]>([]);

  useEffect(() => {
    (async () => {
      const fetched = await fetchElems(query, offset, limit);
      updateElems(fetched);
    })();
  }, [query, offset]);

  return (
    <>
      { /*TODO: search bar and pagination*/ }
      { children }
      { showElems(elems) }
    </>
  );
}