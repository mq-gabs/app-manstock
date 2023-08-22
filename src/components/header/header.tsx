import { StyledHeader } from "./header.styles";
import logo from '../../assets/images/logo.svg';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className="logo" onClick={() => navigate('/')}>
        <img src={logo} alt="Logotipo Manstock" />
        <h1>Manstock</h1>
      </div>
    </StyledHeader>
  );
};