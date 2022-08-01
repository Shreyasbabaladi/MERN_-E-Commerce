import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRouter from "./auth/helper/AdminRoutes";
import PrivateRouter from "./auth/helper/PrivateRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import Profile from "./user/Profile";
import UserDashBoard from "./user/UserDashBoard";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRouter path="/profile" exact component={Profile} />
        <PrivateRouter path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRouter path="/admin/dashboard" exact component={AdminDashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
