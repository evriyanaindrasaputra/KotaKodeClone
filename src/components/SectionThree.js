import Card from "./Card";
const SectionThree = () => {
  return (
    <div className="flex w-9/12 mx-auto">
      <Card
        img="https://kotakode.com/static/media/landingGraphic4.097eeee8.svg"
        title="Online Forum"
        text="Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas"
      />
      <Card
        img="https://kotakode.com/static/media/landingGraphic5.0b6f05a8.svg"
        title="Microblogging"
        text="Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT"
      />
      <Card
        img="https://kotakode.com/static/media/landingGraphic6.828f7df7.svg"
        title="Job Hiring"
        text="Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan"
      />
    </div>
  );
};

export default SectionThree;
