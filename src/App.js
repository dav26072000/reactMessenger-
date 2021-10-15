import "./App.css";
// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

// import pages
import Login from "./components/Login";
import Chat from "./components/Chat";
import Error from "./components/Error";
import Register from "./components/Register";

// import routes
import {
  loginPageRoute,
  registerPageRoute,
  userPageRoute,
} from "./constants/routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={loginPageRoute}>
          <Login />
        </Route>
        <Route exact path={registerPageRoute}>
          <Register />
        </Route>
        <Route exact path={userPageRoute}>
          <Chat />
        </Route>
        <Route exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
