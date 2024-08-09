import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const pantryCollection = collection(db, 'pantry');

export async function addItem(item) {
  await addDoc(pantryCollection, item);
}

export async function getItems() {
  const querySnapshot = await getDocs(pantryCollection);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function updateItem(id, updatedItem) {
  const itemDoc = doc(db, 'pantry', id);
  await updateDoc(itemDoc, updatedItem);
}

export async function deleteItem(id) {
  const itemDoc = doc(db, 'pantry', id);
  await deleteDoc(itemDoc);
}
