import Icon, { IIcon } from "../icon";
import { StyledInput } from "./input.styles";

interface IInput {
  type?: string;
  placeholder?: string;
  icon?: IIcon['name'];
  value: string;
  setValue: (arg: any) => void;
}

export const Input = ({
  type = 'text',
  placeholder = '',
  icon,
  value,
  setValue,
}: IInput) => {
  return (
    <StyledInput>
      {icon && (
        <Icon name={icon} />
      )}
      <input
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
      />
    </StyledInput>
  );
}
