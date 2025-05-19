import {
    createBrowserRouter
} from "react-router";
import Root from "./Root/Root";
import Home from "./Component/OthersComponent/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>
            },
            {

            }
        ]
    },
]);