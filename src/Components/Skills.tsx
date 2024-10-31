import Container from "./Container";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <Container
      id="skills"
      title="Skills"
      content="  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        repellat impedit eveniet laudantium ullam est quis quisquam vero culpa"
    >
      <ProgressBar title="React.js" percent={95} />
      <ProgressBar title="Next.js" percent={80} />
      <ProgressBar title="TypeScript" percent={90} />
      <ProgressBar title="TailwindCSS" percent={80} />
      <ProgressBar title="HTML5" percent={100} />
      <ProgressBar title="CSS3" percent={70} />
      <ProgressBar title="Git" percent={70} />
      <ProgressBar title="JavaScript" percent={80} />
    </Container>
  );
};

export default Skills;
