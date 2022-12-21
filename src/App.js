import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import All from "./Components/All/All";
import Pc from "./Components/Platforms/Pc";
import Browser from "./Components/Platforms/Browser";
import Alphabetical from "./Components/Sort-by/Alphabetical";
import Popularity from "./Components/Sort-by/Popularity";
import ReleaseDate from "./Components/Sort-by/ReleaseDate";
import Relevance from "./Components/Sort-by/Relevance";
import Action from "./Components/Categories/Action";
import ActionRpg from "./Components/Categories/ActionRpg";
import BattleRoyale from "./Components/Categories/BattleRoyale";
import Fantasy from "./Components/Categories/Fantasy";
import Flight from "./Components/Categories/Flight";
import OpenWorld from "./Components/Categories/OpenWorld";
import Racing from "./Components/Categories/Racing";
import Shooter from "./Components/Categories/Shooter";
import Social from "./Components/Categories/Social";
import Sports from "./Components/Categories/Sports";
import Zombie from "./Components/Categories/Zombie";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ItemDetails from "./Components/ItemDetails/ItemDetails";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

function App() {
  const [userData, setUserData] = useState();

  function saveUserData() {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  const routers = createHashRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        {
          index: true,
          element: (
            <Home />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "all",
          element: (
            <All />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "pc",
          element: (
            <Pc />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "browser",
          element: (
            <Browser />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "releaseDate",
          element: (
            <ReleaseDate />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "popularity",
          element: (
            <Popularity />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "alphabetical",
          element: (
            <Alphabetical />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "relevance",
          element: (
            <Relevance />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "action",
          element: (
            <Action />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "actionRpg",
          element: (
            <ActionRpg />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "battleRoyale",
          element: (
            <BattleRoyale />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "fantasy",
          element: (
            <Fantasy />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "flight",
          element: (
            <Flight />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "openWorld",
          element: (
            <OpenWorld />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "racing",
          element: (
            <Racing />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "shooter",
          element: (
            <Shooter />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "social",
          element: (
            <Social />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "sports",
          element: (
            <Sports />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "zombie",
          element: (
            <Zombie />
            // <ProtectedRoute>
            // </ProtectedRoute>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "itemDetails/:id", element: <ItemDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
