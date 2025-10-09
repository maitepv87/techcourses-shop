import "./App.css";
import { NavBar, Footer } from "./components";
import { Notification } from "./features";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
