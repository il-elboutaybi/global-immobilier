import { useState } from 'react';
import GlobalLogo from "../../assets/global.png";
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='max-w-screen overflow-x-hidden font-poppins'>
      <nav className='bg-[#f1f7ed] fixed sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400'>
        {/* Desktop Navigation */}
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-2 pb-2'>
          <Link to="/">
            <img src={GlobalLogo} alt="Global Immobilier Logo" className='block w-[75px] h-[75px]' />
          </Link>
          <div className='flex'>
            <ul className='sm:flex justify-center hidden'>
              <li className='cursor-pointer p-2 mr-4 hover:text-[#5cce61] text-[#08090a] hover:underline'><Link to='/'>Accueil</Link></li>
              <li className='cursor-pointer p-2 mr-4 hover:text-[#5cce61] text-[#08090a] hover:underline'><Link to='/about'>À propos</Link></li>
              <li className='cursor-pointer p-2 mr-4 hover:text-[#5cce61] text-[#08090a] hover:underline'><Link to='/services'>Services</Link></li>
              <li className='cursor-pointer p-2 mr-4 hover:text-[#5cce61] text-[#08090a] hover:underline'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
          <button className='sm:hidden block' onClick={() => setOpen(!open)}>
            <GiHamburgerMenu size={30} className='text-[#3d925a]/70 mt-2 mr-2' />
          </button>
        </div>

        <div className={`${open ? '' : 'hidden'} h-[15rem]`}>
          <ul>
            <li className='hover:text-[#5cce61] text-[#08090a] hover:underline font-semibold pl-8 pb-4 pt-6'><Link to="/">Acceuil</Link></li>
            <li className='hover:text-[#5cce61] text-[#08090a] hover:underline font-semibold pl-8 pb-4'><Link to="/about">À propos</Link></li>
            <li className='hover:text-[#5cce61] text-[#08090a] hover:underline font-semibold pl-8 pb-4'><Link to="/services">Services</Link></li>
            <li className='hover:text-[#5cce61] text-[#08090a] hover:underline font-semibold pl-8 pb-4'><Link to="/contact">Contact</Link></li>
          </ul>
          {/* CopyRight for Mobile */}
          <div className='bg-gray-900/50 h-[2px] w-[85%] ml-4'></div>
          <div className='flex justify-center mt-2 text-sm text-[#08090a]/80'>
            <p>© Global Immobilier {new Date().getFullYear()}</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
