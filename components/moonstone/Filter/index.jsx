export default function Filter() {
  
  let options = ["CATEGORY","CATEGORY2","CATEGORY3"]

  return (
    <div>
      <select
        id="location"
        name="location"
        className="rounded-full mt-1 block w-full pl-3 pr-10 py-2 border border-aqua ring-aqua focus:border-aqua text-sm"
        defaultValue="CATEGORY"
      >
        {options.map(option =>
          <option>
            { option }
          </option>
        )
        }
      </select>
    </div>
  )
}