import { BASEAPIURL } from "./constants";
import Axios from "axios";

class Api {
  getBaseUrl() {
    return BASEAPIURL;
  }

  getApi(token) {
    const axiosInstance = Axios.create({
      baseURL: BASEAPIURL,
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    return axiosInstance;
  }
  getApiWithoutToken() {
    const axiosInstance = Axios.create({
      baseURL: BASEAPIURL,
      headers: {
        Accept: "application/json",
      },
    });
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return axiosInstance;
  }
}
export default new Api();
