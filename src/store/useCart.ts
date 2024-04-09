import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { CartItemProps } from '@/components/CartItem'

interface CartStore {
  items: CartItemProps[]
  total: number
  addItem: (item: CartItemProps) => void
  removeItem: (id: number) => void
  changeQuantity: (id: number, newQuantity: number) => void
  resetCart: () => void
}

const calculateTotal = (items: CartItemProps[]) => {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
}

export const useCart = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        total: 0,
        addItem: (item) =>
          set((state) => {
            const existingItem = state.items.find((i) => i.id === item.id)
            const updatedItems = existingItem
              ? state.items.map((i) => {
                  if (i.id === item.id) {
                    return { ...i, quantity: i.quantity + 1 }
                  }
                  return i
                })
              : [...state.items, { ...item, quantity: 1 }]

            const updateTotal = calculateTotal(updatedItems)
            return { ...state, items: updatedItems, total: updateTotal }
          }),
        removeItem: (id) => {
          set((state) => {
            const updatedItems = state.items.filter((item) => item.id !== id)
            const updateTotal = calculateTotal(updatedItems)

            return { ...state, items: updatedItems, total: updateTotal }
          })
        },
        changeQuantity: (id, newQuantity) => {
          set((state) => {
            const updatedItems = state.items.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: newQuantity }
              }
              return item
            })

            const updateTotal = calculateTotal(updatedItems)
            return { ...state, items: updatedItems, total: updateTotal }
          })
        },
        resetCart: () => set({ items: [], total: 0 }),
      }),
      { name: 'useCart' },
    ),
  ),
)

// export const useCartTotal = useDerivedValue(get)
