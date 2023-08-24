import { StyledHeader } from "./header.styles";
import { useNavigate } from "react-router-dom";
import Icon from "../icon";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <div className="logo" onClick={() => navigate('/')}>
        <Icon name="logo" size={3} />
        <h1>Manstock</h1>
      </div>
    </StyledHeader>
  );
};