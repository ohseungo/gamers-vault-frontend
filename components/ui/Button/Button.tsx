import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: Props) => {
  return <button>Hello</button>;
};

export default Button;
