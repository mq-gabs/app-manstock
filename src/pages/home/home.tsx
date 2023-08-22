import { useNavigate } from "react-router-dom";
import { BigButton, Header } from "../../components";
import { StyledHome } from "./home.styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledHome>
      <Header />
      <div className="btns-wrapper">
        <BigButton
          iconName="addChart"
          text="Nova compra"
          onClick={() => navigate('/purchase/new')}
        />
        <BigButton
          iconName="barCode"
          text="Consultar produto"
          onClick={() => navigate('/product/search')}
        />
        <BigButton
          iconName="registers"
          text="Consultar compra"
          onClick={() => navigate('/purchase/search')}
        />
        <BigButton
          iconName="addProduct"
          text="Novo produto"
          onClick={() => navigate('/product/new')}
        />
      </div>
    </StyledHome>
  );
}