const Navbar = () => {
  return (
    <div className="w-full fixed bg-white z-100 px-2 pt-2 pb-2  flex items-center justify-between mr-8 border-b-4 border-yellow-500">
      <a href="#" className="h-8 w-36">
        <img
          src="https://kotakode.com/static/media/kotakode-logo.a2cdd966.png"
          alt="logoKotakode"
        />
      </a>
      <div className="flex justify-between space-x-2 mx-5">
        <button className="px-3 py-1 text-l rounded-md font-semibold hover:bg-gray-100 text-gray-500 focus:outline-none">
          FAQ
        </button>
        <button className="px-3 py-1 text-l rounded-md font-semibold hover:bg-gray-100 text-gray-500 focus:outline-none">
          About
        </button>
        <button className="px-3 py-1 text-l rounded-md font-semibold hover:bg-gray-100 text-gray-500 focus:outline-none">
          Blog
        </button>
      </div>
      <div className="flex flex-1 border rounded-lg border-gray-400 px-2">
        <svg
          class="w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          placeholder="Apa yang kamu mau cari?"
          type="text"
          className="h-8 px-3 rounded-lg focus:outline-none hover:cursor-pointer w-full"
        />
      </div>
      <div className="ml-5 space-x-3 mx-3">
        <button className="px-3 py-1 text-l rounded-md font-semibold hover:bg-gray-100 text-gray-500 focus:outline-none">
          Masuk
        </button>
        <button className="px-4 py-1 text-l rounded-lg font-semibold text-white hover:bg-white ring-2 ring-yellow-500 hover:text-gray-500 focus:outline-none bg-yellow-500 overflow-hidden">
          Daftar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
