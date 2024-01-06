import axios from 'axios';

const {
  VITE_GITHUB_TOKEN,
} = import.meta.env;

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: VITE_GITHUB_TOKEN ? `Bearer ${VITE_GITHUB_TOKEN}` : null,
  },
});