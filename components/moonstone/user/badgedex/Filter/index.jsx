export default function Filter({ onChange }) {
  const categories = ["All", "CATEGORY2", "CATEGORY3"];

  return (
    <div>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-full border border-quinary py-2 pl-3 pr-10 text-sm ring-quinary focus:border-quinary"
        defaultValue="All"
        onChange={(e) => onChange(categories.indexOf(e.currentTarget.value))}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
