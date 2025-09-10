import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ path, element, exact }, index) => (
          <Route key={index} path={path} element={element} exact={exact} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
