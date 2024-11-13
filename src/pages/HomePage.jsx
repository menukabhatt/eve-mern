import { useSelector } from "react-redux"
import CardCompo from "../components/CardCompo";


const HomePage = () => {

  const { users } = useSelector((state) => state.userSlice);



  return (
    <div className="p-4">


      {users.map((user) => {
        return <CardCompo key={user.id} user={user} />;
      })}








    </div >
  )
}
export default HomePage