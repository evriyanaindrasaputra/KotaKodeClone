const SectionTwo = () => {
  return (
    <div className="w-9/12 mx-auto my-10 px-5">
      <div className="my-3 px-3">
        <h2 className=" text-center text-5xl text-gray-500 font-bold py-3">
          Mengapa perlu menggunakan Kotakode?
        </h2>
        <p className="text-center text-gray-500 text-xl font-semibold py-3 mx-4">
          Misi kami adalah menuntun ekosistem yang inklusif bagi programmer di
          seluruh Indonesia. Ibaratkan sebuah kota dengan penduduk para
          programmer, Kotakode memberikan fasilitas guna mensejahterakan
          kehidupan penduduknya.
        </p>
      </div>
      <div className=" w-10/12 mx-auto grid grid-cols-2 px-1 items-center">
        <div className="my-5 mx-auto">
          <img
            className="w-11/12"
            src="https://kotakode.com/static/media/landingGraphic1.2d267c33.svg"
            alt="sectionTwo"
          />
        </div>
        <div className="text-gray-500 my-5 mx-auto">
          <h3 className="text-4xl text-gray-500 font-bold my-3">
            Jawaban cepat, <br /> tepat & gratis
          </h3>
          <p className="text-gray-500 text-lg font-normal my-3">
            Dapatkan bantuan dari ribuan ahli dan <br /> profesional programmer
            di seluruh Indonesia.
            <br /> Kotakode juga memiliki mentors berkualitas yang
            <br />
            siap memantau web 24 jam 7 hari seminggu
            <br /> untuk membantu menjawab pertanyaan
            <br /> kapanpun dan dimanapun..
          </p>
        </div>
        <div className="text-gray-500 my-5 mx-auto">
          <h3 className="text-4xl text-gray-500 font-bold my-3">
            Konsep Gamifikasi
          </h3>
          <p className="text-gray-500 text-lg font-normal my-3">
            Sebagai imbalan dari keaktifan dan kontribusi dalam membantu
            programer menjadi lebih baik, Kotakode memberikan penghargaan
            melalui badge menarik setelah menyelesaikan misi yang tersedia.
          </p>
        </div>
        <div className="my-5 mx-auto">
          <img
            className="w-11/12"
            src="https://kotakode.com/static/media/landingGraphic2.3fd3e94a.svg"
            alt="sectionTwo02"
          />
        </div>
        <div className="my-5 mx-auto">
          <img
            className="w-11/12"
            src="https://kotakode.com/static/media/landingGraphic3.5736779a.svg"
            alt="sectionTwo"
          />
        </div>
        <div className="text-gray-500 my-5 mx-auto">
          <h3 className="text-4xl text-gray-500 font-bold my-3">
            Bangun Online <br /> Portofolio
          </h3>
          <p className="text-gray-500 text-lg font-normal my-3">
            Portofolio ibaratkan sebuah aset yang berharga <br /> bagi setiap
            orang. Semakin kamu aktif di dalam
            <br /> forum, semakin membuktikan bahwa kamu
            <br />
            adalah programmer yang berkualitas.
          </p>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
