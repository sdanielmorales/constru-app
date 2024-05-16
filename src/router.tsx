import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardPage from "./pages/dashboard";
import ConstructionPage from "./pages/construction";
import DesignPage from "./pages/design";
import IndustryPage from "./pages/industry";
import ConstructionProductPage from "./pages/constructionProduct";
import DesignProductPage from "./pages/designProduct";
import IndustryProductPage from "./pages/industryProduct";
import CartPage from "./pages/cart";
import PurchasedProducts from "./pages/purchased";

const router = createBrowserRouter([
  {
    path: "/:username",
    element: <App />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "construction",
        element: <ConstructionPage />,
      },
      {
        path: "design",
        element: <DesignPage />,
      },
      {
        path: "industry",
        element: <IndustryPage />,
      },
      {
        path: "construction/:productId",
        element: <ConstructionProductPage />,
      },
      {
        path: "design/:productId",
        element: <DesignProductPage />,
      },
      {
        path: "industry/:productId",
        element: <IndustryProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "purchased",
        element: <PurchasedProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
