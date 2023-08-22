import addChart from '../../assets/images/add-car.svg';
import addProduct from '../../assets/images/add-product.svg';
import barCode from '../../assets/images/bar-code.svg';
import registers from '../../assets/images/registers.svg';

const icons = {
  addChart,
  addProduct,
  barCode,
  registers
};

export interface IIcon {
  name: 'addChart' | 'addProduct' | 'barCode' | 'registers';
}

const Icon = ({ name }: IIcon) => <img src={icons[name]} />

export default Icon;