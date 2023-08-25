import Icon, { IIcon } from "../icon";
import { StyledCard } from "./card.styles";

interface ICard {
  name: string;
  price: number;
  quantity?: number;
  setQuantity?: (arg: any) => void;
  onDelete?: () => void;
  simple?: boolean;
  code?: string;
  onOption?: () => void;
  optionIcon?: IIcon["name"];
}

export const Card = ({
  name,
  price,
  quantity = 1,
  setQuantity = () => {},
  onDelete,
  simple = false,
  code,
  onOption,
  optionIcon,
}: ICard) => {
  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  }

  const handleSubQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <StyledCard>
      <div>
        {code && (
          <p className="card-code">{code}</p>
        )}
        <div className="top">
          <p>{name}</p>
          {!!onDelete && (
            <Icon name="trash" onClick={onDelete} />
          )}
        </div>
        </div>
      <div className="bottom">
        <div className="icons">
          {!simple && (
            <>
              <Icon size={1.2} name="add" onClick={handleAddQuantity} />
              <Icon size={1.2} name="sub" onClick={handleSubQuantity} />
            </>
          )}
          {!!onOption && (
            <Icon size={1.2} name={optionIcon || "quest"} onClick={onOption} />
          )}
        </div>
        <p>
          {!simple && (
            <>
              {quantity} X R$ {price.toFixed(2)} = 
            </>
          )}
          <span> R$ {(quantity * price).toFixed(2)} </span>
        </p>
      </div>
    </StyledCard>
  );
}