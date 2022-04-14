// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './PurchaseItem.styles';

type Props = {
  item: CartItemType;
};

const PurchaseItem: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <div data-cy={`purchase-item-${item.id}`}>
      <h3>{item.title}</h3>
      <div className='information'>
        <p data-cy={`purchase-item-price-${item.id}`}><b>Price:</b> ${item.price}</p>
        <p data-cy={`purchase-item-amount-${item.id}`}><b>Amount:</b> {item.amount}</p>
        <p data-cy={`purchase-item-total-${item.id}`}><b>Total:</b> ${(item.amount * item.price).toFixed(2)}</p>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default PurchaseItem;
