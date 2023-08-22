import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NewProduct, NewPurchase, SearchProduct, SearchPurchase } from "../pages";
import { Header } from "../components";


export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/new" element={<NewProduct />} />
        <Route path="/product/search" element={<SearchProduct />} />
        <Route path="/purchase/new" element={<NewPurchase />} />
        <Route path="/purchase/search" element={<SearchPurchase />} />
      </Routes>
    </BrowserRouter>
  );
}