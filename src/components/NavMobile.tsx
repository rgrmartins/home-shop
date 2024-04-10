import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const NavMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-4">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col items-center justify-center p-1">
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          <Link to="/">Home</Link>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          <Link to="">Shop</Link>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          <Link to="">Product</Link>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          <Link to="">Contact Us</Link>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          <Link to="/admin/new-product">New Product</Link>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavMobile
