import Input from "components/ui/Input";
import style from "./LoginView.module.css";

const LoginView = () => {
  return (
    <div className={style.root}>
      <h1>Gamers Vault</h1>
      <Input type="email" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
    </div>
  );
};

export default LoginView;
