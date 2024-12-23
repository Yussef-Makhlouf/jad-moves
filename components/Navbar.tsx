'use client'

import { useState, useEffect } from 'react'
import { Truck, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Truck className={`h-10 w-10 ${scrolled ? 'text-purple-500' : 'text-white'} transition-colors duration-300`} />
            <a href="/" className={`text-2xl font-bold mr-2 ${scrolled ? 'text-purple-500' : 'text-white'} transition-colors duration-300`}>
              نقل الأثاث جاد موفز 
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#services" scrolled={scrolled}>خدماتنا</NavLink>
            <NavLink href="#about" scrolled={scrolled}>من نحن</NavLink>
            <NavLink href="#neighborhoods" scrolled={scrolled}>مناطق التغطية</NavLink>
            <NavLink href="#faq" scrolled={scrolled}>الأسئلة الشائعة</NavLink>
            <NavLink href="tel:0565265233" scrolled={scrolled}>اتصل بنا</NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-purple-500 hover:bg-purple-100' : 'text-white hover:bg-white/10'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300`}
            >
              <span className="sr-only">افتح القائمة الرئيسية</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#services">خدماتنا</MobileNavLink>
            <MobileNavLink href="#about">من نحن</MobileNavLink>
            <MobileNavLink href="#neighborhoods">مناطق التغطية</MobileNavLink>
            <MobileNavLink href="#faq">الأسئلة الشائعة</MobileNavLink>
            <MobileNavLink href="tel:0565265233">اتصل بنا</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, scrolled }) => (
  <a href={href} className={`px-3 py-2 rounded-md text-sm font-medium ${
    scrolled 
      ? 'text-gray-300 hover:text-white hover:bg-gradient-to-r from-purple-600 to-pink-600' 
      : 'text-gray-300 hover:text-white hover:bg-white/20'
  } transition-all duration-300`}>
    {children}
  </a>
)
const MobileNavLink = ({ href, children }) => (
  <a href={href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-purple-700 transition-colors duration-300">
    {children}
  </a>
)

export default Navbar

