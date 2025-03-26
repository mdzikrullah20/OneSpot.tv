import "./App.css";
import Navbar from "./Components/Navbar";
import Footar from "./Components/Footar";
import Layout from "./Components/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
      <Footar />
    </Router>
  );
}

export default App;
