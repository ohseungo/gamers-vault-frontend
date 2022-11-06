import { InputHTMLAttributes } from "react";
import style from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (...args: any[]) => any;
}
const Input = ({ onChange, ...rest }: Props) => {
  const handleOnChange = (event: any) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <label className={style.root}>
      <input className={style.input} onChange={handleOnChange} {...rest} />
    </label>
  );
};

export default Input;
