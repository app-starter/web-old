import api from "../api";

export const login = (data) => {
  return api.getApiWithoutToken().post(api.getBaseUrl() + "login", data);
};
export const register = (data) => {
  return api.getApiWithoutToken().post(api.getBaseUrl() + "signup", data);
};
export const changePassword = (data) => {
  return api.getApi().post(api.getBaseUrl() + "ChangePassword", data);
};
