import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="Login">
        <div className="Login__title">
            <p>Connexion</p>
        </div>

        <div className="Login__formulaire">
            <div className="Login__formulaire--identifiant">
                <label htmlFor="identifiant">Identifiant</label>
                <input type="email" name="email" id="email" />
            </div>

            <div className="Login__formulaire--password">
                <label htmlFor="password">Mote de passe</label>
                <input type="password" name="password" id="password" />
            </div>

            <div className="Login__formulaire--submit">
                <input type="submit" value="Se connecter" />
            </div>
        </div>

        <div className="Login__action">
            <p className="Login__action--resetPassword">
                <a href="">Mot de passe oublié ?</a>
            </p>
            <p className="Login__action--requestPassword">
                <a href="">Demander un mot de passe</a>
            </p>
        </div>

    </div>
  )
}

export default Login