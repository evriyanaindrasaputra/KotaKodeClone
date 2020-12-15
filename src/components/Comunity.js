const Comunity = ({ image, title }) => {
  return (
    <div className="my-5">
      <div className="w-48 h-24 py-2 px-2 mx-3 my-2 rounded-xl flex items-center">
        <img className="mx-auto " src={image} alt={title} />
      </div>
    </div>
  );
};

export default Comunity;
