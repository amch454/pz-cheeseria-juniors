import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Types
import { CartItemType } from '../../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export interface ItemDialogProps {
  open: boolean;
  item: CartItemType;
  onClose: () => void;
}

function ItemDialog(props: ItemDialogProps) {
  const { onClose, item, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent>
        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%' }}/>
        <List>
          <ListItem>
            <ListItemText primary="Title" secondary={item.title} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="ID" secondary={item.id} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Price" secondary={item.price} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Description" secondary={item.description} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Category" secondary={item.category} />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} onClick={() => handleDialogOpen()}/>
      <div onClick={() => handleDialogOpen()}>
        <h3>{item.title}</h3>
        <h3>${item.price}</h3>
      </div>
      <Button
        onClick={() => handleAddToCart(item)}
        data-cy={`add-to-cart-${item.id}`}>Add to cart</Button>
      <ItemDialog
        open={dialogOpen}
        item={item}
        onClose={handleDialogClose}
      />
    </Wrapper>
  )
};

export default Item;
