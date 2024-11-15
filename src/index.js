import React from "react";
import "./assets/css/index.css";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import ChatsRoute from "./routes/ChatsRoute";
import ChannelRoute from "./routes/ChannelRoute";
import RecentlyDeletedRoute from "./routes/RecentlyDeletedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ChatsRoute />
      },
      {
        path: "/chats",
        element: <ChatsRoute />
      },
      {
        path: "/channels",
        element: <ChannelRoute />
      },
      {
        path: "/recently-deleted",
        element: <RecentlyDeletedRoute />
      }
    ]
  }
],
  {
    future: {
      // To disable warnings by react router
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
