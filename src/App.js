import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TestSuitesEditPage from "./pages/TestSuitesEditPage";
import TestSuitesListPage from "./pages/TestSuitesListPage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestSuitesListPage />,
  },
  {
    path: "/test-suite/:testSuiteId/edit",
    element: <TestSuitesEditPage />,
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
    />
  );
}

export default App;
