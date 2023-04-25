import axios from "axios";

const URL = "http://localhost:8000";

const instance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`, // add the token in the Authorization header
  },
});

export const addUser = async (data) => {
   try{
     return await instance.post('/add', data);
   }catch(error){
    console.log("add user api call error: ", error);
   }
};

export const getUsers = async () => {
  try{
    const response = await instance.get('/');
    return response.data;
  }catch(error){
   console.log("get user api call error: ", error);
  }
};

export const getUser = async (id) => {
  try{
    const response = await instance.get(`/${id}`);
    return response.data;
  }catch(error){
   console.log("One get user api call error: ", error);
  }
};

export const editUser = async (user, id) => {
  try{ 
    const response = await instance.post(`/${id}`, user);
    return response.data;
  }
  catch(error){
    console.log("put error",  error)
  }
};

export const deleteUser = async (id) => {
  try{ 
    const response = await instance.delete(`/${id}`);
    return response.data;
  }
  catch(error){
    console.log("delete error",  error)
  }
};
