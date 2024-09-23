import { Link, NavLink } from "react-router-dom"

const Header = () => {


  return (
    <div className="bg-black text-white flex items-end justify-between px-3 py-2 ">

      <h1 className="text-2xl">Demo</h1>

      <nav className="space-x-4">


        <NavLink className={(e) => e.isActive ? 'text-red-600' : null} to={'/about-page'}>About</NavLink>

        <Link className="" to={'/contact-page'} >Contact</Link>


      </nav>



    </div>
  )
}
export default Header