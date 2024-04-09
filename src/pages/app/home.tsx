import ProductItem from '@/components/ProductItem'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Home = () => {
  const products = [
    {
      id: 1,
      isNew: true,
      isSale: true,
      name: 'Loveseat Sofa',
      price: 400.99,
      oldPrice: 1050,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuEHVjr6m9IxU2hh1YjWOelaKeRtdiZlyANqIHgKpsKVio_u5u_-WJuEtPNQ2HQ9gNcoA&usqp=CAU',
      discountValue: 30,
      stars: 4,
      color: 'Orange',
    },
    {
      id: 2,
      isNew: false,
      isSale: true,
      name: 'Tray Table',
      price: 100,
      oldPrice: 150,
      imgUrl:
        'https://target.scene7.com/is/image/Target/GUEST_963a68ac-7c78-4f1b-9d3e-f18d86ebe604?wid=488&hei=488&fmt=pjpeg',
      discountValue: 30,
      stars: 5,
    },
    {
      id: 3,
      isNew: true,
      isSale: false,
      name: 'Tray Table',
      price: 100,
      imgUrl:
        'https://target.scene7.com/is/image/Target/GUEST_963a68ac-7c78-4f1b-9d3e-f18d86ebe604?wid=488&hei=488&fmt=pjpeg',
    },
    {
      id: 4,
      isNew: false,
      isSale: false,
      name: 'Tray Table',
      price: 100,
      imgUrl:
        'https://target.scene7.com/is/image/Target/GUEST_963a68ac-7c78-4f1b-9d3e-f18d86ebe604?wid=488&hei=488&fmt=pjpeg',
      discountValue: 30,
      stars: 3,
    },
  ]

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
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 md:px-4 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
