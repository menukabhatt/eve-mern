import { faker } from "@faker-js/faker";
import { useState } from "react"
import Button from "../components/Button";

const HomePage = () => {

  const [posts, setPosts] = useState([]);

  const addPost = () => {
    const newObj = {
      title: faker.food.dish(),
      detail: faker.food.description(),
      image: faker.image.urlPicsumPhotos(),
      id: faker.string.uuid()
    };
    console.log(newObj);
  }


  return (
    <div className="p-5">

      <Button />
      <Button />
      <Button />

      <button className="bg-red-700 text-white px-2 py-1">Remove Posts</button>



    </div>
  )
}
export default HomePage