import { useState } from 'react'

export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const hideMenu = () => {
        setShowMenu(false);
    }

    const handleScrollIntoView = (section) => {
        hideMenu();
        let viewSection = document.querySelector(section);

        viewSection.scrollIntoView();
    }


  return (
    <header className='bg-slate-900 text-white fixed top-0 w-screen z-50'>
        <div className='flex justify-between sm:flex-row flex-row-reverse md:px-14 px-8'>
            <span id='header-logo' className='py-4 uppercase font-semibold nova-font text-xl tracking-wider cursor-pointer gradient-text'>Mohit</span>
            <nav className={`sm:relative sm:h-full absolute h-screen top-0 left-0 sm:bg-transparent bg-slate-700 sm:w-max w-screen sm:inline-block flex items-center justify-center sm:justify-between sm:translate-x-0 ${!showMenu && "-translate-x-full"} transition-all duration-300`}>
                <ul className='flex gap-10 py-4 sm:flex-row flex-col justify-center items-center sm:w-max w-11/12 text-[#15c1fa]'>
                    <li>
                        <button className="h-full" onClick={() => handleScrollIntoView("#hero-section")}>Home</button>
                    </li>
                    <li>
                        <button className="h-full"  onClick={() => handleScrollIntoView("#about-section")}>About</button>
                    </li>
                    <li>
                        <button className="h-full"  onClick={() => handleScrollIntoView("#contact-section")}>Contact</button>
                    </li>
                    <li>
                        <button className="h-full"  onClick={() => handleScrollIntoView("#projects-section-wrapper")}>Projects</button>
                    </li>
                </ul>

                <button className='sm:hidden absolute top-6 right-6 text-2xl' onClick={hideMenu}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
            </nav>

            <button className='sm:hidden' onClick={() => setShowMenu(true)}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>

    </header>
  )
}
