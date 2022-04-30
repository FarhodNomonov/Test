import axios from "axios";
export const URL = "http://f0665380.xsph.ru/";
export const postRequest = (data) => {
  const res = axios
    .post(URL, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};
