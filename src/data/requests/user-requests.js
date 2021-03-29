import api from "../api";

export const GetUsers = (data) => {
  return api.getApi().get(api.getBaseUrl() + "getAllUser");
};
export const Register = (data) => {
  return api.getApiWithoutToken().post(api.getBaseUrl() + "signup", data);
};
export const ChangePassword = (data) => {
  return api.getApi().post(api.getBaseUrl() + "ChangePassword", data);
};
