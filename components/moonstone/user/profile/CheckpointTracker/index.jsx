function Step({ count, progress, checkpoints }) {
  const w = 100.0 / checkpoints + "%";

  return (
    <div
      className={`${count < progress ? "bg-quinary" : "bg-white"} 
            border-white ${count != 0 ? "border-l" : ""} ${
        count != checkpoints - 1 ? "border-r" : ""
      } float-left h-full`}
      style={{ width: w }}
    ></div>
  );
}

export default function CheckpointTracker({ checkpoints, progress }) {
  const ml = (progress / checkpoints) * 100 + "%";
  return (
    <div className="py-5 w-80">
      <div>
        <span className="font-iregular" style={{ marginLeft: ml }}>
          🏁
        </span>
      </div>
      <div className="w-full overflow-hidden border border-quinary rounded-full h-6">
        {[...Array(checkpoints)].map((col, i) => (
          <Step count={i} progress={progress} checkpoints={checkpoints} />
        ))}
      </div>
    </div>
  );
}
