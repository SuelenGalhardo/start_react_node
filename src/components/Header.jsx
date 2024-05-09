import { Link } from "react-router-dom";

import {RiShutDownLine} from 'react-icons/ri'
export function Header(){

    return(
        
    <header className= "create">
      <Link to="/profile" className="create__profile">
        <img className="create__img"
          src="https://github.com/suelengalhardo.png"
          alt="Foto do usuário"/>
        <div className="create__name">
          <span className="create__span">Bem-vindo</span>
          <strong className="create__strong">Suelen Galhardo</strong>
        
        
        
        </div>
      
        </Link>
      
        <div className='logout'>
            <RiShutDownLine/>
       </div>
       </header>

);
}