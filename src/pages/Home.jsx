import { FiPlus, FiSearch } from "react-icons/fi";
import "../styles/layout/Home.scss";
import "../styles/App.scss";

import { useState, useEffect } from "react";
import { api } from "../services/api";
import { Header } from "../components/Header";
import { ButtonText } from "../components/ButtonText";
import { Input } from "../components/Input";
import { Section } from "../components/Section";
import { Note } from "../components/Note";
import { Link } from "react-router-dom";

export function Home() {

  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);
    if (alreadySelected) {
     const filteredTags = tagsSelected.filter(tag => tag!== tagName);
     setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }

    //setTagsSelected(prevState => [...prevState, tagName]);
  }



 


  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);

    }
    fetchTags();

  }, []);

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
            <ButtonText 
            title="Todos" 
         
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0} 

          
            />
          </li>
          {
            tags && tags.map(tag =>( 

          <li key={String(tag.id)}>
            <ButtonText
             title={tag.name}
             onClick={() => handleTagSelected(tag.name)}
             isActive={tagsSelected.includes(tag.name)} 
              />
          </li>
        ))
          }
        
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
