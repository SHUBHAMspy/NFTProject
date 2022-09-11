import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";



const NavItem = ({title,classprops}) => {
  return <li className= {`mx-4 cursor-pointer text-white ${classprops}`}>{title}</li>

}
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 ">
      <div className='md:text-xl lg:text-2xl font-black text-white md:flex-[0.5] flex-initial justify-center items-center'>
        <Link href="/">
          <a >
            Cryptran
          </a>
        </Link> 
			</div>
      <ul className= "flex-row justify-between items-center md:flex hidden list-none">

        {["Market", "Exchange", "Transactions", "Wallets"].map((item,index) => (
          <NavItem key={item + index} title={item}/>
        ))}

        <li className="cursor-pointer bg-[#00ffc4] rounded-md sm:py-3  ml-28 text-sm font-medium px-8 py-2  bg-primary shadow-lg hover:scale-90 transition duration-200 hover:shadow-primary ">
          Login
        </li>
      </ul>

      
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism transition duration-500 animate-slide-in "
          >
            <li className="text-xl w-full my-2"><AiOutlineClose className="cursor-pointer" onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Transactions", "Wallets"].map(
              (item, index) => <NavItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}

            <li className="cursor-pointer bg-[#00ffc4] rounded-md sm:py-3 md:mx-0 ml-2 text-sm font-medium px-8 py-2  bg-primary shadow-lg hover:scale-90 transition duration-200 hover:shadow-primary">
              Login
            </li>

          </ul>
      )}

      </div>
    </nav>
  )
}

export default Navbar