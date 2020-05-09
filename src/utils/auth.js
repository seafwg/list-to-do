export const getToken =  () => localStorage.getItem('token');

export const setToken = (token) => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');

export const isLogined = () => localStorage.getItem('token') ? true : false;
/*
{
  if(localStorage.getItem('token')) {
    return true;
  }else{
    return false;
  }
  // localStorage.getItem('token')
  localStorage.getItem('token') true : false;
}*/
