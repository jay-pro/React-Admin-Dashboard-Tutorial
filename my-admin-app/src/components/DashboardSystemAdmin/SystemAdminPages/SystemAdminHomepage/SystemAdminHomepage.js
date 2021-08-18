import React from "react";
import "./systemAdminHomepage.css";
import "../../../../App.css";
//import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Home from "../SystemAdminHomepage/Home";
import AccountUpdate from "../AccountUpdate/AccountUpdate";
import CourseManage from "../CourseManage/CourseManage";
import Logout from "../Logout/Logout";
import Statistic from "../Statistic/Statistic";
import UserManage from "../UserManage/UserManage";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";

function SystemAdminHomepage() {
  return (
    /* <Router>
      <div className="sa-container">
        <h1>this is a system admin homepage</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/accountupdate">AccountUpdate</Link>
            </li>
            <li>
              <Link to="/coursemanage">CourseManage</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/statistic">Statistic</Link>
            </li>
            <li>
              <Link to="/usermanage">Usermanage</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/accountupdate" component={AccountUpdate}></Route>
        <Route path="/coursemanage" component={CourseManage}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/statistic" component={Statistic}></Route>
        <Route path="/usermanage" component={UserManage}></Route>
      </Switch>
    </Router> */
    <div className="SystemAdminHomePage">
      <Topbar />
      <div className="sa-container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default SystemAdminHomepage;
