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

export const getAllProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()
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
    await fetch('http://localhost:3000/new-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
  } catch (error) {
    console.error('Error creating new product', error)
    throw new Error('Error creating new product')
  }
}
