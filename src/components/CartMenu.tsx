import { ShoppingBag } from 'lucide-react'
import { toast } from 'sonner'

import { useCart } from '@/store/useCart'
import { priceFormatter } from '@/utils/formatter'

import CartItem from './CartItem'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { ScrollArea } from './ui/scroll-area'

const CartMenu = () => {
  const { items, total, removeItem, changeQuantity, resetCart } = useCart()

  const OnQuantityChange = (id: number, newQuantity: number) => {
    changeQuantity(id, newQuantity)
  }

  const onRemoveItem = async (id: number) => {
    toast.success('Item removed successfully')
    await removeItem(id)
  }

  const handleCheckout = () => {
    if (items.length === 0) {
      return toast.error('Your bag is empty')
    }

    toast.success('Purchases made successfully')
    resetCart()
  }

  return (
    <Popover>
      <PopoverTrigger className="flex items-center justify-center gap-2">
        <ShoppingBag />
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900">
          <span className="text-sm font-semibold text-white">
            {items.length}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="mr-6 border border-zinc-700">
        <span className="text-xl md:text-2xl">Your bag</span>
        <ScrollArea className="mt-8 flex h-96 flex-col gap-2">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={OnQuantityChange}
              onRemoveItem={onRemoveItem}
            />
          ))}
        </ScrollArea>
        <div className="mt-12 flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-zinc-300 pb-4">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm">{priceFormatter.format(300)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl">Total</span>
            <span className="text-xl font-semibold">
              {priceFormatter.format(total)}
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={handleCheckout}
            className="mt-6 w-full rounded-md bg-zinc-900 p-2 text-white hover:bg-zinc-700"
          >
            Go to checkout
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CartMenu
