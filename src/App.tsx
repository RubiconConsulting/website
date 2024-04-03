import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { HomePg } from "./pages";

const App = () => {

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