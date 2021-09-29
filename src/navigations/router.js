import React from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import {
  LoginScreen,
  RegisterScreen,
  LandingPageScreen,
  AboutPageScreen,
  DashboardScreen,
  UsersScreen,
  RoleScreen,
  RoleAddScreen,
  SettingsScreen,
} from "../screens";
import AuthStore from "../stores/AuthStore";
import { useObserver } from "mobx-react";

export function BaseRouter() {
  let { abc } = useParams();
  return useObserver(() => (
    <Switch>
      <Route
        path="/googleLogin"
        render={() => {
          var token = decodeURI(window.location.href).split("=").pop();
          AuthStore.setUser(token.substring(0, token.length - 1));
          window.open("http://localhost:3000/", "_self");
        }}
      ></Route>
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
      <Route exact path="/settings">
        <SettingsScreen />
      </Route>

      <Route path="/users">
        {AuthStore.isHavePermission("Permission_UserRead") ? (
          <UsersScreen />
        ) : (
          <div>İzin Yok</div>
        )}
      </Route>

      <Route path="/roles">
        {AuthStore.isHavePermission("Permission_RoleRead") ? (
          <RoleScreen />
        ) : (
          <div>İzin Yok</div>
        )}{" "}
      </Route>
      <Route path="/role-add">
        {AuthStore.isHavePermission("Permission_RoleWrite") ? (
          <RoleAddScreen />
        ) : (
          <div>İzin Yok</div>
        )}
      </Route>
    </Switch>
  );
}
