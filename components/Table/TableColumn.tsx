import { FunctionComponent, Key, ReactNode, createElement } from "react";

export enum Align {
  Left,
  Center,
  Right
}

export function alignToCSS(align: Align): string {
  switch (+align) {
    case Align.Left:    return "text-left justify-start";
    case Align.Center:  return "text-center justify-center";
    case Align.Right:   return "text-right justify-end";
  }
}

export type TableColumnProps<T> = {
  key?: Key;
  header?: string;
  headerAlign?: Align;
  elemAlign?: Align;
  elemPadding?: number;
  colSpan?: number;
  getter?: (e: T) => ReactNode;
};

type ResolvedTableColumnProps<T> = {
  key: Key;
  header: string;
  headerAlign: Align;
  elemAlign: Align;
  elemPadding: number;
  colSpan: number;
  getter: (e: T) => ReactNode;
};

export function resolveProps<T>(props: TableColumnProps<T>): ResolvedTableColumnProps<T> {
  return {
    key: Math.random(),
    header: "",
    headerAlign: Align.Center,
    elemAlign: Align.Center,
    elemPadding: 0,
    colSpan: 1,
    getter: (x) => x as ReactNode,
    ...props
  };
}

export function printHeader<T>(props : TableColumnProps<T>) {
  return (
    <div key={props.key} className={`flex col-span-${props.colSpan} ${alignToCSS(props.headerAlign)}`}>
      { props.header }
    </div>
  );
}


export default function TableColumn<T>(props : TableColumnProps<T>) {
  return createElement<TableColumnProps<T>>(TableColumn<T>, props);
}