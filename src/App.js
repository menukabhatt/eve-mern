import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./ui/RootLayout";
import ProductList from "./features/product/ProductList";
import Login from "./features/auth/Login";

const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <ProductList />
        },
        {
          path: '/login',
          element: <Login />
        }

      ]
    }
  ]);

  return (
    <div>





    </div>
  )
}
export default App