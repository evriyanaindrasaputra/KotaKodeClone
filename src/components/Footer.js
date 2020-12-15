const Footer = () => {
  return (
    <div className="w-full bg-black px-5 py-5">
      <div className=" w-full flex items-start mt-10 mb-20">
        <div className="w-1/3">
          <img
            className="w-4/12"
            src="https://kotakode.com/static/media/logo.971f8e9c.svg"
            alt="logo_KotaKode"
          />
          <p className="text-md  text-gray-300">
            Semua yang dibutuhkan para pegiat IT <br /> maupun perusahaan yang
            sedang <br />
            mencari pekerjaan di <br /> bidang IT ada di Kotakode.
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-md  text-gray-300 mb-3">Diakui Oleh :</p>
          <img
            className="w-3/12"
            src="https://kotakode.com/static/media/block71.360124b5.svg"
            alt="logo_Block71"
          />
        </div>
        <div className="w-1/3">
          <p className="text-md  text-gray-300">Hubungi Kami</p>
          <p className="text-md  text-gray-300">petertanugraha@kotakode.com</p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-md text-center  text-gray-300 inline-block">
          Copyright 2020 Kotakode. All rights reserved <br />
          Made with ❤️ in 🇮🇩
        </p>
      </div>
    </div>
  );
};

export default Footer;
