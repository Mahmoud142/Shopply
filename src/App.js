import HomePage from "./pages/HomePage";
import { BrowserRouter} from "react-router-dom";
function App() {
  return (
    <div>

      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
