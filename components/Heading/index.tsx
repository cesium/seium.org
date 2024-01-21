interface IHeadingProps {
  text: string;
  children?: React.ReactNode;
}

export default function Heading({ text, children }: IHeadingProps) {
  return (
    <div className="border-b-solid mb-5 w-full grid-cols-2 overflow-hidden border-b-2 border-slate-400 pb-3">
      <div className="col-span-1 float-left flex h-full font-ibold">
        <p className="inline-block select-none align-middle font-ibold text-2xl font-bold text-white">
          {text}
        </p>
      </div>
      <div className="col-span-1 float-right flex font-iregular">
        {children}
      </div>
    </div>
  );
}
