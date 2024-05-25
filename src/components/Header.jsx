import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { api } from "../services/api";
import avatarPlaceholder from "../assets/avatar_placeholder.svg";
import {RiShutDownLine} from 'react-icons/ri'


export function Header(){

  const { signOut, user } = useAuth();
  
  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

    return(
        
    <header className= "create">
      <Link to="/profile" className="create__profile">
        <img className="create__img"
          src={avatarUrl}
          alt={user.name}/>
        <div className="create__name">
          <span className="create__span">Bem-vindo</span>
          <strong className="create__strong">{user.name}</strong>
        
        
        
        </div>
      
        </Link>
    
    <Link to="/" className="create__link">
        <div className='logout' onClick={signOut}>
            <RiShutDownLine/>
       </div>
       </Link>
       </header>

);
}