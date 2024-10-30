import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Card = ({ children, className = "" }: Props) => {
  return (
    <div
      className={classNames(
        "max-w-lg w-full px-6 py-8 flex flex-col gap-y-4 rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
