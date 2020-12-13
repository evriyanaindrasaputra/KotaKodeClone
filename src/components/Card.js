const Card = ({ img, title, text }) => {
  return (
    <div className="shadow-lg px-4 py-4 rounded-xl bg-white mx-5 flex flex-col">
      <img className="w-10/12  h-52 mx-auto my-4" src={img} alt={title} />
      <h3 className="font-semibold text-2xl text-center mb-4">{title}</h3>
      <p className="mb-3 text-md font-normal px-1">{text}</p>
      <a href="#" className="flex my-2 justify-end px-1 items-center">
        <p>Pelajari lebih lanjut </p>
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Card;
