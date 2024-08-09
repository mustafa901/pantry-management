import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

export default function PantryForm({ onSave, initialData = {} }) {
  const [name, setName] = useState(initialData.name || '');
  const [quantity, setQuantity] = useState(initialData.quantity || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, quantity });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        type="number"
      />
      <Button type="submit" variant="contained">Save</Button>
    </Box>
  );
}
