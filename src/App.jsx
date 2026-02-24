import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Products from './pages/Products/Products.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import ProDetails from './pages/ProDetails/ProDetails.jsx'
import Contact from './pages/Contact/Contact.jsx'
import TestImage from './pages/TestImage.jsx'

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <><ScrollToTop /><Home /></> },
          { path: "about", element: <><ScrollToTop /><About /></> },
          { path: "products", element: <><ScrollToTop /><Products /></> },
          { path: "contact", element: <><ScrollToTop /><Contact /></> },
          { path: "products/proDetails/:id", element: <><ScrollToTop /><ProDetails /></> },
          { path: "products/:category", element: <><ScrollToTop /><Products /></> },
          { path: "*", element: <><ScrollToTop /><NotFound /></> },
          { path: "test", element: <><ScrollToTop /><TestImage /></> },
        ],
      },
    ],
    { basename: import.meta.env.BASE_URL }
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
