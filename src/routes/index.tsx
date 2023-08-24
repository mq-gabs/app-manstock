import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";


export const Router = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}