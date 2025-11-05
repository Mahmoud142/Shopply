import HomePage from "./pages/HomePage";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import NavBarLogin from "./components/utility/NavBarLogin";
function App() {
  return (
    <div className="font">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
