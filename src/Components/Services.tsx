import { ReactNode } from "react";
import {
  NextjsSolidIcon,
  ReactIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
} from "../icons";
import Container from "./Container";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
const Card = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        "rounded-md flex flex-col justify-center p-12 max-w-[26rem] md:max-w-md transform hover:scale-105 transition-transform duration-200  gap-y-4 w-full items-center ",
        className
      )}
    >
      {children}
    </div>
  );
};

const Services = () => {
  return (
    <Container
      id="services"
      title="Services"
      content=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        repellat impedit eveniet laudantium ullam est quis quisquam vero culpa"
    >
      <Card className="bg-[#292929]">
        <ReactIcon className="w-28 h-28" />
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="tracking-widest text-center">React.js Developer</h2>
          <hr className="mb-12 h-0.5 mt-1 border-t-0 w-8  bg-neutral-100 dark:bg-white/10" />
        </div>
      </Card>
      <Card className="bg-[#292929]">
        <NextjsSolidIcon className="w-28 h-28 bg-transparent" />
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="tracking-widest text-center">Next.js Developer</h2>
          <hr className="mb-12 h-0.5 mt-1 border-t-0 w-8 bg-neutral-100 dark:bg-white/20" />
        </div>
      </Card>
      <Card className="bg-[#292929]">
        <TypeScriptIcon className="w-28 h-28" />
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="tracking-widest text-center">TypeScript </h2>
          <hr className="mb-12 h-0.5 mt-1 border-t-0 w-8 bg-neutral-100 dark:bg-white/20" />
        </div>
      </Card>
      <Card className="bg-[#292929]">
        <TailwindCSSIcon className="w-28 h-28" />
        <div className="flex flex-col items-center gap-y-2">
          <h2 className="tracking-widest text-center">TailwindCSS </h2>
          <hr className="mb-12 h-0.5 mt-1 border-t-0 w-8 bg-neutral-100 dark:bg-white/20" />
        </div>
      </Card>
    </Container>
  );
};

export default Services;
