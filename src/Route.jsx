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
import { Suspense } from "react";
import { HiH2 } from "react-icons/hi2";
import DashboardOverview from "./Page/DashboardOverview";
import DashboardLayout from "./LayOut/DashboardLayout";
import AllItems from "./Component/OthersComponent/AllItems";
import MyItems from "./Component/OthersComponent/MyItems";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                index: true,
                path: "/",
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
                element: <BrowseTips></BrowseTips>

            },
            {
                path: "tipDetails/:id",
                loader: ({ params }) => fetch(`https://assignment-10-server-seven-topaz.vercel.app/publicTips/${params.id}`),
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
                loader: ({ params }) => fetch(`https://assignment-10-server-seven-topaz.vercel.app/myTips/${params.email}`),
                element: <PrivateRoute>
                    <MyTips></MyTips>
                </PrivateRoute>
            },
            {
                path: "update/:id",
                loader: ({ params }) => fetch(`https://assignment-10-server-seven-topaz.vercel.app/update/${params.id}`),
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
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            { index: true, element: <DashboardOverview /> },
            { path: 'all-items', element: <AllItems /> },
            { path: 'my-items', element: <MyItems /> },
            { path: 'add-item', element: <ShareGardenTip></ShareGardenTip> }
        ]
    }
]);