import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "/api";

export function parseJwtPayload(token) {
  try {
    // JWTs are three base64url segments separated by dots; the payload is the middle one
    const base64Url = token.split(".")[1];
    // base64url uses '-' and '_' instead of '+' and '/'; convert to standard base64
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    // atob gives a binary string; percent-encode each byte so decodeURIComponent
    // can reconstruct multi-byte UTF-8 characters correctly
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function clearSession() {
  localStorage.removeItem("id_token");
  localStorage.removeItem("user_profile");
}

export const getToken = () => {
  try {
    const rawToken = localStorage.getItem("id_token");

    if (!rawToken) {
      return null;
    }

    // Normalize pasted token values: drop wrapping quotes and any leading Bearer prefix.
    const token = rawToken
      .trim()
      .replace(/^['\"]|['\"]$/g, "")
      .replace(/^Bearer\s+/i, "");

    const payload = parseJwtPayload(token);
    if (payload?.exp && Date.now() / 1000 > payload.exp) {
      clearSession();
      return null;
    }

    return token;
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

let reloadPending = false;
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !reloadPending) {
      reloadPending = true;
      clearSession();
      sessionStorage.setItem("session_expired", "1");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

const buildApi = (axios) => ({
  getAllGroups() {
    return axios.get(`${baseURL}/standings/groups`).then(({ data }) => data);
  },
  getAllMatches(params) {
    return axios.get(`${baseURL}/matches`, { params }).then(({ data }) => data);
  },
  getMatchById(id) {
    return axios.get(`${baseURL}/matches/${id}`).then(({ data }) => data);
  },
  getUserById(id) {
    return axios.get(`${baseURL}/users/${id}`).then(({ data }) => data);
  },
  getTopScorers() {
    return axios.get(`${baseURL}/topscorer`).then(({ data }) => data);
  },
  selectTopScorer(payload) {
    return axios.post(`${baseURL}/topscorer`, payload).then(({ data }) => data);
  },
  getChampions() {
    return axios.get(`${baseURL}/champion`).then(({ data }) => data);
  },
  selectChampion(payload) {
    return axios.post(`${baseURL}/champion`, payload).then(({ data }) => data);
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
  getBets(params) {
    return axios.get(`${baseURL}/bets`, { params }).then(({ data }) => data);
  },
  getStandings() {
    return axios.get(`${baseURL}/standings/users`).then(({ data }) => data);
  },
  getCrews() {
    return axios.get(`${baseURL}/crews`).then(({ data }) => data);
  },
});

export const EuroCupApi = buildApi(axios);
