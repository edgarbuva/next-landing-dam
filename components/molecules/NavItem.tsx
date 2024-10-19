import React from 'react'
import Link from 'next/link'

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => (
  <li>
    <Link href={href} className="hover:text-gray-600 transition-colors">
      {label}
    </Link>
  </li>
)

export default NavItem