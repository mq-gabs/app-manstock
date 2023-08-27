import { useEffect, useState } from "react";
import { IPurchase } from "../../interfaces";
import { StyledPurchaseCard } from "./purchase-card.styles";
import { getPaymentTypeById } from "../../services";
import { usePopUp } from "../../hooks";

interface IPurchaseCard extends Omit<IPurchase, "id" | "owner" | "updated_at"> {
  
}

export const PurchaseCard = ({
  created_at,
  total,
  payment_type_id,
  payment,
  change,
}: IPurchaseCard) => {
  const [paymentType, setPaymentTipe] = useState<string>("");
  const { popUp } = usePopUp();

  const getPaymentType = async () => {
    const data = await getPaymentTypeById({ payment_type_id });

    if (!data) {
      popUp({
        message: 'Não foi possível buscar a forma de pagamento!',
        type: 'warning',
      });
      return;
    }

    setPaymentTipe(data.name);
  }

  useEffect(() => {
    getPaymentType();
  }, [])

  const formatDateTime = () => {
    const [date, time] = created_at.split(' ');
    const [year, month, day] = date.split('/');
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
        <p>TOTAL: {total}</p>
      </div>
      <div className="card-info">
        <p>Forma de pagamento: {paymentType || "-"}</p>
        <p>Valor pago: {payment} | Troco: {change}</p>
      </div>

    </StyledPurchaseCard>
  );
}