// @ts-nocheck
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
import UpdateTip from "../Components/UpdateTip/UpdateTip";
import NotFound from "../Components/NotFound/NotFound";
import Loader from "../Components/Loader/Loader";
import GardenerDetails from "../Components/FeaturedGardeners/GardenerDetails";

import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Overview from "../DashboardLayout/Overview";
import AllItems from "../DashboardLayout/AllItems";
import AddItem from "../DashboardLayout/AddItem";
import MyItems from "../DashboardLayout/MyItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound />,
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
        hydrateFallbackElement: <Loader />,
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
        hydrateFallbackElement: Loader,
      },
      {
        path: "/shareGardenTip",
        element: (
          <PrivateRoute>
            <ShareGardenTip />
          </PrivateRoute>
        ),
      },
      {
        path: "/myTips",
        loader: () => fetch("http://localhost:3000/share-garden-tip"),
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/tip-details/:id",
        element: (
          <PrivateRoute>
            <TipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tip/:id",
        element: (
          <PrivateRoute>
            <UpdateTip />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/share-garden-tip/${params.id}`),
      },
      {
        path: "/campaign/:id",
        Component: GardenerDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/gardening/${params.id}`),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
        loader: async () => {
          const [tipsRes, itemsRes] = await Promise.all([
            fetch("http://localhost:3000/share-garden-tip"),
            fetch("http://localhost:3000/gardening"),
          ]);

          const tips = await tipsRes.json();
          const items = await itemsRes.json();

          return { tips, items };
        },
      },
      {
        path: "all-items",
        element: <AllItems />,
        loader: () => fetch("http://localhost:3000/share-garden-tip"),
        hydrateFallbackElement: Loader,
      },
      {
        path: "add-item",
        element: <AddItem />,
      },
      {
        path: "my-items",
        element: <MyItems />,
        loader: () => fetch("http://localhost:3000/share-garden-tip"),
      },
    ],
  },
]);
