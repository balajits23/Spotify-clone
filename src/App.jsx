import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/HeaderComponent/Navbar";
import "./index.css";
import Slider from "./Pages/SilderComponent/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import SignUp from "./Components/AuthComponent/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContext";
import { Fragment } from "react/cjs/react.development";
import UserHome from "./UserComponent/UserHome";

const App = () => {
  let state = useContext(AuthContextApi);
  // let ISAnonymousTemplate = () => {
  return (
    <section>
      <article>
        <Router>
          <header>{!state ? <Navbar /> : ""}</header>

          <ToastContainer />
          <main>
            {/* dynamic routing starts here */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <SignUp />
              </Route>
              <Route path="/userhome">
                <UserHome />
              </Route>
              <Route path="/">
                <PageNotFound />
              </Route>
            </Switch>
          </main>
        </Router>
      </article>
    </section>
  );
  // };

  // let IsAuthenticatedTemplate = () => {
  //   return <UserHome />;
  // };
  // return (
  //   <Fragment>
  //     {state === null ? <ISAnonymousTemplate /> : <IsAuthenticatedTemplate />}
  //   </Fragment>
  // );
};

export default App;
