import "../styles/App.scss";
import { Link } from "react-router-dom";

import "../styles/layout/NewInterface.scss";
import { Header } from "../components/Header";
import { Input } from "../components/Input.jsx";
import { TextArea } from "../components/TextArea.jsx";
import { NoteItem } from "../components/NoteItem.jsx";
import { Section } from "../components/Section.jsx";
import { Button } from "../components/Button.jsx";






export function NewInterface() {
  return (
    <>
      <div className="newInterface">
        <Header />
        <main className="newInterface__mainNew">
          <form className="newInterface__formNew">
            <header className="newInterface__headerNew">
              <h1>Crear nota</h1>
              <Link to="/">Volver</Link>
            </header>
            <Input placeholder="Titulo" />

            <TextArea placeholder="bservaciones" />

            <Section title="Links Utiles">

              <NoteItem value="https://www.linkedin.com/in/suelen-galhardo-12422931/" title="" />
              <NoteItem isNew placeholder="nuevo link" />

            </Section>

            
            <Section title="Marcadores">
              <div className="newInterface__tagNew">

              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nueva tag" />
              </div>

            </Section>
            <Button title="Guardar" />



          </form>
        </main>
      </div>
    </>
  );
}
