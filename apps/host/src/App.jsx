import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/app1",
        lazy: () => import("./App1"),
        children: [
          {
            path: "",
            lazy: () => import("./App1"),
          },
          {
            path: "page1",
            lazy: () => import("./App1"),
          },
          {
            path: "page2",
            lazy: () => import("./App1"),
          },
          {
            path: "page3",
            lazy: () => import("./App1"),
          },
        ],
      },
      {
        path: "/app2",
        lazy: () => import("./App2"),
      },
      {
        path: "/app3",
        lazy: () => import("./App3"),
      },
      {
        path: "/app4",
        lazy: () => import("remoteApp/Button"),
      },
    ],
  },
]);

function App() {
  return (
    <>
      Host
      <br />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
