import { NavLink, Outlet } from "react-router-dom"
import Header from "../components/Header"

const HomePage = () => {


  return (
    <div>





      <NavLink to={'/page-1'}>Page 1</NavLink>
      <NavLink to={'/page-2'}>Page 2</NavLink>

      <Outlet />






    </div>
  )
}
export default HomePage