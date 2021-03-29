import { observable, decorate, action } from "mobx";
import { GetUsers } from "../data";
class UserStore {
  users = [];

  getAllUser() {
    GetUsers()
      .then((response) => {
        console.log(response);
        var res = response.data;
        this.users = res;
        console.log(res);
      })
      .catch((error) => {
        if (error.status === 400) {
          console.log(
            "Kullanıcı adı veya şifre yanlış.\nLütfen tekrar deneyiniz"
          );
        }
      });
  }
}
decorate(UserStore, {
  users: observable,
});
export default new UserStore();
