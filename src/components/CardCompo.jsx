import { IconButton } from "@material-tailwind/react"
import { ShowDialog } from "./ShowDialog"


const CardCompo = ({ user, index }) => {
  return (
    <div className="">

      <h1>{user.username}</h1>
      <p>{user.email}</p>

      <div className="space-x-2 mt-6">
        <IconButton size="sm">
          <i className="fas fa-edit" />
        </IconButton>

        <ShowDialog index={index} />
      </div>

    </div>
  )
}
export default CardCompo