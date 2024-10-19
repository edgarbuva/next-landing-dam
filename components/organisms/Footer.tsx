import React from 'react'
import NavItem from '@/components/molecules/NavItem'

const footerItems = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
]

const Footer: React.FC = () => (
  <footer className="bg-gray-100 mt-12">
    <div className="container mx-auto px-4 py-8">
      <nav>
        <ul className="flex justify-center space-x-4">
          {footerItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </ul>
      </nav>
      <p className="text-center mt-4">© 2023 FRASH. All rights reserved.</p>
    </div>
  </footer>
)

export default Footer