export class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleOriginalResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(this._handleOriginalResponse);
  }

  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
      }),
    }).then(this._handleOriginalResponse);
  }
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(this._handleOriginalResponse);
  }

  saveMovie(movieData) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    }).then(this._handleOriginalResponse);
  }

  deleteMovie(_id) {
    return fetch(`${this._baseUrl}/movies/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(this._handleOriginalResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.kuznetsova.movies.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default mainApi;
