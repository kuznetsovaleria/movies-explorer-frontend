export const getInitialMovies = () => {
  return fetch(`${"https://api.nomoreparties.co/beatfilm-movies"}`, {
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
