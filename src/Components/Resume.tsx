import Card from "./Card";
import Container from "./Container";

const Resume = () => {
  return (
    <Container
      id="resume"
      title="Resume"
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repellendus aspernatur dolores mollitia magnam. Quasi ratione non iure
        distinctio tempore eaque aliquid laudantium. Officiis minima dolores
        nemo enim aliquam nam?"
    >
      <Card className="bg-[rgba(41,41,41,0.7)]">
        <h2 className="text-primary font-bold text-2xl">2006 - 2018</h2>
        <h3 className="text-2xl">High School</h3>
        <h6 className="text-gray-300">Sharak High School Ghor Afghanistan</h6>
        <p className="text-gray-400 pt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
          voluptate minus temporibus libero minima possimus ducimus eligendi
          tenetur hic vero, enim, corporis totam. Rem blanditiis asperiores
          culpa, voluptates deleniti veniam.
        </p>
      </Card>
      <Card className="bg-[rgba(41,41,41,0.7)]">
        <h2 className="text-primary font-bold text-2xl">2019 - 2023</h2>
        <h3 className="text-2xl">Bachelor's Degree of CS</h3>
        <h6 className="text-gray-300">Herat University Afghanistan</h6>
        <p className="text-gray-400 pt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
          voluptate minus temporibus libero minima possimus ducimus eligendi
          tenetur hic vero, enim, corporis totam. Rem blanditiis asperiores
          culpa, voluptates deleniti veniam.
        </p>
      </Card>
    </Container>
  );
};

export default Resume;
