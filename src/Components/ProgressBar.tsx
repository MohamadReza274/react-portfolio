interface Props {
  title: string;
  percent: number;
  color?: string;
}

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const ProgressBar = ({ percent, title, color }: Props) => {
  return (
    <div className="w-full">
      <h4 className="pb-2 pl-0.5">{title}</h4>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={classNames(
            "text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full",
            color ? color : "bg-blue-600"
          )}
          style={{ width: `${percent}%` }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
