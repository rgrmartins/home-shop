import { Star } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'

import { useCart } from '@/store/useCart'
import { priceFormatter } from '@/utils/formatter'

interface ProductItemProps {
  product: {
    id: number
    isNew?: boolean
    isSale?: boolean
    name: string
    price: number
    oldPrice?: number
    imgUrl: string
    discountValue?: number
    stars?: number
    color?: string
  }
}

const ProductItem = (props: ProductItemProps) => {
  const {
    id,
    isNew = false,
    isSale = false,
    name,
    price,
    oldPrice,
    imgUrl,
    discountValue,
    stars = 0,
    color,
  } = props.product

  const { addItem } = useCart()

  const starsArray = Array.from({ length: stars }, (_, i) => (
    <Star key={i} size={16} weight="fill" />
  ))

  const handleAddToCart = async () => {
    toast.success('Product added to cart')
    await addItem({
      id,
      name,
      price,
      color: color ?? 'Black',
      quantity: 1,
      imageUrl: imgUrl,
    })
  }

  return (
    <Link
      className="group transform transition duration-500 hover:scale-110"
      to="/"
    >
      <div className="mb-6 flex flex-col items-center gap-1 p-2 sm:items-start">
        <div className="flex flex-col items-center justify-end">
          <img src={imgUrl} alt="" className="h-64 w-60" />
          <div className="absolute mb-48 mr-44 flex flex-col items-start gap-1.5 sm:left-4 sm:top-4">
            {isNew && (
              <span className="rounded-md bg-white px-2 py-0.5 text-sm font-bold">
                New
              </span>
            )}
            {isSale && (
              <span className="rounded-md bg-green-600 px-2 py-0.5 text-sm font-semibold text-white">
                {`- ${discountValue}%`}
              </span>
            )}
          </div>
          <div className="absolute flex w-full transform flex-col items-center justify-center px-4 transition duration-500 group-hover:opacity-100 sm:w-full sm:opacity-0">
            <button
              onClick={handleAddToCart}
              className="mb-2 w-40 rounded-md bg-black p-2 text-white hover:bg-zinc-700"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="flex h-4 gap-2">{starsArray}</div>
        <span className="font-semibold">{name}</span>
        <div className="flex items-center gap-2">
          <span>{priceFormatter.format(price)}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {priceFormatter.format(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
