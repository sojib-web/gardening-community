import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import GardenersList from "../Components/GardenersList/GardenersList";
import BrowseTips from "../Components/BrowseTips/BrowseTips";
import ShareGardenTip from "../Components/ShareGardenTip/ShareGardenTip";
import MyTips from "../Components/MyTips/MyTips";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/LogIn/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <p> Loading..........</p>,
      },
      {
        path: "/gardenersList",
        Component: GardenersList,
      },
      {
        path: "/browseTips",
        Component: BrowseTips,
      },
      {
        path: "/shareGardenTip",
        Component: ShareGardenTip,
      },
      {
        path: "/myTips",
        Component: MyTips,
      },

      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "login",
        Component: Login,
      },
    ],
  },
]);
