import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/app1",
    children: [
      {
        path: "",
        lazy: () => import("./Page0"),
      },
      {
        path: "page1",
        lazy: () => import("./Page1"),
      },
      {
        path: "page2",
        lazy: () => import("./Page2"),
      },
      {
        path: "page3",
        lazy: () => import("./Page3"),
      },
    ],
  },
]);

function App() {
  return (
    <>
      Remote
      <RouterProvider router={router} />
    </>
  );
}

export default App;
