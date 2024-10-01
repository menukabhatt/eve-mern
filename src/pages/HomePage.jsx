import { faker, ne } from "@faker-js/faker";
import { useState } from "react"
import Button from "../components/Button";

const HomePage = () => {

  const [posts, setPosts] = useState([]);

  // const sd = ['ram', 'shyam'];
  // console.log([...sd, 'lio']);

  const addPost = () => {
    const newObj = {
      title: faker.food.dish(),
      detail: faker.food.description(),
      image: faker.image.urlPicsumPhotos(),
      id: faker.string.uuid()
    };
    setPosts((prev) => [...prev, newObj]);
  }

  console.log(posts);

  return (
    <div className="p-5">

      <button onClick={addPost}>Click To</button>

      {/* <Button  label={'Add Posts'} color={'bg-green-700'} /> */}




    </div>
  )
}
export default HomePage