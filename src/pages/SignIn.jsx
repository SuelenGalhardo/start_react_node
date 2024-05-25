import "../styles/App.scss";
import "../styles/layout/SignIn.scss";
import { useState } from "react";


import { useAuth } from '../hooks/auth';
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FiMail, FiLock } from "react-icons/fi";



export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { signIn } = useAuth(); 


function handleSignIn() {
  signIn({email, password })
}


  return (
    <>
    <div className="signIn">
      <form className="signIn__form">
        <h1 className="signIn__title">Rocket Notes </h1>
        <p className="signIn__paragraph">
          Aplicacion para salvar y gerenciar sus links utiles
        </p>

        <h2 className="signIn__titleTwo"> Inicie sesión </h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="password" type="text" icon={FiLock} onChange={e => setPassword(e.target.value)} />

        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register" className="signIn__createCont">
          Crear conta
        </Link>
      </form>

      <div className="signIn__imageback">

      </div>
    </div>
    </>
  );
}
