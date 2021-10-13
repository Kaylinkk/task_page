import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./NavBar";
import Todo from "./components/Todo";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";
import "./App.css";
function App() {
  return (
    <div className="root-container">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
