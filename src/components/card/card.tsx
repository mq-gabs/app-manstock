import Icon from "../icon";
import { StyledCard } from "./card.styles";

interface ICard {
  name: string;
  price: number;
  quantity: number;
  setQuantity: (arg: any) => void;
  onDelete: () => void;
  simple?: boolean;
}

export const Card = ({
  name,
  price,
  quantity,
  setQuantity = () => {},
  onDelete = () => {},
  simple = false,
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
      <div className="top">
        <p>{name}</p>
        {!simple && (
          <Icon name="trash" onClick={onDelete} />
        )}
      </div>
      <div className="bottom">
        <div className="icons">
          {!simple && (
            <>
              <Icon name="add" onClick={handleAddQuantity} />
              <Icon name="sub" onClick={handleSubQuantity} />
            </>
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