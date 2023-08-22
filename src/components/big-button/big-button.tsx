import Icon, { IIcon } from "../icon";
import { StyledBigButton } from "./big-button.styles";

interface IBigButton {
  iconName: IIcon["name"];
  text: string;
}

export const BigButton = ({
  iconName,
  text,
}: IBigButton) => {
  return (
    <StyledBigButton>
      <Icon name={iconName} />
      <p>{text}</p>
    </StyledBigButton>
  );
}