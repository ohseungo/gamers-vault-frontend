import Input from "components/ui/Input";
import style from "./LoginView.module.css";

const LoginView = () => {
  return (
    <div className={style.root}>
      <div>LoginView</div>
      <div>LoginView</div>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <div>LoginView</div>
      <div>LoginView</div>
    </div>
  );
};

export default LoginView;
