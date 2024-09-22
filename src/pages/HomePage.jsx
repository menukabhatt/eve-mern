import { posts } from "../data/data"

const HomePage = () => {


  return (
    <div>


      {posts.map((post) => {

        return <div key={post.id} className="shadow-2xl text-red-900 p-4 space-y-2">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>

      })}



    </div>
  )
}
export default HomePage