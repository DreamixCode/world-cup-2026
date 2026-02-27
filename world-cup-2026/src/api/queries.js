import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "/api";

export const getToken = () => {
  try {
    return localStorage.getItem("id_token");
  } catch {
    return null;
  }
};

const bearerInterceptor = (config) => {
  // This will be executed only on request, not on import of the queries
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

axios.interceptors.request.use(bearerInterceptor);

const buildApi = (axios) => ({
  getAllGroups() {
    return axios.get(`${baseURL}/standings/groups`).then(({ data }) => data);
  },
  getAllMatches() {
    return axios.get(`${baseURL}/matches`).then(({ data }) => data);
  },
  getMatchById(id) {
    return axios.get(`${baseURL}/matches/${id}`).then(({ data }) => data);
  },
  getUserById(id) {
    return axios.get(`${baseURL}/users/${id}`).then(({ data }) => data);
  },
  createBet(bet) {
    return axios.post(`${baseURL}/bets`, bet).then(({ data }) => data);
  },
  updateBet(bet) {
    return axios.put(`${baseURL}/bets`, bet).then(({ data }) => data);
  },
  getMyBets() {
    return axios.get(`${baseURL}/bets/my`).then(({ data }) => data);
  },
  getBets() {
    return axios.get(`${baseURL}/bets`).then(({ data }) => data);
  },
  getStandings() {
    return axios.get(`${baseURL}/standings/users`).then(({ data }) => data);
  },
});

export const EuroCupApi = buildApi(axios);
