import { X } from '@phosphor-icons/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { MutatingDots } from 'react-loader-spinner'

import { getAllProducts } from '@/api/products'
import ProductItem from '@/components/ProductItem'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Home = () => {
  const clientQuery = useQueryClient()

  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [orderPrice, setOrderPrice] = useState<string>('')

  const { data: products, isLoading } = useQuery({
    queryFn: () =>
      getAllProducts({
        category: selectedCategory,
        orderPrice,
      }),
    queryKey: ['products'],
  })

  const handleSelectCategory = (value: string) => {
    const category = value === 'All' ? '' : value
    setSelectedCategory(category)
  }

  const handleSelectOrderPrice = (value: 'desc' | 'asc') => {
    const orderPrice = value
    setOrderPrice(orderPrice)
  }

  const handleResetFilters = () => {
    setSelectedCategory('')
    setOrderPrice('')
  }

  useEffect(() => {
    clientQuery.invalidateQueries({ queryKey: ['products'] })
  }, [selectedCategory, orderPrice, clientQuery])

  return (
    <div className="flex w-full flex-col">
      <div className="m-2 flex items-center justify-center gap-2 px-4 sm:gap-4 md:m-6">
        <div className="flex flex-col items-start gap-1 sm:gap-2">
          <span className="text-xs text-muted-foreground sm:text-sm">
            CATEGORIES
          </span>
          <Select onValueChange={handleSelectCategory} value={selectedCategory}>
            <SelectTrigger className="w-32 border-2 border-zinc-600 sm:w-48">
              <SelectValue className="px-2" placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Products</SelectItem>
              <SelectItem value="Living Room">Living Room</SelectItem>
              <SelectItem value="Bathroom">Bathroom</SelectItem>
              <SelectItem value="Room">Room</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start gap-1 sm:gap-2">
          <span className="text-xs text-muted-foreground sm:text-sm">
            PRICE
          </span>
          <Select onValueChange={handleSelectOrderPrice} value={orderPrice}>
            <SelectTrigger className="w-32 border-2 border-zinc-600 sm:w-48">
              <SelectValue className="px-2" placeholder="Select Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">cheap to expensive</SelectItem>
              <SelectItem value="desc">expensive to cheap</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {(!!selectedCategory || !!orderPrice) && (
          <div className="flex items-center justify-center">
            <Button
              type="button"
              onClick={handleResetFilters}
              className="flex flex-col gap-1 bg-transparent text-xs text-zinc-600 hover:text-white sm:flex-row"
            >
              <X size={16} className="text-zinc-600 hover:text-white" />
              Clear filters
            </Button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-80 items-center justify-center">
          {isLoading && (
            <MutatingDots
              visible={true}
              height="100"
              width="100"
              color="#000"
              secondaryColor="#000"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:px-4 lg:grid-cols-4">
          {!isLoading &&
            products.length > 0 &&
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          {!isLoading && products.length === 0 && (
            <div className="flex h-80 w-full items-center justify-center">
              <span className="text-lg text-muted-foreground">
                No products found
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
