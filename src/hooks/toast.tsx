import { ReactElement, createContext, useContext, useState } from "react";
import { IToastElement, TToastTypes } from "../interfaces";
import { Toaster } from "../components";
import { v4 } from "uuid";

interface IPopUp {
  message: string;
  type: TToastTypes;
  title?: string;
}

interface IToastContext {
  popUp: (arg: IPopUp) => void;
}

const ToastContext = createContext({} as IToastContext);

const ToastProvider = ({ children }: { children: ReactElement[] }) => {
  const [toasts, setToasts] = useState<IToastElement[]>([]);

  const popUp = ({
    message,
    type,
    title
  }: IPopUp) => {
    setToasts([...toasts, {
      id: v4(),
      message: message,
      type,
      title,
    }]);
  }

  console.log({ toasts });

  return (
    <ToastContext.Provider value={{ popUp }}>
      <Toaster
        toasts={toasts}
        setToasts={setToasts}
      />
      {children}
    </ToastContext.Provider>
  )
}

const usePopUp = () => {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, usePopUp };