import "../../styles/App.scss";
import { Button } from "../../components/button";

export function Details() {
  return (
    <>
      <h1 className="title">Hello Word</h1>
    
      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Volver" />
    </>
  );
}
