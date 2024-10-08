import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./components/App";
import {
  Home,
  About,
  Contact,
  Dashboard,
  Stats,
  Settings,
  NotFound,
  UserProfile,
  Layout,
  SignUp,
  SignupStep1,
  SignupStep2,
  SignupStep3,
} from "./components";
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
        path: "layout",
        element: <Layout />,
      },
      {
        path: "user/:id",
        element: <UserProfile />,
      },
      {
        path: "signup",
        element: <SignUp />,
        children: [
          { index: true, element: <Navigate to="step1" replace /> },
          { path: "step1", element: <SignupStep1 /> },
          { path: "step2", element: <SignupStep2 /> },
          { path: "step3", element: <SignupStep3 /> },
        ],
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "old-home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
