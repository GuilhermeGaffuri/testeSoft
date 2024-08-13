import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
