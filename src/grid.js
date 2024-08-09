import { Grid, Card, CardContent, Typography } from '@mui/material';

export default function PantryList({ items, onDelete, onEdit }) {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="textSecondary">Quantity: {item.quantity}</Typography>
              {/* Add your action buttons here */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
