import "../styles/App.scss";
import "../styles/layout/SignIn.scss";
import { useState } from "react";


import { useAuth } from '../hooks/auth';
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FiMail, FiLock, FiEye, FiEyeOff} from "react-icons/fi";



export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const { signIn } = useAuth(); 


function handleSignIn() {
  signIn({email, password })
}

function toggleShowPassword() {

  setShowPassword(!showPassword);
}


  return (
    <>
    <div className="signIn">
      <form className="signIn__form">
        <h1 className="signIn__title">Rocket Notes </h1>
        <p className="signIn__paragraph">
        Aplicación para guardar y gestionar sus enlaces útiles
        </p>

        <h2 className="signIn__titleTwo"> Inicie sesión </h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />

        <div className=" inputOne password-input">
        <Input 
        placeholder="password" 
        type={showPassword ? "text" : "password"}
        icon={FiLock} 
        onChange={e => setPassword(e.target.value)} />

        <button type="button" className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>


        </div>
        
        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register" className="signIn__createCont">
          Crear cuenta
        </Link>
      </form>

      <div className="signIn__imageback">

      </div>
    </div>
    </>
  );
}
