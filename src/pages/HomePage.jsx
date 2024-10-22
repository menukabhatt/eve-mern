import axios from "axios"
import { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (err) {
    }
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="p-5">

      {data.map((post, i) => {
        return <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>

        </div>
      })}


    </div>
  )
}
export default HomePage