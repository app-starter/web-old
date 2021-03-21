import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  LoginScreen,
  RegisterScreen,
  HomeScreen,
  HomePageScreen,
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
          <AuthRouter />
        </Route>
      )}
    </Switch>
  ));
}
function AuthRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePageScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route path="/register">
          <RegisterScreen />
        </Route>
      </Switch>
    </>
  );
}
function HomeRouter() {
  return (
    <>
      <Switch>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </>
  );
}
