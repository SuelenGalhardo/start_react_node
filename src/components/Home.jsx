import "../styles/App.scss";

import { Header } from "./Header";

export function Home() {
    return (
        <div className="home">
        <div className="home__brand">
          <h1>RocketNotes</h1>
         
        </div>
       <Header></Header>
        <div className="home__menu">
       
        </div>
        <div className="home__search"></div>
        <div className="home__content">
      
        </div>
        <div  className="home__note">
       
        </div>
      </div>

    )
}

