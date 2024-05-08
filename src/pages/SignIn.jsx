import "../styles/App.scss";
import "../styles/layout/SignIn.scss";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <div className="signIn">
      <form className="signIn__form">
        <h1 className="signIn__title">Rocket Notes </h1>
        <p className="signIn__paragraph">
          Aplicacion para salvar y gerenciar sus links utiles
        </p>

        <h2 className="signIn__titleTwo"> Inicie sesión </h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="password" type="text" icon={FiLock} />

        <Button title="Entrar" />
        <a className="signIn__createCont" href="#">
          Criar conta
        </a>
      </form>

      <div className="signIn__imageback">

      </div>
    </div>
  );
}
