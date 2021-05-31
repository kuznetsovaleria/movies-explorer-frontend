export const BASE_URL = 'https://api.kuznetsova.movies.nomoredomains.icu';

const responseCheck = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'applicationj/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(responseCheck)
};

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then(responseCheck)
}