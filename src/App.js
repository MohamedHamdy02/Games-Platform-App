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
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "all",
          element: (
            <ProtectedRoute>
              <All />
            </ProtectedRoute>
          ),
        },
        {
          path: "pc",
          element: (
            <ProtectedRoute>
              <Pc />
            </ProtectedRoute>
          ),
        },
        {
          path: "browser",
          element: (
            <ProtectedRoute>
              <Browser />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "releaseDate",
          element: (
            <ProtectedRoute>
              <ReleaseDate />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "popularity",
          element: (
            <ProtectedRoute>
              <Popularity />
            </ProtectedRoute>
          ),
        },
        {
          path: "alphabetical",
          element: (
            <ProtectedRoute>
              <Alphabetical />
            </ProtectedRoute>
          ),
        },
        {
          path: "relevance",
          element: (
            <ProtectedRoute>
              <Relevance />
            </ProtectedRoute>
          ),
        },
        {
          path: "action",
          element: (
            <ProtectedRoute>
              <Action />
            </ProtectedRoute>
          ),
        },
        {
          path: "actionRpg",
          element: (
            <ProtectedRoute>
              <ActionRpg />
            </ProtectedRoute>
          ),
        },
        {
          path: "battleRoyale",
          element: (
            <ProtectedRoute>
              <BattleRoyale />
            </ProtectedRoute>
          ),
        },
        {
          path: "fantasy",
          element: (
            <ProtectedRoute>
              <Fantasy />
            </ProtectedRoute>
          ),
        },
        {
          path: "flight",
          element: (
            <ProtectedRoute>
              <Flight />
            </ProtectedRoute>
          ),
        },
        {
          path: "openWorld",
          element: (
            <ProtectedRoute>
              <OpenWorld />
            </ProtectedRoute>
          ),
        },
        {
          path: "racing",
          element: (
            <ProtectedRoute>
              <Racing />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "shooter",
          element: (
            <ProtectedRoute>
              <Shooter />
            </ProtectedRoute>
          ),
        },
        {
          path: "social",
          element: (
            <ProtectedRoute>
              <Social />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "sports",
          element: (
            <ProtectedRoute>
              <Sports />
            </ProtectedRoute>
          ),
        },
        {
          path: "zombie",
          element: (
            <ProtectedRoute>
              <Zombie />
            </ProtectedRoute>
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
