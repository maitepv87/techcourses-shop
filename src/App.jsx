import "./App.css";
import { NavBar, Footer, Notification } from "./components";
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
