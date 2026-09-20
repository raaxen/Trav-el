import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="m-auto mt-4 min-h-16 md:w-[70%] rounded-[50px] bg-blue-700 flex flex-row justify-around items-center shadow-lg shadow-black/50 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/50 px-6">

            <h1 className="text-white text-2xl font-bold">
                Nekena      
            </h1>

            <div>
                <a href="#home" className="text-white">Home</a>
                <a href="#about" className="text-white ml-4">About</a>
                <a href="#projects" className="text-white ml-4">Projects</a>
                <a href="#contact" className="text-white ml-4">Contact</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar