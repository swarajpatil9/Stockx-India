import HomePage from "@/pages/Home/HomePage";
import ProductsPage from "@/pages/Products/ProductsPage";
import LoginPage from "@/pages/Auth/LoginPage";
import SignupPage from "@/pages/Auth/SignupPage";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/products",
    element: <ProductsPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/signup",
    element: <SignupPage />,
  },
];

export default publicRoutes;