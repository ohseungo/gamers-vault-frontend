import style from "./Input.module.css";

const Input = () => {
  return (
    <label className={style.root}>
      <input className={style.input} />
    </label>
  );
};

export default Input;
