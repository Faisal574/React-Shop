
export const cartSlice = ((set) => ({
  cartCount: 0,
  addCartItem: (count) =>
    set((state) => ({
      cartCount:count
    })),
}));
