import Icon, { IIcon } from "../icon";
import { StyledButton } from "./button.styles";

interface IButton {
  text: string;
  iconName?: IIcon["name"];
  onClick: () => void;
  color?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export const Button = ({
  text,
  iconName,
  onClick = () => {},
  color = 'primary',
  isLoading = false,
}: IButton) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {iconName && (
        <Icon name={isLoading ? "loading" : iconName} />
      )}
      <p>{text}</p>
    </StyledButton>
  );
}