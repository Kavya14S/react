import { useState } from "react";

const CommentComponent = () => {
  const [data, setData] = useState();
  const [name, setName] = useState({ name: "" });
  const [message, setMessage] = useState({ message: "" });
  return (
    <>
      <p className="m-2 font-bold text-lime-500 text-4xl">CommentComponents - About useState() :</p>
      <input
        type="search"
        onChange={(e) => {
          setName({ name: e.target.value });
          console.log(e.target.value);
        }}
        className="border border-solid border-[2px] border-black m-2"
      />

      <input
        type="search"
        onChange={(e) => {
            setMessage({ message: e.target.value });
          console.log(e.target.value);
        }}
        className="border border-solid border-[2px] border-black m-2"
      />

      <button
        onClick={() => {
          setData({name,message});
        }}
        className="m-4 bg-slate-500 text-white px-2 py-1 rounded-xl"
      >
        Submit
      </button>

      {JSON.stringify(data)}
    </>
  );
};

export default CommentComponent;
