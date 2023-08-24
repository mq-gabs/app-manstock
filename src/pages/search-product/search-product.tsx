import { usePopUp } from "../../hooks/toast";

export const SearchProduct = () => {
  document.title = 'Manstock - Buscar Produto'
  const { popUp } = usePopUp();

  return (
    <>
      <h1>Search Product</h1>
      <button onClick={() => popUp({
        message: 'Agora já tá na hora de almoçar. Bora almoçar galera',
        type: "info",
      })}>CLICK</button>
    </>
  );
}