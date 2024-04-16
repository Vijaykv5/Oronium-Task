
import logo from '../assets/Oronium-logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex  border border-b-1 '>
      <Image src={logo} alt='Oronium Logo' width={120} height={20} />
      <p className='p-12 text-2xl'>Oronium E-Commerce Store</p>
    </div>
  );
}

export default Navbar