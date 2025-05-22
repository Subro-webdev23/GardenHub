import {
    createBrowserRouter
} from "react-router";
import Root from "./Root/Root";
import Home from "./Component/OthersComponent/Home";
import ShareGardenTip from "./Page/ShareGardenTip";
import ExploreGardens from "./Page/ExploreGardens";
import MyTips from "./Page/MyTips";
import SignUp from "./Page/SignUp";
import SignIn from "./Page/SignIn";
import BrowseTips from "./Page/BrowseTips";
import NotFoundPage from "./Page/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import TipDetails from "./Page/TipDetails";
import UpdateTips from "./Page/UpdateTips";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("http://localhost:3000/events"),
                element: <Home></Home>
            },
            {
                path: "/shareGardenTip",
                element: <PrivateRoute>
                    <ShareGardenTip></ShareGardenTip>
                </PrivateRoute>
            },
            {
                path: "/browseTips",
                loader: () => fetch("http://localhost:3000/publicTips"),
                element: <BrowseTips></BrowseTips>
            },
            {
                path: "tipDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/publicTips/${params.id}`),
                element: <PrivateRoute>
                    <TipDetails></TipDetails>
                </PrivateRoute>
            },
            {
                path: "/exploreGardens",
                element: <ExploreGardens></ExploreGardens>
            },
            {
                path: "/myTips/:email",
                loader: ({ params }) => fetch(`http://localhost:3000/myTips/${params.email}`),
                element: <PrivateRoute>
                    <MyTips></MyTips>
                </PrivateRoute>
            },
            {
                path: "update/:id",
                element: <PrivateRoute>
                    <UpdateTips></UpdateTips>
                </PrivateRoute>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ]
    },
]);