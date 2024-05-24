import "../styles/App.scss";
import "../styles/layout/Details.scss"
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../services/api";

import { useState, useEffect } from "react";

import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { ButtonText } from "../components/ButtonText";
import { Tag } from "../components/Tag";

export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

function  handleBack() {
  navigate("/");
}
async function handleRemove() {
  const confirm = window.confirm("Desea realmente remover esta nota?");

  if (confirm) {
    await api.delete(`/notes/${params.id}`);
    navigate("/");
  }
}

  useEffect(() => {

    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote();

  }, [])


  return (
    <>
      <div className="container">
        <Header />

      { data &&
        <main className="mainContainer">
          <div className="contentOne">
            <ButtonText title="Excluir nota"
             onClick={handleRemove} />
            <h1 className="contentOne__title">{data.title}</h1>
            <p className="contentOne__text">{data.description}</p>


                

            { data.links &&
            <Section title="Enlaces útiles">
              <ul className="links">
                {
                  data.links.map(link => (
                <li key={String(link.id)}>
                  <a href={link.url}>{link.url}</a>
                </li>
                ))
                }
               
              </ul>
            </Section>
            }



            {data.tags &&
            <Section title="Marcadores">
              {data.tags.map(tag => (

              <Tag
              key={String(tag.id)}
               title={tag.name} />

            ))}
             
            </Section>
            }

            <Button title="Volver" 
            onClick= { handleBack}/>
          </div>
        </main>
        }
      </div>
    </>
  );
}
