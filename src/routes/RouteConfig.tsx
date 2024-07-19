import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>
  }
]);

function RouteConfig() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RouteConfig;
