// <<<<<<< kaylin
// import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";
// import Todo from './components/Todo';
// import Login from './components/Login';
// =======
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   BrowserRouter,
// } from "react-router-dom";
// import NavBar from "./NavBar";
// import Todo from "./components/Todo";
// import Login from "./components/Login";

import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";
import "./components/App.css"
import { useMediaQuery } from 'react-responsive'

// <<<<<<< kaylin



// // function App() {
// //   const isMobileDevice = useMediaQuery({
// //     query: "(min-device-width: 480px)",
// //   });

// //   const isTabletDevice = useMediaQuery({
// //     query: "(min-device-width: 768px)",
// //   });

// //   const isLaptop = useMediaQuery({
// //     query: "(min-device-width: 1024px)",
// //   });

// //   const isDesktop = useMediaQuery({
// //     query: "(min-device-width: 1200px)",
// //   });

// //   const isBigScreen = useMediaQuery({
// //     query: "(min-device-width: 1201px )",
// //   });

// =======
// function App() {

  return (


    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
