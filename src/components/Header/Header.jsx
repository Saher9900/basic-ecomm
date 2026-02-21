import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return(
    <nav className='bg-gray-900 text-white px-6 py-4'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* logo */}
        <div className="text-xl font-bold">MyLogo</div>
        {/* links */}
        <div className='space-x-6 hidden md:flex'>
          <Link to='/' className='hover:text-gray-300 transition'>Home</Link>
          <Link to='/about' className='hover:text-gray-300 transition'>About</Link>
          <Link to='/products' className='hover:text-gray-300 transition'>Products</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header;