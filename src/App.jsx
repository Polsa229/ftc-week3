import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes/routes";

import { toast, ToastContainer } from "react-toastify"; // si tu utilises react-toastify
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Routes>
        {appRoutes.map(({ path, element, exact }, index) => (
          <Route key={index} path={path} element={element} exact={exact} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
