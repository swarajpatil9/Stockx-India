import CartPage from "@/pages/Cart/CartPage";
import CheckoutPage from "@/pages/Cart/CheckoutPage";
import ProfilePage from "@/pages/Account/ProfilePage";

const protectedRoutes = [
  {
    path: "/cart",
    element: <CartPage />,
  },

  {
    path: "/checkout",
    element: <CheckoutPage />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },
];

export default protectedRoutes;
