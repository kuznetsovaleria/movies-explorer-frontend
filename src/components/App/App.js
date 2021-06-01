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
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import "../App/App.css";
import "../../index.css";
import * as auth from "../../auth/auth";
import mainApi from "../../utils/MainApi.js";
// import * as moviesApi from "../../utils/MoviesApi.js";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

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
          // setCurrentUser(res);
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
    if (token) {
      mainApi
        .getUserData(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
          history.push("/movies");
        })
        .catch((err) => {
          console.log(err);
          history.push("/signin");
        });
    }
  }, [history]);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  // ВЫХОД
  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([
        mainApi.getUserData(),
        // moviesApi.getInitialMovies(),
        // mainApi.getSavedMovies(),
      ]).then(([userData]) => {
        setCurrentUser(userData);
        // localStorage.setItem("movieData", JSON.stringify(movieData));
      });
    }
  }, [loggedIn]);

  // РЕДАКТРИРОВАТЬ ПРОФИЛЬ
  function handleUpdateUser(userInfo) {
    mainApi
    .editUserInfo(userInfo)
      .then((userData) => {
        setCurrentUser(userData)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
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
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
