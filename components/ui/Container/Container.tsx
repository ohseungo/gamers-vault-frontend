interface Props {
  className?: string;
  children?: any;
}

const Container = ({ className, children }: Props) => {
  return <div>{children}</div>;
};

export default Container;
