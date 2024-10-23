import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";

const App = () => {


  const person = {
    name: 'ram',
    age: 90,
    add: {
      j: 9,
      b: {
        c: 90
      }
    }
  };

  const { name, age, add: { j, b: { c } } } = person;

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <HomePage />,
        },

      ]
    },





  ]);





  return <RouterProvider router={router} />
}
export default App