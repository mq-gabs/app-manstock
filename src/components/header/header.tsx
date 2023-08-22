import { StyledHeader } from "./header.styles";
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={logo} alt="Logotipo Manstock" />
        <h1>Manstock</h1>
      </div>
    </StyledHeader>
  );
};