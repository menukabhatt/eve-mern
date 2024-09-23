import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";

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
          path: 'about-page',
          element: <About />,
        },

        {
          path: 'contact-page',
          element: <Contact />,
        },
      ]
    },



    // {
    //   path: '*',
    //   element: <NotFound />

    // },

  ]);





  return <RouterProvider router={router} />
}
export default App