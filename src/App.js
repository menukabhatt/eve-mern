import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./ui/RootLayout";

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

      ]
    }
  ]);

  return (
    <div>





    </div>
  )
}
export default App