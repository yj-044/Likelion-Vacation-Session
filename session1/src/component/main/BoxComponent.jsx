const BoxComponent = ({number, title, text}) => {
   return (
      <div className="box-component">
        <div className="number">{number}</div>
        <p className="title">{title}</p>
        <p>{text}</p>
        <button>바로가기 &gt;</button>
      </div>
    );
};

export default BoxComponent;
