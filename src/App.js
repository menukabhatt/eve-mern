import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import ItemList from "./pages/ItemList";
import DetailPage from "./pages/DetailPage";

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
          path: 'category-items/:label',
          element: <ItemList />,
        },
        {
          path: 'detail/:id',
          element: <DetailPage />,
        },

      ]
    },





  ]);





  return <RouterProvider router={router} />
}
export default App