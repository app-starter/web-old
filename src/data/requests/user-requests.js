import api from "../api";

export const getUsers = (data) => {
  return api.getApi().get(api.getBaseUrl() + "getAllUser");
};
