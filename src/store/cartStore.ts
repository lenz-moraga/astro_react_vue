import { atom, computed, map } from "nanostores";

export interface Product {
  description: string;
  id: string | number;
  imageSrc: string;
  name: string;
  price: number;
  quantity: number;
}

export const isCartOpen = atom(false);
export const cartItems = map<Record<string | number, Product>>({});

export function addCartItem(cartItem: Product) {
  const { id } = cartItem;
  const existingEntry = cartItems.get()[id];
  const newEntryQuantity = existingEntry ? existingEntry.quantity + 1 : 1;
  const entry = {
    ...cartItem,
    quantity: newEntryQuantity,
  };

  cartItems.setKey(id, entry);
}

export const calculateTotal = computed(cartItems, (items) => {
  return Object.values(items).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});
