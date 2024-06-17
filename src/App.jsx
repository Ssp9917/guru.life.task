
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ],
    },
  ]);

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
