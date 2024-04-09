import { Trash } from '@phosphor-icons/react'

import { priceFormatter } from '@/utils/formatter'

export interface CartItemProps {
  id: number
  name: string
  color: string
  price: number
  quantity: number
  imageUrl: string
}

interface CartItemPropsData {
  item: CartItemProps
  onQuantityChange: (id: number, newQuantity: number) => void
  onRemoveItem: (id: number) => void
}

const CartItem = (props: CartItemPropsData) => {
  const { id, name, color, price, quantity, imageUrl } = props.item
  const { onQuantityChange, onRemoveItem } = props

  const handleItemQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1) {
      onQuantityChange(id, newQuantity)
    }
  }

  return (
    <div className="mb-2 flex items-start justify-between border-b border-zinc-300 pb-4">
      <div className="flex gap-2">
        <img
          src={imageUrl}
          alt=""
          className="h-24 w-20 rounded-md border border-zinc-300 p-1"
        />
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-sm font-medium">{name}</span>
          <span className="text-xs">{`Color: ${color}`}</span>
          <div className="flex h-7 w-16 items-center justify-center gap-3 rounded-md border border-zinc-400">
            <button onClick={() => handleItemQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleItemQuantityChange(1)}>+</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className="text-sm font-semibold">
          {priceFormatter.format(price)}
        </span>
        {quantity === 1 && (
          <button
            onClick={() => onRemoveItem(id)}
            className="text-sm text-red-600"
          >
            <Trash size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

export default CartItem
