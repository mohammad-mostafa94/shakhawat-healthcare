
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Contact from "./Pages/HomePage/Contact/Contact";
import Header from "./Pages/HomePage/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Services from "./Pages/HomePage/Services/Services";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
