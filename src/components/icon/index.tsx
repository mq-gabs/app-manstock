import addChart from '../../assets/images/add-car.svg';
import addProduct from '../../assets/images/add-product.svg';
import barCode from '../../assets/images/bar-code.svg';
import registers from '../../assets/images/registers.svg';
import add from '../../assets/images/plus.svg';
import sub from '../../assets/images/minus.svg';
import trash from '../../assets/images/trash.svg';
import cancel from '../../assets/images/cancel.svg';
import checkCar from '../../assets/images/check-car.svg';
import warning from '../../assets/images/warning.svg';
import info from '../../assets/images/info.svg';
import success from '../../assets/images/success.svg';
import searchPrimary from '../../assets/images/search-primary.svg';
import barCodePrimary from '../../assets/images/bar-code-primary.svg';
import carGrey from '../../assets/images/car-grey.svg';
import loading from '../../assets/images/loading.svg';
import searchWhite from '../../assets/images/search-white.svg';
import name from '../../assets/images/name.svg';
import logo from '../../assets/images/logo.svg';
import password from '../../assets/images/password.svg';
import email from '../../assets/images/email.svg';

const icons = {
  addChart,
  addProduct,
  barCode,
  registers,
  add,
  sub,
  trash,
  cancel,
  checkCar,
  warning,
  info,
  success,
  searchPrimary,
  barCodePrimary,
  carGrey,
  loading,
  searchWhite,
  name,
  logo,
  email,
  password,
};

export interface IIcon {
  name: 'addChart' 
  | 'addProduct' 
  | 'barCode' 
  | 'registers' 
  | 'add' 
  | 'sub' 
  | 'trash' 
  | 'cancel' 
  | 'checkCar'
  | 'warning'
  | 'info'
  | 'success'
  | 'searchPrimary'
  | 'barCodePrimary'
  | 'carGrey'
  | 'loading'
  | 'searchWhite'
  | 'name'
  | 'logo'
  | 'email'
  | 'password';
  onClick?: () =>  void;
  size?: number;
}

const Icon = ({
  name,
  onClick = () => {},
  size = 1,
  ...rest
}: IIcon) => (
  <img
    style={{ width: String(size + "rem"), height: String(size + "rem")}}
    onClick={onClick}
    src={icons[name]}
    {...rest}
  />
)

export default Icon;