import { ReactNode } from "react";

interface Props {
  title: string;
  content: string;
  children: ReactNode;
  id?: string;
  className?: string;
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Container = ({ title, content, children, id, className = "" }: Props) => {
  return (
    <div
      className={classNames(
        "flex text-white items-center px-2 flex-col md:px-32 py-16 gap-y-16",
        className
      )}
      id={id}
    >
      <h2 className="font-bold text-5xl pb-4">{title}</h2>
      <p className="px-4 2xl:px-56 text-center">{content}</p>
      <div className="grid grid-cols-1 place-items-center w-full px-4 md:px-8 lg:grid-cols-2 gap-x-8 gap-y-8">
        {children}
      </div>
    </div>
  );
};

export default Container;
