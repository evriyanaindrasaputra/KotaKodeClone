const SectionFour = () => {
  return (
    <div className=" w-6/12 mx-auto bg-green-100 flex items-center py-3 px-3 my-8">
      <img
        className="w-7/12"
        src="https://kotakode.com/static/media/community.00c791c0.svg"
        alt="sectionFour"
      />
      <div>
        <h2 className="text-4xl text-gray-500 font-semibold leading-relaxed my-3">
          Gabung <br /> Komunitas <br /> Telegram <br /> Kotakode
        </h2>
        <p className=" text-gray-500 text-lg font-normal my-3">
          Kembangkan diri kamu dengan menambah relasi dan keterampilan dengan
          langsung ngobrol sesama pengguna Kotakode lainnya !
        </p>
        <button className="my-2 px-8 py-2 text-xl rounded-lg font-semibold bg-yellow-500 text-white focus:outline-none">
          Ikutan Telegram!
        </button>
      </div>
    </div>
  );
};

export default SectionFour;
