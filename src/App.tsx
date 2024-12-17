import { createBrowserRouter } from "react-router-dom"
import { Home } from "./Pages/home"
import { Cart } from "./Pages/cart"
import { Layout } from "./components/layout"
import { Error } from "./Pages/err"
import { Description } from "./Pages/descrition"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/productDetail/:id",
        element:<Description/>
      },
      {
        path:"*",
        element:<Error/>
      }
    ]
  }

])

export { router };