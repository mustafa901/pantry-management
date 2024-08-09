import { TextField } from '@mui/material';

export default function SearchBar({ onSearch }) {
  return (
    <TextField
      label="Search Items"
      onChange={(e) => onSearch(e.target.value)}
      fullWidth
    />
  );
}
