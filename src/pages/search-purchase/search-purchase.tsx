import { useState } from "react";
import { Button, Input, Modal, PurchaseCard } from "../../components";
import { StyledSearchPurchase } from "./search-purchase.styles"
import { IPurchase } from "../../interfaces";
import Icon from "../../components/icon";

export const SearchPurchase = () => {
  document.title = 'Manstock - Buscar Compra'
  const [productCode, setProductCode] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  
  const handleClickClearFilters = () => {
    setOpenModal(true);
  }

  const handleClearFilters = () => {
    setProductCode("");
    setName("");
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setEndTime("");
    setOpenModal(false);
  }

  const handleSearchFiltering = () => {
    console.log({
      productCode,
      name,
      startDate,
      endDate,
      startTime,
      endTime,
    });
  }

  return (
    <StyledSearchPurchase>
      <div className="search-filters">
        <h3>Filtros</h3>
        <div className="top-filters">
          <Input
            value={productCode}
            setValue={setProductCode}
            icon="barCodePrimary"
            placeholder="Código do produto"
          />
          <Input
            value={name}
            setValue={setName}
            icon="name"
            placeholder="Nome do produto"
          />
        </div>
        <div className="bottom-filters">
          <Input
            value={startDate}
            setValue={setStartDate}
            icon="date"
            placeholder="A partir da data"
            type="date"
          />
          <Input
            value={endDate}
            setValue={setEndDate}
            icon="date"
            placeholder="Até a data"
            type="date"
          />
          <Input
            value={startTime}
            setValue={setStartTime}
            icon="time"
            placeholder="A partir do horário"
            type="time"
          />
          <Input
            value={endTime}
            setValue={setEndTime}
            icon="time"
            placeholder="Até o horário"
            type="time"
          />
        </div>
        <div className="filters-actions">
          <Button
            text="Limpar filtros"
            color="secondary"
            iconName="cancel"
            onClick={handleClickClearFilters}
          />
          <Button
            text="Pesquisar"
            color="primary"
            iconName="searchWhite"
            onClick={handleSearchFiltering}
          />
        </div>
      </div>
      <div className="search-list">
        {purchases.length !== 0 && purchases.map(purchase => (
          <PurchaseCard
            key={purchase.id}
            change={purchase.change}
            payment={purchase.payment}
            payment_type_id={purchase.payment_type_id}
            total={purchase.total}
            created_at={purchase.created_at}
          />
        ))}
        {purchases.length === 0 && (
          <div className="empty-purchase-list">
            <Icon name="carGrey" size={1.5} />
            <h3>Nenhuma compra encontrada...</h3>
        </div>
        )}
      </div>

      <Modal
        open={openModal}
        title="Atenção!"
        text="Tem certeza que deseja limpar os filtros?"
        confirmText="Limpar filtros"
        cancelText="Cancelar"
        confirmColor="secondary"
        onClose={() => setOpenModal(false)}
        onConfirm={handleClearFilters}
      />
    </StyledSearchPurchase>
  );
}