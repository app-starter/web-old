import { observable, decorate, action } from "mobx";
import { getRoles } from "../data";
class RoleStore {
  roles = [];

  getRoles() {
    getRoles()
      .then((response) => {
        console.log(response);
        var res = response.data;
        this.roles = res;
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
decorate(RoleStore, {
  roles: observable,
});
export default new RoleStore();
