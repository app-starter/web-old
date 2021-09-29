import api from "../api";

export const getRoles = (data) => {
  return api.getApi().get(api.getBaseUrl() + "getAllRole");
};
export const addRole = (data) => {
  return api.getApi().get(api.getBaseUrl() + "addRole");
};

