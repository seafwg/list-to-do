import { getHttpsApi, postHttpsApi, putHttpsApi, delHttpsApi } from '../utils/httpsRequest'

/**
 * ! login api
 * @param userInfo:{username, password}
 */
export const loginApi = (userInfo) => postHttpsApi('api/login', userInfo);

/**
 * ! products list api
 */
//? 获取列表数据
export const getListApi = (page=1) => getHttpsApi('/api/admin/products', {page});
//? 新建数据
export const createListApi = (data) => postHttpsApi('/api/admin/products', data);
//? 修改数据
export const modifyListApi = (id, data) => putHttpsApi(`/api/admin/products/${id}`, data);
//? 删除数据
export const delListApi = (id) => delHttpsApi(`/api/admin/products/${id}`);