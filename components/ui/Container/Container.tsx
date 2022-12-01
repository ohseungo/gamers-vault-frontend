import cn from "classnames";
interface Props {
  className?: string;
  children?: any;
}

const Container = ({ className, children }: Props) => {
  const rootClassName = cn(className, {});
  return (
    <div className="flex flex-row justify-center">
      <div className="w-full max-w-xl bg-slate-400">{children}</div>
    </div>
  );
};

export default Container;
