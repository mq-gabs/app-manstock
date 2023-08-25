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

const ToastProvider = ({ children }: { children: ReactElement }) => {
  const [toasts, setToasts] = useState<IToastElement[]>([]);

  console.log({ toasts });

  const popUp = ({
    message,
    type,
    title
  }: IPopUp) => {
    setToasts(prev => [...prev, {
      id: v4(),
      message: message,
      type,
      title,
    }]);
  }

  return (
    <ToastContext.Provider value={{ popUp }}>
      {toasts.length !== 0 && (
        <Toaster
          toasts={toasts}
          setToasts={setToasts}
        />
      )}
      {children}
    </ToastContext.Provider>
  )
}

const usePopUp = () => {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, usePopUp };