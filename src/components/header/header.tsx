import { StyledHeader } from "./header.styles";
import { useNavigate } from "react-router-dom";
import Icon from "../icon";
import { useAuth } from "../../hooks/auth";

export const Header = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  return (
    <StyledHeader>
      <div className="logo" onClick={() => navigate('/')}>
        <Icon name="logo" size={3} onClick={() => navigate('/')} />
        <h1>Manstock</h1>
      </div>
      <div className="header-actions">
        <Icon name="user" size={1.5} onClick={() => navigate('/profile')} />
        <Icon name="out" size={1.5} onClick={logOut} />
      </div>
    </StyledHeader>
  );
};