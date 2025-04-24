import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // So, the functional form avoids race conditions and stale updates. It's especially helpful when:
  // You rely on the current state to compute the next
  // Multiple updates can happen fast

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="mt-4 p-4 bg-orange-100 rounded-lg w-3/5 flex items-center justify-center flex-col ">
      <p className="font-bold">Count: {count}</p>
      <button
        onClick={() => setCount(0)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Reset
      </button>
    </div>
  );
}
