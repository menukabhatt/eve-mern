import { useState } from "react"


const HomePage = () => {



  const [count, setCount] = useState(0);


  const handleClick = () => {
    setCount((prev) => prev + 1);
  }




  return (
    <div>
      <h1>{count}{count % 2 === 0 ? 'even' : 'odd'}</h1>
      <button onClick={handleClick}>Click Me</button>


    </div>
  )
}
export default HomePage