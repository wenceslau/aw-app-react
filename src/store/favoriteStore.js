import { create } from 'zustand'

// Helper function to load state from local storage
const loadFromLocalStorage = (key) => {
  const storedState = localStorage.getItem(key);
  return storedState ? JSON.parse(storedState) : [];
};

// Helper function to save state to local storage
const saveToLocalStorage = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

const favoriteStore = create((set, get) => ({
  items: loadFromLocalStorage('items'),

  addItem: (item) => {
    const updatedItems = [...get().items, item];
    set({ items: updatedItems });
    saveToLocalStorage('items', updatedItems); // Save updated state to local storage
  },

  removeItem: (itemToRemove) => {
    const updatedItems = get().items.filter(item => item !== itemToRemove);
    set({ items: updatedItems });
    saveToLocalStorage('items', updatedItems); // Save updated state to local storage
  },

  clearItems: () => {
    set({ items: [] });
    localStorage.removeItem('items'); // Clear items from local storage
  }
}))

export default favoriteStore;
