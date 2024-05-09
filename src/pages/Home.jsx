import { FiPlus, FiSearch } from "react-icons/fi";
import "../styles/layout/Home.scss";
import "../styles/App.scss";
import { Header } from "../components/Header";
import { ButtonText } from "../components/ButtonText";
import { Input } from "../components/Input";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
    <div className="home">
      <div className="home__brand">
        <h1 className="home__titleh1">RocketNotes</h1>
      </div>
      <Header></Header>
      <div className="home__menu">
        <ul>
          <li>
            <ButtonText title="Todos" isActive={true} />
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
        <Input placeholder="pesquisar pelo titutlo " icon={FiSearch} />
      </div>
      <div className="home__content">
        <Section title="Minhas notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "Node" },
              ],
            }}
          />
        </Section>
      </div>

      <Link to="/NewInterface" className="home__ButtonNote">
        <FiPlus /> Crear Nota
      </Link>
    </div>
    </>
  );
}
