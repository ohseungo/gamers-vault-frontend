import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
}

const Button = ({ className, disabled, children, ...rest }: Props) => {
  const rootClassName = cn(style.root, {}, className);

  return (
    <button className={rootClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
