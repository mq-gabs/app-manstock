import { useState } from "react";
import { StyledToast, StyledToaster } from "./toaster.styles";
import Icon from "../icon";

interface IToast {
  text: string;
  type: 'info' | 'warning' | 'success';
  onDelete: () => void;
}

interface IToaster {
  toasts: any[];
  setToasts: (arg: any) => void;
}

const toastTitles = {
  warning: 'Erro!',
  info: 'Aviso!',
  success: 'Sucesso!',
};

const Toast = ({ 
  text,
  type = 'info',
  onDelete,
}: IToast) => {
  const [animationState, setAnimationState] = useState<'pop-up' | 'pop-out'>('pop-up');
  
  const handleDelete = () => {
    setAnimationState('pop-out');
    setTimeout(() => {
      onDelete();
    }, 300)
  }

  setTimeout(() => {
    handleDelete();
  }, 8300)

  return (
    <StyledToast animationstate={animationState} type={type}>
      <div className="toast-head">
        <div className="toast-head-title">
          <Icon name={type} />
          <p>{toastTitles[type]}</p>
        </div>
        <Icon onClick={handleDelete} name="cancel" />
      </div>
      {/* <div className="toast-loadbar-wrapper">
        <div className="toast-loadbar"></div>
      </div> */}
      <div className="toast-body">
        <p>{text}</p>
      </div>
    </StyledToast>
  );
}

export const Toaster = ({
  toasts,
  setToasts,
}: IToaster) => {

  const handleDelete = (id: number) => {
    setToasts((prev: any) => prev.filter((t: any) => t.id !== id));
  }

  return(
    <StyledToaster>
      {toasts?.map(toast => (
        <Toast 
          key={toast.id}
          text={'Não foi possível buscar as informações do produto!'}
          type={toast.type}
          onDelete={() => handleDelete(toast.id)}
        />
      ))}
    </StyledToaster>
  );
}