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
  const [error, setError] = useState("");



  const { signIn } = useAuth(); 


async function handleSignIn(event) {
  event.preventDefault();
  try {
   await signIn({email, password });
}catch(err) {setError(err.message);
}
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

        <div className={`inputOne ${email? 'filled' : ''}`}>

        <Input placeholder="E-mail" type="text" icon={FiMail} 
        onChange={e => setEmail(e.target.value)}
        value={email} />
        </div>

        <div className={`inputOne password-input ${password ? 'filled' : ''}`}>
        <Input 
        placeholder="password" 
        type={showPassword ? "text" : "password"}
        icon={FiLock} 
        onChange={e => setPassword(e.target.value)}
        value={password}/>
           </div>
           

           {error && <div className="error-message">{error}</div>}

        <button type="button" className="password-toggle" onClick={toggleShowPassword}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>


     
        
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
