import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function PantryList({ items, onDelete, onEdit }) {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
          <IconButton onClick={() => onEdit(item)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
