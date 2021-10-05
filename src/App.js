import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import Greeting from './Greeting';
import Todo from './components/Todo';
import Login from './components/Login';
import MainPage from "./components/MainPage";
import OpenTask from './components/openedTask';





function App() {
  document.body.style.backgroundColor = "#F1F1F9";


  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>

      {/* 
        <NavBar />
        <Greeting />
        <Todo />

      </Router> */}
    </>
  );
}

export default App;
