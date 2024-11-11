import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import AddForm from "./pages/AddForm";


const App = () => {


  // const mi = [11, 22, 44, 55, 66];

  // mi.splice(2, 1);

  // console.log(mi);

  // const mi = [{ id: 1, label: 'hello' }, { id: 2, label: 'sello' }];


  // const m = mi.map((a, b) => {
  //   return a.id === 1 ? { label: 'jello' } : a;
  // })

  // console.log(m);


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