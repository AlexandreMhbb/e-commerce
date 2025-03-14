import { create } from "zustand";

export const useStore = create((set) => ({
  products: [],
  cart: [],
  setProducts: (products) => set({ products }),
  addToCart: (product) =>
    set((state) => {
      const itemExists = state.cart.find((item) => item.id === product.id);
      if (itemExists) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));