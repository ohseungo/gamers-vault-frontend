import cn from "classnames";
interface Props {
  className?: string;
  children?: any;
}

const Container = ({ className, children }: Props) => {
  const rootClassName = cn(className, {});
  return <div>{children}</div>;
};

export default Container;
