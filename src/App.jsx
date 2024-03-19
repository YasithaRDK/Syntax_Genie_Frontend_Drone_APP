import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AvailableDronesPage from "./pages/AvailableDronesPage";
import RegisterDronePage from "./pages/RegisterDronePage";
import RegisterMedicationPage from "./pages/RegisterMedicationPage";
import LoadMedicationsPage from "./pages/LoadMedicationsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AvailableDronesPage />,
  },
  {
    path: "/register-drone",
    element: <RegisterDronePage />,
  },
  {
    path: "/register-medication",
    element: <RegisterMedicationPage />,
  },
  {
    path: "/loaded-medication",
    element: <LoadMedicationsPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
