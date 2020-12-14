const Tools = ({ image, title }) => {
  return (
    <div className="my-4">
      <div className="w-24 h-24 border-2 border-green-400 py-2 px-2 mx-3 my-2 rounded-xl flex items-center">
        <img className="w-3/4 mx-auto" src={image} alt={title} />
      </div>
      <p className="text-center">{title}</p>
    </div>
  );
};

export default Tools;
