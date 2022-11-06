import cn from "classnames";
import { InputHTMLAttributes } from "react";
import style from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
}
const Input = ({ className, onChange, ...rest }: Props) => {
  const inputClassName = cn(style.input, className);
  const handleOnChange = (event: any) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <label className={style.root}>
      <input className={inputClassName} onChange={handleOnChange} {...rest} />
    </label>
  );
};

export default Input;
