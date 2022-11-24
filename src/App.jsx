import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";
import CountryDetail from "./pages/CountryDetail";
import "./sass/_main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import { loaderDetail, loaderHome } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: loaderHome,
  },
  {
    path: "/:name",
    element: <CountryDetail />,
    loader: loaderDetail,
    errorElement: <div>Error 404</div>,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
