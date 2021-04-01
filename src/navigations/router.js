import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  LoginScreen,
  RegisterScreen,
  LandingPageScreen,
  AboutPageScreen,
  DashboardScreen,
  UsersScreen,
  RoleScreen,
} from "../screens";
import AuthStore from "../stores/AuthStore";
import { useObserver } from "mobx-react";
export function BaseRouter() {
  return useObserver(() => (
    <Switch>
      {AuthStore.isLogin || AuthStore.isHaveTokenLogin() ? (
        <Route path="/">
          <HomeRouter />
        </Route>
      ) : (
        <Route path="/">
          <LandingPageRouter />
        </Route>
      )}
    </Switch>
  ));
}
function AuthRouter() {
  return (
    <Switch>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/register">
        <RegisterScreen />
      </Route>
    </Switch>
  );
}
function LandingPageRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPageScreen />
      </Route>
      <Route path="/about">
        <AboutPageScreen />
      </Route>
      <Route>
        <AuthRouter />
      </Route>
    </Switch>
  );
}
function HomeRouter() {
  return (
    <Switch>
      <Redirect exact from="/login" to="/" />
      <Redirect exact from="/register" to="/" />
      <Route exact path="/">
        <DashboardScreen />
      </Route>

      <Route path="/users">
        {AuthStore.isHavePermission("Permission_UserRead") ? (
          <UsersScreen />
        ) : (
          <div>İzin Yok</div>
        )}
      </Route>
      <Route path="/roles">
        {AuthStore.isHavePermission("Permission_UserRead") ? (
          <RoleScreen />
        ) : (
          <div>İzin Yok</div>
        )}
      </Route>
    </Switch>
  );
}
