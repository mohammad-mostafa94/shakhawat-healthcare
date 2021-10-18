
import {
  BrowserRouter as Router
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";


function App() {
  return (
    <Router>
      <div>
        <HomePage></HomePage>
      </div>
    </Router>
    
  );
}

export default App;
