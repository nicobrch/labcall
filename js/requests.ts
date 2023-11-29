import axios from "axios";

import { API_PATH } from "@/config";

export const getToApi = (url: string, config: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
      })
      .then((result) => {
        return result.data;
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const postToApi = (url: string, body: any, config?: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/api${url}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const putToApi = (url: string, body: any, config: any) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`/api${url}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteToApi = (url: string, body: any, config: any) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`/api${url}`, {
        headers: {
          "Content-Type": "application/json",
        },
        ...config,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        if (!err.response) {
          reject(err);
        }
        if (!err.response.data) {
          reject(err);
        }
        reject(err.response.data);
      });
  });
};
