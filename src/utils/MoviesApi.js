import { MOVIES_URL } from "../utils/constants.js";

export const getInitialMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  });
};
