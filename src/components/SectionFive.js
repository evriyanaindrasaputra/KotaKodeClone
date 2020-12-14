import Tools from "./Tools";
const SectionFive = () => {
  const imgs = [
    {
      id: 1,
      url: "https://kotakode.com/static/media/android.8f67d8eb.svg",
      title: "Android",
    },
    {
      id: 2,
      url: "https://kotakode.com/static/media/bootstrap.9b60ecac.svg",
      title: "Bootstrap",
    },
    {
      id: 3,
      url: "https://kotakode.com/static/media/codeigniter.d8b990b6.svg",
      title: "Code Igniter",
    },
    {
      id: 4,
      url: "https://kotakode.com/static/media/css.c9cb37af.svg",
      title: "CSS",
    },
    {
      id: 5,
      url: "https://kotakode.com/static/media/firebase.1694ba6c.svg",
      title: "Firebase",
    },
    {
      id: 6,
      url: "https://kotakode.com/static/media/git.c415cc9d.svg",
      title: "Git",
    },
    {
      id: 7,
      url: "https://kotakode.com/static/media/html.58a21fb4.svg",
      title: "HTML",
    },
    {
      id: 8,
      url: "https://kotakode.com/static/media/java.00548aa6.svg",
      title: "Java",
    },
    {
      id: 9,
      url: "https://kotakode.com/static/media/javascript.87e188a0.svg",
      title: "Javascript",
    },
    {
      id: 10,
      url: "https://kotakode.com/static/media/jquery.050e9041.svg",
      title: "Jquery",
    },
    {
      id: 11,
      url: "https://kotakode.com/static/media/kotlin.670b7fbb.svg",
      title: "Kotlin",
    },
    {
      id: 12,
      url: "https://kotakode.com/static/media/node.7ee96a85.svg",
      title: "Node JS",
    },
    {
      id: 13,
      url: "https://kotakode.com/static/media/python.a9d67612.svg",
      title: "Python",
    },
    {
      id: 14,
      url: "https://kotakode.com/static/media/php.bae42039.svg",
      title: "PHP",
    },
    {
      id: 14,
      url: "https://kotakode.com/static/media/react.a67ddf72.svg",
      title: "React JS",
    },
    {
      id: 15,
      url: "https://kotakode.com/static/media/sql.c21345f9.svg",
      title: "SQL",
    },
    {
      id: 16,
      url: "https://kotakode.com/static/media/swift.8cf44652.svg",
      title: "Swift",
    },
  ];
  return (
    <div className="w-8/12 mx-auto">
      <h2 className="text-center text-4xl font-semibold text-gray-500 mx-4 my-4">
        Dapatkan Bantuan dari Ribuan Ahli dan <br /> Professional Programmer di
        Seluruh <br />
        Indonesia
      </h2>
      <p className="text-center text-gray-500 text-xl font-medium my-4">
        Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh
        Pengembangan Proyek
      </p>
      <div className="w-11/12 flex items-center mx-auto flex-wrap justify-center">
        {imgs.map((img) => (
          <Tools key={img.id} image={img.url} title={img.title} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className=" my-2 px-8 py-2 text-xl rounded-lg font-semibold bg-yellow-500 text-white focus:outline-none">
          Ajukan pertanyaan
        </button>
      </div>
    </div>
  );
};

export default SectionFive;
