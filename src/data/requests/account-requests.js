import api from "../api";

export const Login = (data) => {
  return api.getApiWithoutToken().post(api.getBaseUrl() + "login", data);
};
export const Register = (data) => {
  return api.getApiWithoutToken().post(api.getBaseUrl() + "signup", data);
};
export const ChangePassword = (data) => {
  return api.getApi().post(api.getBaseUrl() + "ChangePassword", data);
};
