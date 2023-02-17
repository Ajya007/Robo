import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "../pages/Dashboard";
// import Login from "src/pages/Auth/Login";
import AddLead from "../pages/Auth/AddLead";
import ViewLead from "../pages/Auth/ViewLead";
import UserDetail from "components/UserDetail";

const routes = [
  { path: NAVIGATION_ROUTES.DASHBOARD, element: <Dashboard /> },
  {
    path: NAVIGATION_ROUTES.ADDLEAD,
    element: <AddLead />,
  },
  {
    path: NAVIGATION_ROUTES.VIEWLEAD,
    element: <ViewLead />,
  },
  {
    path: NAVIGATION_ROUTES.USERDETAIL+"/:id",
    element: <UserDetail />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
