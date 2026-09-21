import { Navlinks,buttons } from '../data/nav.ts'
const Navbar = () => {
  return (
    <>
        <nav className=" flex left-1/2 -translate-x-1/2  mt-4 min-h-16 w-[90%] md:w-[70%] rounded-[50px] bg-blue-900 t-0 absolute flex-row justify-around items-center shadow-lg shadow-black/50 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-900/50 px-6">

            <h1 className="text-white text-2xl font-bold">
                Nekena      
            </h1>

            <div>
                {Navlinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-white text-lg ml-4 border-transparent transition-[border] duration-300 hover:border-b-2 hover:border-white"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
                {buttons.map((buttons) => (
                    <a key={buttons.name} href={buttons.href} className="ml-4 flex h-10 w-[120px] items-center justify-center rounded-[50px] bg-blue-800 text-lg font-bold text-white transition-colors duration-100 hover:bg-blue-500 hover:text-white">
                        {buttons.name}
                    </a>
                ))}
        </nav>
    </>
  )
}

export default Navbar