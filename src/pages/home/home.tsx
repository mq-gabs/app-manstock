import { BigButton } from "../../components/big-button/big-button";
import { Header } from "../../components/header/header";
import { StyledHome } from "./home.styles";

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="btns-wrapper">
        <BigButton iconName="addChart" text="Nova compra" />
        <BigButton iconName="barCode" text="Consultar produto" />
        <BigButton iconName="registers" text="Consultar compra" />
        <BigButton iconName="addProduct" text="Novo produto" />
      </div>
    </StyledHome>
  );
}