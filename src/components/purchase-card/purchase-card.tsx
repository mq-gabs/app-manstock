import { useEffect, useState } from "react";
import { IProduct, IPurchase } from "../../interfaces";
import { StyledPurchaseCard } from "./purchase-card.styles";
import { getPaymentTypeById } from "../../services";
import { usePopUp } from "../../hooks";
import { Card, Dropdown, Loading } from "..";
import { getProductsByPurchaseId } from "../../services/products/getProductsByPurchaseId";

interface IPurchaseCard extends Omit<IPurchase, "owner" | "updated_at"> {
  
}

export const PurchaseCard = ({
  id,
  created_at,
  total,
  payment_type_id,
  payment,
  change,
}: IPurchaseCard) => {
  const [paymentType, setPaymentTipe] = useState<string>("");
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { popUp } = usePopUp();

  const getPaymentType = async () => {
    setIsLoading(true);

    const data = await getPaymentTypeById({ payment_type_id });

    setIsLoading(false);

    if (!data) {
      popUp({
        message: 'Não foi possível buscar a forma de pagamento!',
        type: 'warning',
      });
      return;
    }

    setPaymentTipe(data.name);
  }

  const getProductsByPurchase = async () => {
    const data = await getProductsByPurchaseId({ id });

    if (!data) {
      popUp({
        message: 'Não foi possível buscar os produtos!',
        type: 'warning',
      });
      return;
    }

    setProducts(data);
  }

  useEffect(() => {
    if (openDropdown) {
      getProductsByPurchase();  
    }
  }, [openDropdown])

  useEffect(() => {
    getPaymentType();
  }, [])

  const formatDateTime = () => {
    const [date, time] = created_at.split(' ');
    const [year, month, day] = date.split('-');
    const formatedDate = [day, month, year].join('/');
    const [hour, minutes, ] = time.split(':');
    const formatedTime = [hour,minutes].join(':');
    return [formatedDate, formatedTime];
  }

  const [date, time] = formatDateTime();

  return (
    <StyledPurchaseCard>
      <div className="card-info">
        <p>DATA: {date} HORA: {time}</p>
        <p>TOTAL: <span className="span-total">R$ {total.toFixed(2)}</span></p>
      </div>
      <div className="card-info">
        <p>Forma de pagamento: <span>{paymentType || "-"}</span></p>
        <p>Valor pago: <span>R$ {payment.toFixed(2)}</span> | Troco: <span>R$ {change.toFixed(2)}</span></p>
      </div>
      <Dropdown
        open={openDropdown}
        setOpen={setOpenDropdown}
        title="Lista de produtos"
        iconName="list"
      >
        <>
          {products.length !== 0 && openDropdown && products.map(product => (
            <Card
              simple
              key={product.id}
              name={product.name}
              price={product.price}
              code={product.code}
            />
          ))}
          {products.length === 0 && openDropdown && (
            <div className="cards-loading">
              <Loading />
            </div>
          )}
        </>
      </Dropdown>
    </StyledPurchaseCard>
  );
}