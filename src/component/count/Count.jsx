import { useState } from "react";

const Count = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <p className="text-4xl ml-20 mt-2">{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-green-500 p-5 m-5">
        +
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="bg-green-500 p-5 m-5">
        -
      </button>
    </>
  );
};
 export default Count;