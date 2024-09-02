const Card = (props) => {
  return (
    <>
      <div className="2xl:container mx-auto bg-slate-200 m-2">
        <div className="w-[90%] mx-auto bg-slate-200 p-2">
          <div>
            <img src={props.imgsrc} alt="img" className="h-20" />
          </div>
          <div>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
