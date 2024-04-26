import Dashboad from "./pages/Dashboard/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support";
import Transaction from "./pages/Transactions/Transaction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboad />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
