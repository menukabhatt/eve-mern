import { Link, NavLink } from "react-router-dom"

const Header = () => {

  const per = {
    name: 'ram'
  };
  return (
    <div className="bg-black text-white">

      <h1>Logo</h1>

      <nav className="space-x-4">


        <NavLink className={(e) => e.isActive ? 'text-red-600' : null} to={'/about-page'}>About</NavLink>

        <Link className="" to={'/contact-page'} >Contact</Link>


      </nav>



    </div>
  )
}
export default Header