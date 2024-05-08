import "../styles/App.scss";
import "../styles/layout/SignUp.scss";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
  return (
    <div className="SignUp">
      <div className="SignUp__imageback"></div>
      <form className="SignUp__form">
        <h1 className="SignUp__title">Rocket Notes </h1>
        <p className="SignUp__paragraph">
          Aplicacion para salvar y gerenciar sus links utiles
        </p>

        <h2 className="SignUp__titleTwo"> Crear su cuenta  </h2>


        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="password" type="text" icon={FiLock} />

        <Button title="Registrar" />
        <a className="SignUp__createCont" href="#">
        Volver a iniciar sesión
        </a>
      </form>
    </div>
  );
}
