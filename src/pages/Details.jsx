import "../styles/App.scss";
import "../styles/layout/Details.scss"
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { ButtonText } from "../components/ButtonText";
import { Tag } from "../components/Tag";

export function Details() {
  return (
    <>
      <div className="container">
        <Header />
        <main className="mainContainer">
          <div className="contentOne">
            <ButtonText title="Excluir nota" />
            <h1 className="contentOne__title">Introduction in react</h1>
            <p className="contentOne__text">Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Iste sed deleniti ipsa 
              recusandae autem pariatur quaerat magnam, 
              quod consectetur sint, optio ratione, 
              exercitationem illo fugiat? Sapiente
               exercitationem pariatur quae voluptatum. 
                exercitationem illo fugiat? Sapiente
               exercitationem pariatur quae voluptatum.</p>
               


            <Section title="Enlaces útiles">
              <ul className="links">
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </Section>

            <Section title="Marcadores">
              <Tag title="Express" />
              <Tag title="Node" />
            </Section>

            <Button title="Volver" />
          </div>
        </main>
      </div>
    </>
  );
}
