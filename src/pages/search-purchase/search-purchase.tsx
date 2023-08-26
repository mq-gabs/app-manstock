import { useState } from "react";
import { Modal } from "../../components";

export const SearchPurchase = () => {
  document.title = 'Manstock - Buscar Compra'
  const [open, setOpen] = useState<boolean>(false);
  
  return (
    <>
      <h1>Search Purchase</h1>
      <button onClick={() => setOpen(true)}>CLICK</button>
      <Modal title="PORRA!" open={open} onClose={() => setOpen(false)}>
        <h1>Hello</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro modi explicabo quae, animi ipsum perferendis hic, totam fuga possimus voluptatem magnam eos quo! Excepturi aut maiores eligendi natus error?</p>
      </Modal>
    </>
  );
}