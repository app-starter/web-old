import { observable, decorate, action } from "mobx";
import { login } from "../data";
class AuthStore {
  isLogin;
  token = "";
  isHaveTokenLogin() {
    var isHaveToken = localStorage.getItem("token");
    return isHaveToken == "" ? false : true;
  }

  setUser(token) {
    this.token = token;
    this.isLogin = true;
    localStorage.setItem("token", token);
  }
  logout() {
    this.isLogin = false;
    localStorage.setItem("token", "");
    this.token = "";
  }
}
decorate(AuthStore, {
  isLogin: observable,
  token: observable,
  login: action,
  logout: action,
});
export default new AuthStore();
