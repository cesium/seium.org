function Step({ count, progress, checkpoints }) {
  const w = 100.0 / checkpoints + "%";

  return (
    <div
      className={`${count < progress ? "bg-quinary" : "bg-white"}
              border-quinary ${count != 0 ? "border-l" : ""} ${
        count != checkpoints - 1 ? "border-r" : ""
      } float-left h-full`}
      style={{ width: w }}
    ></div>
  );
}

export default function CheckpointTracker({ checkpoints, progress }) {
  const ml = (progress / checkpoints) * 100 + "%";
  return (
    <div className="w-80 select-none py-5">
      <div>
        <span className="font-iregular" style={{ marginLeft: ml }}>
          🏁
        </span>
      </div>
      <div className="h-6 w-full overflow-hidden rounded-full border border-quinary">
        {[...Array(checkpoints)].map((col, i) => (
          <Step
            key={i}
            count={i}
            progress={progress}
            checkpoints={checkpoints}
          />
        ))}
      </div>
    </div>
  );
}
