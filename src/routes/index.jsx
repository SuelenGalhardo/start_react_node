import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();
  return (

    //if ternario user es true, renderiza AppRoutes, sino renderiza AuthRoutes

    <BrowserRouter>
      { user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}