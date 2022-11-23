import Button from "components/ui/Button";
import Input from "components/ui/Input";
import style from "./LoginView.module.css";

const LoginView = () => {
  return (
    <div className={style.root}>
      <h1>Gamers Vault</h1>
      <form>
        <div className="flex flex-col space-y-2 w-full items-center">
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
