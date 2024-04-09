import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import CartMenu from '@/components/CartMenu'
import EmailInput from '@/components/EmailInput'
import NavMobile from '@/components/NavMobile'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import Newsletter from '../../assets/newsletter.png'
import Slide from '../../assets/slide.png'

const AppLayout = () => {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between">
      <div>
        <div className="my-10 hidden w-full items-center justify-center md:flex">
          <nav className="flex items-center justify-center gap-12">
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">Product</a>
            <a href="">Contact Us</a>
          </nav>
        </div>

        <div className="md:hidden">
          <NavMobile />
        </div>

        <div className="flex flex-col items-center justify-center md:px-16">
          <img className="flex max-h-96" src={Slide} alt="slide" />
          <div className="absolute flex flex-col items-center justify-center gap-2 md:gap-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-muted-foreground">
                    Home
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Shop</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <span className="relative text-xl md:text-5xl">Catalog Page</span>
            <span className="relative text-sm md:text-base">
              Let&apos;s design the place you always imagined.
            </span>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-4 flex items-center justify-center gap-2 md:right-16 md:top-10 lg:right-28">
        <CartMenu />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <div className="flex flex-col items-center justify-center border-t border-zinc-900">
          <img
            className="flex max-h-96 min-h-36 w-full"
            src={Newsletter}
            alt="newsletter"
          />
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-base font-semibold md:text-4xl">
              Join Our Newsletter
            </span>
            <span className="text-xs md:text-base">
              Sign up for deals, new products and promotions
            </span>
            <div>
              <EmailInput />
            </div>
          </div>
        </div>
        <footer className="flex w-full flex-col items-center justify-center bg-zinc-900 p-6 md:px-48 md:py-8">
          <div className="mb-6 flex w-full max-w-7xl items-center justify-between text-sm text-white md:mb-12">
            <span className="border-l pl-2">Gift & Decoration Store</span>
            <div className="flex flex-col gap-2 md:flex-row md:gap-10">
              <a href="">Home</a>
              <a href="">Shop</a>
              <a href="">Product</a>
              <a href="">Contact Us</a>
            </div>
          </div>
          <div className="flex w-full max-w-7xl items-center justify-between gap-2 border-t py-8 md:pt-4">
            <div className="flex gap-2 text-white md:gap-5">
              <span className="text-xs">
                Copyright &copy; {new Date().getFullYear()} Gift &amp;
                Decoration Store. All rights reserved
              </span>
              <a href="" className="text-xs font-semibold">
                Privacy Policy
              </a>
              <a href="" className="text-xs font-semibold">
                Terms of Use
              </a>
            </div>

            <div className="flex flex-col gap-2 text-white md:flex-row">
              <Instagram />
              <Facebook />
              <Youtube />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
