import Cookies from "js-cookie";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Auth from "../../Feature/Auth/Auth";
import { login } from "../../Feature/Auth/AuthSlice";
import Alerts from "../../Helpers/Alerts/Alerts";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__title">
        <p>Connexion</p>
      </div>
      {<LoginForm />}
      <div className="Login__action">
        <p className="Login__action--resetPassword">
          <a href="/forget">Mot de passe oublié ?</a>
        </p>
        <p className="Login__action--requestPassword">
          <a href="/passwordRequest">Demander un mot de passe</a>
        </p>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      Auth(email, password)
        .then((response) => {
          const data = response.data;
          Cookies.set("token", data.token, { expires: 1 });
          const token = data.token;
          dispatch(login({ token }));
          window.location.reload();
        })
        .catch((error) => {setError(true)});
    },
    [email, password]
  );

  const handleChange = useCallback((event) => {
    const type = event.target.type;
    const value = event.target.value;

    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    }
  }, []);
  return (
    <>
    {error?<Alerts method='error' title='attention' message="l'email ou le password ne correspond pas"/>:''}
      <form className="Login__formulaire" onSubmit={handleSubmit}>
        <div className="Login__formulaire--identifiant">
          <label htmlFor="identifiant">Identifiant</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>

        <div className="Login__formulaire--password">
          <label htmlFor="password">Mote de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className="Login__formulaire--submit">
          <input type="submit" value="Se connecter" onChange={handleChange} />
        </div>
      </form>
    </>
  );
};
export default Login;
