import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Home')

  const navItems = ['Home', 'About Me', 'Portfolio', 'Services']

  return (
    <div className="border-b border-[#1C1C21]">
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#070708] ">
        <div className="max-w-[1597px] mx-auto flex items-center justify-between px-4 md:px-0 pt-4 pb-4 md:pb-4 lg:pb-0 md:pt-6">
          <img src={Logo} alt="Damien" className="w-[134px]" />

          <ul className="hidden md:flex text-[#AFB0B6]">
            {navItems.map((item, index) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`border border-[#1C1C21] px-[40px] py-[30px] transition-all duration-300 cursor-pointer ${
                  index === 0 ? 'rounded-tl-[10px]' : ''
                } ${index === navItems.length - 1 ? 'rounded-tr-[10px]' : ''} ${
                  active === item
                    ? 'text-white bg-[#1C1C21]'
                    : 'hover:text-white hover:bg-[#2A2A2F]'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <button className="bg-[#1C1C21] text-[16px] text-white px-[24px] py-[16px] rounded-[10px] hover:bg-[#353538] transition">
              Contact Me
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#AFB0B6] hover:text-white transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="w-full h-0.5 bg-[#1C1C21]"></div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-[#070708] flex flex-col items-center justify-center gap-8 text-[#D9EFDE] text-[22px] font-medium transition-all duration-500 z-40 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => {
                setActive(item)
                setIsOpen(false)
              }}
              className={`relative cursor-pointer transition-all duration-300 ${
                active === item ? 'text-white' : 'hover:text-white'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-[#D9EFDE] text-[#232E26] px-[28px] py-[14px] rounded-[10px] hover:opacity-80 transition"
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Navbar
