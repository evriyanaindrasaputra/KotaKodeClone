const SectionOne = () => {
  return (
    <div className="flex bg-sectionOne bg-center bg-cover items-center">
      <div className="mx-auto  my-16">
        <p className="text-white font-bold text-5xl my-5">
          Bingung Ngoding? <br /> Tanya Jawab dan Dapatkan <br /> Poin
        </p>
        <p className="text-white font-medium text-lg my-5">
          Kotakode hadir untuk kamu para pegiat IT di Indonesia! <br /> Kamu
          bisa belajar dan berbagi informasi seputar dunia IT terikini
        </p>
        <button className="my-3 px-3 py-2 text-2xl rounded-lg font-semibold bg-yellow-500 text-white focus:outline-none">
          Coba Sekarang
        </button>
      </div>
      <div className="mx-auto my-16">
        <img
          className="w-96"
          src="https://kotakode.com/static/media/landingGraphic7.383865f7.svg"
          alt="bg-SectionOne"
        />
      </div>
    </div>
  );
};

export default SectionOne;
