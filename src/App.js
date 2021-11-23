
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Features from "./Pages/HomePage/Features/Features";
import Footer from "./Pages/HomePage/Footer/Footer";
import Header from "./Pages/HomePage/Header/Header";
import Heading from "./Pages/HomePage/Heading/Heading";
import HomePage from "./Pages/HomePage/HomePage";
import ServiceDetails from "./Pages/HomePage/Services/Service/ServiceDetails";
import Services from "./Pages/HomePage/Services/Services";
import Team from "./Pages/HomePage/Team/Team";
import TeamMemberDetails from "./Pages/HomePage/Team/TeamMemberDetails";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";


function App() {
  return (
    <div>

      <AuthProvider>
        // react router v5
        <Router>
          <Heading></Heading>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/service" component={Services} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/feature" component={Features} />
            <Route exact path="/login" component={Login} />

            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/member/:memberId">
              <TeamMemberDetails></TeamMemberDetails>
            </PrivateRoute>

            <Route path="*" component={NotFound} />
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
