// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './PurchaseItem.styles';

type Props = {
  item: CartItemType;
};

const PurchaseItem: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className='information'>
        <p><b>Price:</b> ${item.price}</p>
        <p><b>Quantity:</b> {item.amount}</p>
        <p><b>Total:</b> ${(item.amount * item.price).toFixed(2)}</p>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default PurchaseItem;
