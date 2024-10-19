import React from 'react'
import NavItem from '@/components/molecules/NavItem'
import Button from '@/components/atoms/Button'

const navItems = [
  { href: '/new', label: 'NEW' },
  { href: '/women', label: 'WOMEN' },
  { href: '/men', label: 'MEN' },
  { href: '/collection', label: 'COLLECTION' },
  { href: '/trends', label: 'TRENDS' },
]

const Header: React.FC = () => (
  <header className="bg-white shadow-sm">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">FRASH</div>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
      <Button>LOGIN</Button>
    </nav>
  </header>
)

export default Header