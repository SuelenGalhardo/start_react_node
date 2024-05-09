import "../styles/App.scss";
import "../styles/layout/Profile.scss";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__headerProfile">
          <header>
            <a href="/">
              <FiArrowLeft />
            </a>
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

          <Input placeholder="Nombre" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />

          <Input
            placeholder="Contraseña actual"
            type="password"
            icon={FiLock}
          />
          <Input placeholder="Nueva Contraseña" type="password" icon={FiLock} />

          <Button title="Guardar" />
        </form>
      </div>
    </>
  );
}
