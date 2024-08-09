import { useState, useEffect } from 'react';
import { getItems, addItem, deleteItem, updateItem } from '../services/pantryService';
import PantryList from '../components/PantryList';
import PantryForm from '../components/PantryForm';
import SearchBar from '../components/SearchBar';

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    async function loadItems() {
      const pantryItems = await getItems();
      setItems(pantryItems);
      setFilteredItems(pantryItems);
    }
    loadItems();
  }, []);

  const handleSave = async (item) => {
    if (editingItem) {
      await updateItem(editingItem.id, item);
      setEditingItem(null);
    } else {
      await addItem(item);
    }
    const pantryItems = await getItems();
    setItems(pantryItems);
    setFilteredItems(pantryItems);
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    const pantryItems = await getItems();
    setItems(pantryItems);
    setFilteredItems(pantryItems);
  };

  const handleSearch = (query) => {
    setFilteredItems(items.filter(item => item.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <PantryForm onSave={handleSave} initialData={editingItem} />
      <PantryList items={filteredItems} onDelete={handleDelete} onEdit={setEditingItem} />
    </div>
  );
}
