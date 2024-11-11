import { useSelector } from "react-redux"

const HomePage = () => {

  const { users } = useSelector((state) => state.userSlice);
  console.log(users);
  return (
    <div>


    </div>
  )
}
export default HomePage