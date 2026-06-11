import { createBrowserRouter } from "react-router-dom";

import publicRoutes from "./publicRoutes";
import protectedRoutes from "./protectedRoutes";
import adminRoutes from "./adminRoutes";

const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
  ...adminRoutes,
]);

export default router;