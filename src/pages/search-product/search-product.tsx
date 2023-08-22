import { useState } from "react";
import { Toaster } from "../../components";

const types = [
  'warning',
  'info',
  'success',
];

export const SearchProduct = () => {
  document.title = 'Manstock - Buscar Produto'
  const [toasts, setToasts] = useState<any[]>([]);
  
  const addToast = () => {
    setToasts([...toasts, { id: Math.ceil(Math.random() * 100000), type: types[Math.ceil(Math.random() * 3) - 1] }]);
    console.log('ADD')
  }

  return (
    <>
      <h1>Search Product</h1>
      <button onClick={addToast}>CLICK</button>
      <Toaster toasts={toasts} setToasts={setToasts} />
    </>
  );
}