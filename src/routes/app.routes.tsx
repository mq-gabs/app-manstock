import { Route, Routes } from "react-router-dom"
import { Header } from "../components"
import { Home, NewProduct, NewPurchase, SearchProduct, SearchPurchase } from "../pages"

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/new" element={<NewProduct />} />
        <Route path="/product/search" element={<SearchProduct />} />
        <Route path="/purchase/new" element={<NewPurchase />} />
        <Route path="/purchase/search" element={<SearchPurchase />} />
      </Routes>
    </>
  )
}