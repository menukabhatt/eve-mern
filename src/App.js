import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import AddForm from "./pages/AddForm";


const App = () => {




  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [

        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'add-form',
          element: <AddForm />,
        },


      ]
    },





  ]);





  return <RouterProvider router={router} />
}
export default App