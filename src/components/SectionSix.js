import Comunity from "./Comunity";

const SectionSix = () => {
  const comunity = [
    {
      url: "https://kotakode.com/static/media/progate.67b0db68.svg",
      title: "Progate",
      id: 1,
    },
    {
      url: "https://kotakode.com/static/media/glintsAcademy.655d1ffd.svg",
      title: "Glints",
      id: 2,
    },
    {
      url: "https://kotakode.com/static/media/SMKTIK.3b2c1c4c.svg",
      title: "TekKom",
      id: 3,
    },
    {
      url: "https://kotakode.com/static/media/umn.c5ba4f63.svg",
      title: "UMN",
      id: 4,
    },
  ];
  const Support = [
    {
      url: "https://kotakode.com/static/media/block71.360124b5.svg",
      title: "Block71",
      id: 1,
    },
    {
      url: "https://kotakode.com/static/media/garudaHacks.a3cc815c.svg",
      title: "Garuda",
      id: 2,
    },
    {
      url: "https://kotakode.com/static/media/IEEE.78765b02.svg",
      title: "IEEE",
      id: 3,
    },
    {
      url: "https://kotakode.com/static/media/UI.7c701201.svg",
      title: "UI",
      id: 4,
    },
    {
      url: "https://kotakode.com/static/media/binus.661e6d5e.svg",
      title: "Binus",
      id: 5,
    },
    {
      url: "https://kotakode.com/static/media/dsc_binus.4c62be5f.svg",
      title: "dsc_bin",
      id: 6,
    },
    {
      url: "https://kotakode.com/static/media/itb_sti.e2e8d58e.svg",
      title: "itb_sti",
      id: 7,
    },
    {
      url: "https://kotakode.com/static/media/bem_ui.5845e5e9.svg",
      title: "Bem_UI",
      id: 8,
    },
    {
      url: "https://kotakode.com/static/media/bem_padjajaran.2aa88cfc.svg",
      title: "Bem_Pedj",
      id: 9,
    },
    {
      url: "https://kotakode.com/static/media/bemfilkom.95160cd9.svg",
      title: "Bem_Filkom",
      id: 10,
    },
    {
      url: "https://kotakode.com/static/media/dsc_stmik.2a7254fb.svg",
      title: "dsc_Stmik",
      id: 11,
    },
    {
      url: "https://kotakode.com/static/media/dsc_trilogi.da685529.svg",
      title: "dsc_Trilogik",
      id: 12,
    },
    {
      url: "https://kotakode.com/static/media/dsc_yogya.f1f9b52a.svg",
      title: "dsc_Yogya",
      id: 13,
    },
    {
      url:
        "https://kotakode.com/static/media/dscbinus_kemanggisan.788bd0f8.svg",
      title: "dsc_Bin",
      id: 14,
    },
    {
      url: "https://kotakode.com/static/media/dsc_gunadarma.fd0c20af.svg",
      title: "dsc_Gundar",
      id: 15,
    },
  ];
  return (
    <div className=" w-6/12 mx-auto  py-3 px-3 my-8 rounded-xl">
      <h2 className="text-center text-4xl font-semibold text-gray-500 mx-4 my-6">
        Community Partner
      </h2>
      <div className="flex justify-center items-center flex-wrap my-5">
        {comunity.map((img) => (
          <Comunity key={img.id} image={img.url} title={img.title} />
        ))}
      </div>
      <h2 className="text-center text-4xl font-semibold text-gray-500 mx-4 my-6">
        Supporting Partner
      </h2>
      <div className="flex justify-center items-center flex-wrap my-5">
        {Support.map((img) => (
          <Comunity key={img.id} image={img.url} title={img.title} />
        ))}
      </div>
      <h2 className="text-center text-4xl font-semibold text-gray-500 mx-4 my-6">
        Tertarik bekerjasama bersama kami?
      </h2>
      <p className="text-center text-gray-500 text-xl font-medium my-4">
        Silakan hubungi kami melalui email petertanugraha@kotakode.com
      </p>
    </div>
  );
};

export default SectionSix;
