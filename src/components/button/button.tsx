import Icon, { IIcon } from "../icon";
import { StyledButton } from "./button.styles";

interface IButton {
  text: string;
  iconName?: IIcon["name"];
  onClick: () => void;
  color?: 'primary' | 'secondary';
}

export const Button = ({
  text,
  iconName,
  onClick = () => {},
  color = 'primary',
}: IButton) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {iconName && (
        <Icon name={iconName} />
      )}
      <p>{text}</p>
    </StyledButton>
  );
}