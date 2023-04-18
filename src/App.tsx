import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Acknowledgement from "./views/Acknowledgement";
import ErrorPage from "./views/ErrorPage";
import NotFound from "./views/NotFound";
import "./App.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/acknowledgement",
        element: <Acknowledgement />
    },
    {
        path: "/error",
        element: <ErrorPage />,
        index: false,
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
