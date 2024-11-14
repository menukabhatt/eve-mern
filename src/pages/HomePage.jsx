import { useSelector } from "react-redux"
import CardCompo from "../components/CardCompo";


const HomePage = () => {

  const { users } = useSelector((state) => state.userSlice);



  return (
    <div className="p-4">


      {users.map((user, index) => {
        return <CardCompo index={index} key={user.id} user={user} />;
      })}








    </div >
  )
}
export default HomePage