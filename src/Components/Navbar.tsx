import { useState } from 'react'
import { Navlinks, buttons } from '../data/nav.ts'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative mx-auto flex w-[90%] items-center lg:justify-around justify-between bg-black px-4 py-4 lg:bg-black rounded-4xl mt-4">
      <h1 className="text-2xl font-bold text-white">Madagascar</h1>

      <div className="hidden items-center gap-6 lg:flex">
        {Navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="border-transparent text-lg text-white transition-[border] duration-300 hover:border-b-2 hover:border-white"
          >
            {link.name}
          </a>
        ))}
      </div>

        {buttons.map((button) => (
          <a key={button.name} href={button.href} className="text-white hidden lg:flex">
            {button.name}
          </a>
        ))}

      <button
        type="button"
        className="flex flex-col gap-1.5 p-2 lg:hidden"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((menuOpen) => !menuOpen)}
      >
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
      </button>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:hidden"
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-black/20 backdrop-blur-sm"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="relative z-10 flex w-full max-w-sm flex-col gap-5 rounded-xl bg-black p-6 shadow-xl"
          >
            <button
              type="button"
              className="self-end items-center justify-center text-sm text-white transition-colors bg-transparent hover:bg-white hover:text-black font-bold border border-white flex p-2 px-3.5 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              X
            </button>
            {Navlinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar