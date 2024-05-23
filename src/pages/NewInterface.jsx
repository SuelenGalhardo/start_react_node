import "../styles/App.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import "../styles/layout/NewInterface.scss";
import { Header } from "../components/Header";
import { Input } from "../components/Input.jsx";
import { TextArea } from "../components/TextArea.jsx";
import { NoteItem } from "../components/NoteItem.jsx";
import { Section } from "../components/Section.jsx";
import { Button } from "../components/Button.jsx";
import { api } from "../services/api";




export function NewInterface() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();

  function handleAddLink() {

    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  

  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }
function handleAddTag() {

setTags(prevState => [...prevState, newTag]);
    setNewTag("");

}
function handleRemoveTag(deleted) {

  setTags(prevState => prevState.filter(tag => tag!== deleted)) 


}
async function handleNewNote(){

  if(!title){
    return alert("Has dejado el titulo sin agregar. Haga clic en agregar o deje el campo en blanco.");

  }
  if(newLink){
    return alert(" Has dejado un enlace sin agregar. Haga clic en agregar o deje el campo en blanco.");
  }
  if(newTag){
    return alert(" Has dejado una tag sin agregar. Haga clic en agregar o deje el campo en blanco.");
  }
 

  await api.post("/notes", {
    title,
    description,
    links,
    tags,
  });
  alert("Nota creada");
  navigate("/");

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
            <Input
             placeholder="Titulo" 
             onChange={e => setTitle(e.target.value)}

             />

            <TextArea
             placeholder="bservaciones"
             onChange={e => setDescription(e.target.value)}

              />

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
                {
                tags.map((tag, index)=> (
                  <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() =>handleRemoveTag(tag)}
                />
                              
                ))
                }

              <NoteItem 
              isNew 
              placeholder="Nueva tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
               />
              </div>

            </Section>
            <Button title="Guardar"
            onClick={handleNewNote}
             />



          </form>
        </main>
      </div>
    </>
  );
}
