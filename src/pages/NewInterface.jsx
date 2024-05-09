import "../styles/App.scss";
import "../styles/layout/NewInterface.scss";
import { Header } from "../components/Header";
import { Input } from "../components/Input.jsx";
import { TextArea } from "../components/TextArea.jsx";

export function NewInterface() {
  return (
    <>
      <div className="newInterface">
        <Header />
        <main>
          <form className="newInterface__formNew">
            <header className="newInterface__headerNew">
              <h1>Crear nota</h1>
              <a href="/">Volver</a>
            </header>
            <Input placeholder="Titulo" />

            <TextArea placeholder="Observaciones" />
          </form>
        </main>
      </div>
    </>
  );
}
