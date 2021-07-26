import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Welcome to React Project</h1> */}
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
