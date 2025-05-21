import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import GardenersList from "../Components/GardenersList/GardenersList";
import BrowseTips from "../Components/BrowseTips/BrowseTips";
import ShareGardenTip from "../Components/ShareGardenTip/ShareGardenTip";
import MyTips from "../Components/MyTips/MyTips";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/LogIn/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TopTrendingTips from "../Components/TopTrendingTips/TopTrendingTips";
import TipDetails from "../Components/TipDetails/TipDetails";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: RootLayout,

    children: [
      {
        index: true,
        loader: async () => {
          const [gardeningRes, tipsRes] = await Promise.all([
            fetch("http://localhost:3000/gardening"),
            fetch("http://localhost:3000/top-trending-tips"),
          ]);
          const gardeningData = await gardeningRes.json();
          const topTrendingTips = await tipsRes.json();
          return { gardeningData, topTrendingTips };
        },
        Component: Home,
        hydrateFallbackElement: <p> Loading..........</p>,
      },
      {
        path: "/gardenersList",
        Component: GardenersList,
        loader: () => fetch("http://localhost:3000/gardening"),
      },
      {
        path: "/browseTips",
        loader: () => fetch("http://localhost:3000/share-garden-tip"),
        Component: BrowseTips,
      },
      {
        path: "/shareGardenTip",
        element: (
          <PrivateRoute>
            <ShareGardenTip></ShareGardenTip>
          </PrivateRoute>
        ),
      },
      {
        path: "/myTips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/tip-details/:id",
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
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
