import { observable, decorate, action } from "mobx";
import { Login } from "../data";
class AuthStore {
  isLogin;
  token = "";
  isHaveTokenLogin() {
    var isHaveToken = localStorage.getItem("token");
    return isHaveToken == "" ? false : true;
  }

  login(loginModel) {
    Login(loginModel)
      .then((response) => {
        console.log(response);
        var res = response.data;
        if (res.success) {
          this.token = res.token;
          this.isLogin = true;
          localStorage.setItem("token", res.token);
        } else {
          console.log(response.data.errors);
        }
      })
      .catch((error) => {
        if (error.status === 400) {
          console.log(
            "Kullanıcı adı veya şifre yanlış.\nLütfen tekrar deneyiniz"
          );
        }
      });
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
