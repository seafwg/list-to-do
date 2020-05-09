import Axios from 'axios'
import { getToken } from './auth';

const httpsApi = Axios.create({
  baseUrl: 'http://localhost:3000',
  timeOut: 5000
});
/**
 * ? 每次请求时都会发一个token值，设置全局的拦截axios官方全局请求，全局响应拦截
 */
//! 全局请求拦截，发送之前执行
httpsApi.interceptors.request.use(function (config) {
  // ? 设置请求头authorization: 'seafwg ' + token
  config.headers["authorization"] = "seafwg " + getToken;
  return config;
}, function (error) {
  return Promise.reject(error);
});

//? 全局响应拦截，请求返回之后执行
httpsApi.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

/**
 *! GET,POST,PUT,DEL
 * @param {*} url 请求地址
 * @param {*} data 携带参数
 */
export const getHttpsApi = (url, data) => httpsApi.get(url, data);
export const postHttpsApi = (url, data) => httpsApi.post(url, data);
export const putHttpsApi = (url, data) => httpsApi.put(url, data);
export const delHttpsApi = (url) => httpsApi.delete(url);