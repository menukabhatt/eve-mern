import { useSelector } from "react-redux"

const HomePage = () => {

  const { users } = useSelector((state) => state.userSlice);



  return (
    <div className="p-4">








    </div >
  )
}
export default HomePage