import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";

const AppLayout = () => {
  return <outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    layout: <AppLayout />,
  },
  {
    path:"/about",
    element:<About/>,
    layout:<AppLayout/>
  },
  {
    path:"/contact",
    element:<Contact/>,
    layout:<AppLayout/>
  },
  {
    path: "/shop",
    element: <Shop />,
    layout: <AppLayout />,
  },
  {
    path:"/product/:productId/:catId/:catSubId",
    element:<Product/>,
    layout:<AppLayout/>
  },
  {
    path:"/cart",
    element:<Cart/>,
    layout:<AppLayout/>
  },
  {
    path:"/checkout",
    element:<Checkout/>,
    layout:<AppLayout/>
  },
  {
    path:"/order",
    element:<Order/>,
    layout:<AppLayout/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
