import { useState } from "react";
import "../styles/App.scss";
import "../styles/layout/SignUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){

    if(!name ||!email ||!password ){
     return alert("Todos los campos son obligatorios");
  }
  api.post("/users", {name, email, password})
  .then(()=> {
    alert("Usuario creado con exito");
    navigate("/");
   })

    .catch(error => {
      if(error.response){
        alert(error.response.data.message);

      } else { 
      alert("Ocurrio un error al crear el usuario");
    }
  });
}



  return (
    <>
    <div className="SignUp">
      <div className="SignUp__imageback"></div>
      <form className="SignUp__form">
        <h1 className="SignUp__title">Rocket Notes </h1>
        <p className="SignUp__paragraph">
          Aplicacion para salvar y gerenciar sus links utiles
        </p>

        <h2 className="SignUp__titleTwo"> Crear su cuenta  </h2>


        <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="password" type="text" icon={FiLock} onChange={e => setPassword(e.target.value)}/>

        <Button title="Registrar" onClick={handleSignUp}/>
        <Link to="/"  className="SignUp__createCont">
        Volver a iniciar sesión
        </Link>
      </form>
    </div>
     </>
  );
}
