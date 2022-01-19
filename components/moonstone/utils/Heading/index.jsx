export default function Heading({ text, children }) {
  return (
    <div className="w-full mb-5 pb-3 border-b-solid border-b-2 border-slate-400 grid-cols-2 overflow-hidden">
      <div className="col-span-1 flex float-left h-full font-ibold">
        <p className="inline-block align-middle font-bold text-2xl font-ibold">
          {text}
        </p>
      </div>
      <div className="col-span-1 flex float-right font-iregular">
        {children}
      </div>
    </div>
  );
}
