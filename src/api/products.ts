import axios from 'axios'
import { toast } from 'sonner'

interface ProductItemRequestData {
  isNew?: boolean | null
  isSale?: boolean | null
  name: string
  price: number
  oldPrice?: number | null
  imgUrl: string
  discountValue?: number | null
  stars?: number | null
  color?: string | null
  category?: string | null
}

export const getAllProducts = async ({
  category,
  orderPrice,
}: {
  category?: string
  orderPrice?: string
}) => {
  try {
    const response = await axios.get('http://localhost:3000/products', {
      params: {
        category,
        orderPrice,
      },
    })
    const { data } = await response
    return data
  } catch (error) {
    console.error('Error fetching products', error)
    toast.error('Error fetching products')
    return []
  }
}

export const createNewProductMutation = async (
  product: ProductItemRequestData,
) => {
  try {
    await axios.post('http://localhost:3000/new-product', product, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error('Error creating new product', error)
    throw new Error('Error creating new product')
  }
}
