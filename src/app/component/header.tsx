"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/#product' },
    { name: 'Compare', href: '/feature-comparison' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <Image
                src="/2.png?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">Your Company</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <SignedOut>
              <Button variant="outline" className="bg-white hover:bg-gray-50">
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              {item.name}
            </Link>
          ))}
          <div className="mt-4 space-y-2">
            <SignedOut>
              <Button variant="outline" className="w-full bg-white hover:bg-gray-50">
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-center">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
            <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}