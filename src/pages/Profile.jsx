import "../styles/App.scss";
import "../styles/layout/Profile.scss";
import {useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";


import { api } from "../services/api";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import avatarPlaceholder from "../assets/avatar_placeholder.svg"



export function Profile() {
  const { user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(e) {
    e.preventDefault();
   const update = {
    name,
    email,
    password: passwordNew,
    old_password: passwordOld,
   
   }
    const userUpdated = Object.assign(user, update);
    await updateProfile({ user: userUpdated, avatarFile});
    
   }


function handleChangeAvatar(e) {
  const file = e.target.files[0];
  setAvatarFile(file);

  const imagePreview = URL.createObjectURL(file);
  setAvatar(imagePreview);


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
              src={avatar}
              alt={user.name}
            />

            <label className="profile__labelAvatar" htmlFor="avatar">
              <FiCamera className="profile__svgAvatar"/>
              <input className="profile__inputAvatar" id="avatar" type="file" onChange={handleChangeAvatar} />
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
