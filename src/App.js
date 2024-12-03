import { createBrowserRouter } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <ProductList />
        }

      ]
    }
  ])
  return (
    <div>





    </div>
  )
}
export default App