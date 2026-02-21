import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// import components

import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Products from './pages/Products/Products.jsx'

function App() {

  const  router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: "about", element: <About />},
      {path: "products", element: <Products />}
    ]
  }])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
