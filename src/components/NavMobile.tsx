import { Menu } from 'lucide-react'

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
          Menu
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          Shop
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          Product
        </DropdownMenuLabel>
        <DropdownMenuLabel className="border-b-2 border-zinc-400">
          Contact Us
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavMobile
