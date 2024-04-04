import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { HomePg } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const App = () => {

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  const router = createBrowserRouter([{path: "*", Component: Root}])

  function Root() {
    return(
      <div>
        <Routes>
          <Route path="/" element={<HomePg />} />
        </Routes>
      </div>
    )
  }
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App