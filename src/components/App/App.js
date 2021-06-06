import React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import PageNotFound from "../PageNotFound/PageNotFound.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Preloader from "../Preloader/Preloader.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "../App/App.css";
import "../../index.css";
import * as auth from "../../auth/auth";
import mainApi from "../../utils/MainApi.js";
import * as moviesApi from "../../utils/MoviesApi.js";
import { SHORT_MOVIE } from "../../utils/constants.js";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [allFilteredMovies, setAllFilteredMovies] = React.useState([]);
  const [savedFilteredMovies, setSavedFilteredMovies] = React.useState([]);
  const [isShortMovie, setIsShortMovie] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const isMoviesSaved = true;
  const [failedSearchMessage, setFailedSearchMessage] = React.useState(false);
  const [isSearchingAmongSavedMovies, setIsSearchingAmongSavedMovies] =
    React.useState(false);
  const [permissonCheck, setPermissonCheck] = React.useState(false);

  // ОБРАБОТКА РЕГИСТРАЦИИ
  function handleRegister({ name, email, password }) {
    return auth
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        if (!res || res.statusCode === 400) {
          console.log("Что-то пошло не так");
        } else {
          handleLogin({ email, password });
          history.push("/movies");
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ОБРАБОТКА ЛОГИНА
  function handleLogin({ email, password }) {
    return auth
      .login(email, password)
      .then((res) => {
        if (!res || res.statusCode === 400) {
          console.log("Что-то пошло не так");
        }
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ПРОВЕРКА ТОКЕНА
  const tokenCheck = React.useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setPermissonCheck(true);
      return;
    }
    mainApi
      .getUserData(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setPermissonCheck(true);
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/signin");
      })
      .finally(() => {
        setPermissonCheck(true);
      });
  }, [history]);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  // ЗАГРУЗКА ДАННЫХ ПОЛЬЗОВАТЕЛЯ И КАРТОЧЕК С СЕРВЕРА
  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([
        mainApi.getUserData(),
        moviesApi.getInitialMovies(),
        mainApi.getSavedMovies(),
      ])
        .then(([userData, movieData, savedMovieData]) => {
          setCurrentUser(userData);
          localStorage.setItem("movieData", JSON.stringify(movieData));
          setMovies(JSON.parse(localStorage.getItem("movieData")));
          localStorage.setItem(
            "savedMovieData",
            JSON.stringify(savedMovieData)
          );
          setSavedMovies(JSON.parse(localStorage.getItem("savedMovieData")));
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  // РЕДАКТРИРОВАТЬ ПРОФИЛЬ
  function handleUpdateUser(userInfo) {
    mainApi
      .editUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ВЫХОД ИЗ ПРОФИЛЯ
  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }

  // ПОИСК СРЕДИ ВСЕХ ФИЛЬМОВ
  function searchMovie(search) {
    if (isShortMovie) {
      const shortMovie = movies.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE &&
          movie.nameRU.toLowerCase().includes(search.toLowerCase())
        );
      });
      return setAllFilteredMovies(shortMovie);
    } else {
      const filteredMovie = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN?.toLowerCase().includes(search.toLowerCase())
        );
      });
      return setAllFilteredMovies(filteredMovie);
    }
  }

  // ПОИСК СРЕДИ СОХРАНЁННЫХ ФИЛЬМОВ
  function searchSavedMovie(search) {
    if (isShortMovie) {
      const shortMovie = savedMovies.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE &&
          movie.nameRU.toLowerCase().includes(search.toLowerCase())
        );
      });
      return setSavedFilteredMovies(shortMovie);
    } else {
      const filteredSavedMovie = savedMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
          movie.nameEN?.toLowerCase().includes(search.toLowerCase())
        );
      });
      return setSavedFilteredMovies(filteredSavedMovie);
    }
  }

  // СООБЩЕНИЕ О НЕУДАЧНОМ ПОИСКЕ
  function showFailedSearchMessage() {
    setFailedSearchMessage(true);
  }

  // ПЕРЕКЛЮЧАТЕЛЬ КОРОТКОМЕТРАЖЕК
  function handleShowShortMovie() {
    setIsShortMovie(!isShortMovie);
  }

  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЁННЫЕ
  function handleSaveMovie(movieData) {
    mainApi
      .saveMovie(movieData)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЁННЫХ
  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const SavedMoviesList = savedMovies.filter((m) => m._id !== movie._id);
        const SavedFilteredMoviesList = savedMovies.filter(
          (m) => m._id !== movie._id
        );
        setSavedMovies(SavedMoviesList);
        setSavedFilteredMovies(SavedFilteredMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // ПРЕЛОАДЕР
  function turnPreloaderOn() {
    setIsLoading(true);
    setTimeout(async () => {
      setIsLoading(false);
    }, 1000);
  }

  function showSearchAmongSavedMovies() {
    setIsSearchingAmongSavedMovies(true);
  }

  if (!permissonCheck) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {isLoading ? (
          <Preloader />
        ) : (
          <Switch>
            <Route exact path="/">
              <Main loggedIn={loggedIn} />
            </Route>

            <Route path="/signup">
              <Register onRegister={handleRegister} loggedIn={loggedIn} />
            </Route>

            <Route path="/signin">
              <Login
                onLogin={handleLogin}
                tokenCheck={tokenCheck}
                loggedIn={loggedIn}
              />
            </Route>

            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              cards={allFilteredMovies}
              searchMovie={searchMovie}
              isShortMovie={isShortMovie}
              savedMovies={savedMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              handleShowShortMovie={handleShowShortMovie}
              showFailedSearchMessage={showFailedSearchMessage}
              searchMessage={failedSearchMessage}
              isLoading={isLoading}
              turnPreloaderOn={turnPreloaderOn}
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              cards={savedMovies}
              searchSavedMovie={searchSavedMovie}
              foundSavedCards={savedFilteredMovies}
              isMoviesSaved={isMoviesSaved}
              handleDeleteMovie={handleDeleteMovie}
              handleShowShortMovie={handleShowShortMovie}
              isSearchingAmongSavedMovies={isSearchingAmongSavedMovies}
              showSearchAmongSavedMovies={showSearchAmongSavedMovies}
              savedMovies={savedMovies}
            />

            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              onSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
            />

            <Route path="*">
              <PageNotFound />
            </Route>

            <Route>
              {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
            </Route>
          </Switch>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
