import cn from "classnames";
interface Props {
  className?: string;
  children?: any;
}

const Container = ({ className, children }: Props) => {
  const rootClassName = cn(className, {});
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex flex-row justify-center">{children}</div>
    </div>
  );
};

export default Container;
