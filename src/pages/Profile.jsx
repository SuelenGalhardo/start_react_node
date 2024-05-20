import "../styles/App.scss";
import "../styles/layout/Profile.scss";
import {useState } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Profile() {
  const { user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();
  //const [avatar, setAvatar] = useState();

  async function handleUpdate() {
    //e.preventDefault();
   const user = {
    name,
    email,
    password: passwordNew,
    old_password: passwordOld,
    //avatar,
   }
   await updateProfile({ user});

   }
   
  


  return (
    <>
      <div className="profile">
        <div className="profile__headerProfile">
          <header>
            <Link to="/">
              <FiArrowLeft />
            </Link>
          </header>
        </div>

        <form className="profile__formProfile">
          <div className="profile__avatarProfile">
            <img
              className="profile__imgAvatar"
              src="https://github.com/suelenGalhardo.png"
              alt="foto del usuario"
            />

            <label className="profile__labelAvatar" htmlFor="avatar">
              <FiCamera className="profile__svgAvatar"/>
              <input className="profile__inputAvatar" id="avatar" type="file" />
            </label>
          </div>

          <Input placeholder="Nombre" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
          <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />

          <Input
            placeholder="Contraseña actual"
            type="password"
            icon={FiLock}
            onChange={e => setPasswordOld(e.target.value)}
        
          />
          <Input placeholder="Nueva Contraseña" type="password" icon={FiLock}     onChange={e => setPasswordNew(e.target.value)} />

          <Button title="Guardar" onClick={handleUpdate} />
        </form>
      </div>
    </>
  );
}
