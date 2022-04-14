import { useQuery } from 'react-query';
import LinearProgress from '@material-ui/core/LinearProgress';
import PurchaseItem from './PurchaseItem/PurchaseItem';
import { Wrapper } from './Purchases.styles';
import { CartItemType } from '../App';

const getPurchases = async (): Promise<CartItemType[]> =>
  await (await fetch(`api/purchase`)).json();

const Purchases = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'purchase',
    getPurchases
  );
  
  if (isLoading) return <LinearProgress />;
  if (error || data == undefined) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <h2>Recent Purchases</h2>
      {data.length === 0 ? <p>No recent purchases.</p> : null}
      {data.map(item => (
        <PurchaseItem
          key={item.id}
          item={item}
        />
      ))}
    </Wrapper>
  );
};

export default Purchases;
