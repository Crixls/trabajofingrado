import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorCommercePage from "../pages/ErrorCommercePage";
import RootMovieLayout from "../pages/RootMovieLayout";
import Home from "../pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootMovieLayout />,
      errorElement: <ErrorCommercePage />,

      children: [
        { index: true, element: <Home /> },
        // { path: "peliculas", element: <Products /> },
      ],
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App
