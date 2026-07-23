import React, { createContext, useContext, useReducer, useEffect, useCallback, type ReactNode } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import type { Product } from '../data/products';

/* ── Types ─────────────────────────────────────────── */

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity?: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'INCREASE_QTY'; payload: { productId: string } }
  | { type: 'DECREASE_QTY'; payload: { productId: string } }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE'; payload: CartItem[] };

interface CartContextValue extends CartState {
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

/* ── Reducer ───────────────────────────────────────── */

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'HYDRATE':
      return { items: action.payload };

    case 'ADD_ITEM': {
      const { product, quantity = 1 } = action.payload;
      const existing = state.items.find((i) => i.productId === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === product.id
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          ),
        };
      }
      return {
        items: [
          ...state.items,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0] || '',
            slug: product.slug,
            quantity,
          },
        ],
      };
    }

    case 'REMOVE_ITEM':
      return { items: state.items.filter((i) => i.productId !== action.payload.productId) };

    case 'INCREASE_QTY':
      return {
        items: state.items.map((i) =>
          i.productId === action.payload.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        ),
      };

    case 'DECREASE_QTY': {
      const target = state.items.find((i) => i.productId === action.payload.productId);
      if (target && target.quantity <= 1) {
        return { items: state.items.filter((i) => i.productId !== action.payload.productId) };
      }
      return {
        items: state.items.map((i) =>
          i.productId === action.payload.productId
            ? { ...i, quantity: i.quantity - 1 }
            : i,
        ),
      };
    }

    case 'CLEAR_CART':
      return { items: [] };

    default:
      return state;
  }
}

/* ── Context ───────────────────────────────────────── */

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'econutrient_cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = getStorageItem<CartItem[]>(STORAGE_KEY, []);
    dispatch({ type: 'HYDRATE', payload: stored });
  }, []);

  // Persist to localStorage on every change
  useEffect(() => {
    setStorageItem(STORAGE_KEY, state.items);
  }, [state.items]);

  const addItem = useCallback(
    (product: Product, quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
    },
    [],
  );

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  }, []);

  const increaseQty = useCallback((productId: string) => {
    dispatch({ type: 'INCREASE_QTY', payload: { productId } });
  }, []);

  const decreaseQty = useCallback((productId: string) => {
    dispatch({ type: 'DECREASE_QTY', payload: { productId } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}

