
import{ FiPlus } from 'react-icons/fi';

import "../styles/App.scss";
import { Header } from "./Header";
import { ButtonText } from "../components/ButtonText";

export function Home() {
  return (
    <div className="home">
      <div className="home__brand">
        <h1 className="home__titleh1">RocketNotes</h1>
      </div>
      <Header></Header>
      <div className="home__menu">
        <li>
        
          <ButtonText 
          title="Todos" 
          isActive={true}
         />
        </li>
        <li>
        
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
      </div>
      <div className="home__search"></div>
      <div className="home__content"></div>
   
   
        <button className="home__ButtonNote"><FiPlus /> Crear Nota</button>
   
   
   
    </div>
  );
}
