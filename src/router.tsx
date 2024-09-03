import { createBrowserRouter, Navigate } from "react-router-dom";
// import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./components/App";
import { Home, About, Contact, Dashboard, Stats, Settings, NotFound } from "./components";
import { Account } from "./components/Account";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "account",
            element: (
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "old-home",
        element: <Navigate to="/" />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
