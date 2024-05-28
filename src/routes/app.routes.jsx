import { Routes, Route } from 'react-router-dom';

import { NewInterface } from '../pages/NewInterface';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';

export function AppRoutes(){

    return(

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/newInterface" element={<NewInterface />} />
        <Route path="/profile" element={<Profile />} />
     
      </Routes>

    );

}
