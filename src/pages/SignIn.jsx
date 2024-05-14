import "../styles/App.scss";
import "../styles/layout/SignIn.scss";



import { useAuth } from '../hooks/auth';
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FiMail, FiLock } from "react-icons/fi";



export function SignIn() {

  const data = useAuth(); //hooks que foi criado no auth.js
  console.log("meu contexto => ", data);



  return (
    <>
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
        <Link to="/register" className="signIn__createCont">
          Criar conta
        </Link>
      </form>

      <div className="signIn__imageback">

      </div>
    </div>
    </>
  );
}
