import axios from 'axios';

const BASE_URL = 'http://localhost:8000/users';

export async function loginUser(user) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, user);
    const token = response.data.token;
    localStorage.setItem('token', token); // store the token in local storage
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function signupUser(user) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, user);
    const token = response.data.token;
    localStorage.setItem('token', token); // store the token in local storage
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
