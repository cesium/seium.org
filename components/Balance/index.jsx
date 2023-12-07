export default function Balance({ token_balance, badge_count }) {
  return (
    <div className="text-white lg:grid lg:grid-cols-3">
      <span className="col-span-1 select-none font-ibold text-xl sm:text-2xl">
        Balance
      </span>
      <div className="col-span-2 flex gap-x-4 lg:flex-row-reverse">
        <span className="text-md font-iregular sm:text-lg">
          💰 {token_balance} tokens
        </span>
        <span className="text-md font-iregular sm:text-lg">
          🏅 {badge_count} badges
        </span>
      </div>
    </div>
  );
}
