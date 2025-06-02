import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  remainingTime,
  targetTime,
  onReset,
}) {
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>
        The target time was <strong> {targetTime} seconds. </strong>
      </p>
      <p>
        You stop the time with <strong>{formattedTime} </strong> left.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
