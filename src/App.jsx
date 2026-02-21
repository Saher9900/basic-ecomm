import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Products from './pages/Products/Products.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import ProDetails from './pages/ProDetails/ProDetails.jsx'


function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "products", element: <Products /> },
          { path: "products/:category", element: <Products /> },
          { path: "*", element: <NotFound /> },
          {path: "products/proDetails/:id", element: <ProDetails />},
        ],
      },
    ],
    { basename: import.meta.env.DEV ? "/" : import.meta.env.BASE_URL }
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
