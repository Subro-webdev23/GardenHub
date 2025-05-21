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
                path: "/shareGardenTip",
                element: <ShareGardenTip></ShareGardenTip>
            },
            {
                path: "/exploreGardens",
                element: <ExploreGardens></ExploreGardens>
            },
            {
                path: "/myTips",
                element: <MyTips></MyTips>
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