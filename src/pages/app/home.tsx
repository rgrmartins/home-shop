import { useQuery } from '@tanstack/react-query'
import { MutatingDots } from 'react-loader-spinner'

import { getAllProducts } from '@/api/products'
import ProductItem from '@/components/ProductItem'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Home = () => {
  const { data: products, isLoading } = useQuery({
    queryFn: () => getAllProducts(),
    queryKey: ['products'],
  })

  return (
    <div className="flex w-full flex-col">
      <div className="m-2 flex items-center justify-center gap-4 px-4 md:m-6">
        <div className="flex flex-col items-start gap-2">
          <span className="text-xs text-muted-foreground sm:text-sm">
            CATEGORIES
          </span>
          <Select>
            <SelectTrigger className="w-32 border-2 border-zinc-600 sm:w-48">
              <SelectValue className="px-2" placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Living Room">Living Room</SelectItem>
              <SelectItem value="Bathroom">Bathroom</SelectItem>
              <SelectItem value="Room">Room</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="text-xs text-muted-foreground sm:text-sm">
            PRICE
          </span>
          <Select>
            <SelectTrigger className="w-32 border-2 border-zinc-600 sm:w-48">
              <SelectValue className="px-2" placeholder="Select Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Living Room">All Price</SelectItem>
              <SelectItem value="Bathroom">cheap to expensive</SelectItem>
              <SelectItem value="Room">expensive to cheap</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
            products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
