import Link from "next/link";
import { IoMenu } from "react-icons/io5";
type navType = {
  title : string;
  href : string
}
const navbar : navType[] = [
  {title : "Home", href : "/"},
  {title : "About", href : "#About"},
  {title : "Skills", href : "#Skills"},
  {title : "Projects", href : "#Projects"},
  {title : "Contact", href : "#Contact"},
]
const Navbar = () => {
  return (
    <header className='fixed z-20 lg:px-20 sm:px-10 px-5 h-16 w-full border-b  border-black flex items-center justify-between bg-[#eafefe]'>
        <h1 className='md:text-2xl text-xl font-bold'>Rizfan</h1>
        <ul className='h-full sm:flex md:gap-10 sm:gap-6 gap-4 hidden'>
            {navbar.map((item, i) => (
                <li key={i} className=' cursor-pointer capitalize opacity-80 md:text-xl text-lg flex items-center justify-center'>
                  <Link href={item.href}>{item.title}</Link>
                </li>
            ))}
        </ul>
        <IoMenu className="sm:hidden text-2xl cursor-pointer" />
       
    </header>
  )
}

export default Navbar
