import axios from 'axios';

export const getProjects = async (username) => {
  const data = await axios.get(`https://api.github.com/users/${username}/repos`);
  return data.data;
}