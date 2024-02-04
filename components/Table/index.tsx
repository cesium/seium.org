import { Key, ReactElement } from "react";
import TableColumn, { Align, TableColumnProps, alignToCSS, printHeader, resolveProps } from "./TableColumn";

export { TableColumn, Align };

type TableProps<T> = {
  children: ReactElement<TableColumnProps<T>>[];
  elems: T[];
  elemKey?: (elem: T) => Key;
};

export default function Table<T>({ children, elems, elemKey } : TableProps<T>) {
  const cols = children.map((c) => resolveProps(c.props));
  const totalColSpan = cols.reduce((sum, c) => sum + c.colSpan, 0);
  const anyHasHeader = cols.reduce((or, c) => c.header || or, false);

  const printElem = (elem: T, isFirst: boolean, isLast: boolean) => {
    const border = isLast ? "" : "border-b-2";
    const key = elemKey ? elemKey(elem) : Math.random();
    
    return <div key={key} className={`w-full py-4 ${border} grid grid-cols-${totalColSpan} items-center`}>
      { cols.map((c) =>
        <div key={c.key} className={`flex col-span-${c.colSpan} ${alignToCSS(c.elemAlign)} px-${c.elemPadding}`}>
          { c.getter(elem) }
        </div>)
      }
    </div>;
  }

  return <>
    {
      anyHasHeader &&
      <div className={`w-full py-4 select-none text-iregular font-iregular grid grid-cols-${totalColSpan} items-center`}>
        { cols.map(printHeader) }
      </div>
    }
    { elems.map((e, i) => printElem(e, i === 0, i === elems.length - 1)) }
  </>;
}