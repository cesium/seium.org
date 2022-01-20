export default function Filter() {
  let categories = ["CATEGORY", "CATEGORY2", "CATEGORY3"];

  return (
    <div>
      <select
        id="location"
        name="location"
        className="rounded-full mt-1 block w-full pl-3 pr-10 py-2 border border-quinary ring-quinary focus:border-quinary text-sm"
        defaultValue="CATEGORY"
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
