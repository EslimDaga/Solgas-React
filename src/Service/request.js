import axios from "axios";
import cache from "../Helpers/cache";
import { API as BASE_API } from "./../Constants/global";

/**
 * main api config
 * @author {EslimDaga}
 */

/**
 * creating a new axios instance
 */
const request = axios.create({
    baseURL: BASE_API,
  });

  /**
   * this is main configuration for request data
   */
  request.interceptors.request.use(
    (config) => {
      if (cache.hasThis("user")) {
        config.headers["Authorization"] = "JWT " + cache.getItem("user").token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  /**
   * this is main configuration for given data from api
   */
  request.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        cache.removeItem("user");
        window.location.reload();
      }
      return response;
    },
    (error) => {
      let errData = {
        message: "No tienes conexion a Internet",
      };
      if (error.response.status === 401) {
        cache.removeItem("user");
        window.location.reload();
      }
      return Promise.reject(errData);
    }
  );

  export default request;