
import{ FiPlus, FiSearch } from 'react-icons/fi';
import "../styles/layout/Home.scss";
import "../styles/App.scss";
import { Header } from "../components/Header";
import { ButtonText } from "../components/ButtonText";
import { Input } from '../components/Input';

export function Home() {
  return (
    <div className="home">
      <div className="home__brand">
        <h1 className="home__titleh1">RocketNotes</h1>
      </div>
      <Header></Header>
      <div className="home__menu">
      <ul >
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
      </ul>
      </div>
      <div className="home__search">
        <Input placeholder="pesquisar pelo titutlo "  icon={FiSearch}/>
      </div>
      <div className="home__content"></div>
   
   
        <button className="home__ButtonNote"><FiPlus /> Crear Nota</button>
   
   
   
    </div>
  );
}
