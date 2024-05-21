import "../styles/App.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/layout/NewInterface.scss";
import { Header } from "../components/Header";
import { Input } from "../components/Input.jsx";
import { TextArea } from "../components/TextArea.jsx";
import { NoteItem } from "../components/NoteItem.jsx";
import { Section } from "../components/Section.jsx";
import { Button } from "../components/Button.jsx";




export function NewInterface() {

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  function handleAddLink() {
    if (newLink.trim() === "") return;
    const link = {id: Date.now(), url: newLink}

    setLinks(prevState => [...prevState, link])
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }




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

             {
              links.map((link, index)=> (
                <NoteItem 
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
                />
              ))
             }
           
              <NoteItem
               isNew 
              placeholder="nuevo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}

               />

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
