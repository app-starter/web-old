import { observable, decorate, action } from "mobx";
import { getMyPermission } from "../data";

class AuthStore {
  isLogin;
  token = "";
  permissions = [];
  isHaveTokenLogin() {
    var isHaveToken = localStorage.getItem("token");
    return isHaveToken == "" ? false : true;
  }

  isHavePermission(permissionName) {
    var permissionsAll = JSON.parse(localStorage.getItem("permissions"));
    var isHavePermission = permissionsAll.some((x) => x === permissionName);
    return isHavePermission;
  }

  setUser(token) {
    this.token = token;
    localStorage.setItem("token", token);
    getMyPermission()
      .then((response) => {
        this.permissions = response.data;
        localStorage.setItem("permissions", JSON.stringify(this.permissions));
        this.isLogin = true;
      })
      .catch((error) => {
        console(error.response.data);
      });
  }
  logout() {
    this.isLogin = false;
    localStorage.setItem("token", "");
    this.token = "";
    localStorage.setItem("permissions", "");
  }
}
decorate(AuthStore, {
  isLogin: observable,
  token: observable,
  login: action,
  logout: action,
});
export default new AuthStore();
