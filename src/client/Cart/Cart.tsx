import Button from '@material-ui/core/Button';
import CartItem from './CartItem/CartItem';
import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const handlePurchase = async (cartItems: CartItemType[]): Promise<JSON> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cartItems)
  };
  const response = await fetch(`api/purchase`, requestOptions);
  const data = await response.json();
  return data;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  let price = calculateTotal(cartItems).toFixed(2)
  let purchase = <></>;
  if (price != '0.00') {
    purchase = <Button onClick={() => handlePurchase(cartItems)}>Purchase</Button>
  }

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${price}</h2>
      {purchase}
    </Wrapper>
  );
};

export default Cart;
