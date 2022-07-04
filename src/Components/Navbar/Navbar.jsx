import React, { useCallback } from 'react'
import search from "../../Assets/img/Profils/search.png";
import cloche from "../../Assets/img/Profils/cloche.png";
import exit from "../../Assets/img/Profils/logout.png";
import profile from "../../Assets/img/Profils/profile.png";
import './navbar.scss';
import Cookies from 'js-cookie';
const Navbar = (props) => {
  const logout = useCallback(
    () => {
      Cookies.remove('token');
      window.location.reload();
    },
    [],
  )
  
    return (
      <div className="dashboard__center--navbar">
        <div className="form">
          <input type="text" placeholder="Effectuer une recherche" />
          <button>
            <img src={search} alt="search" />
          </button>
        </div>
  
        <div className="profils" onClick={logout}>
          <img src={cloche} alt="cloche" />
          <img src={profile} alt="profil" />
          <p>Admin</p>
          <img src={exit} alt="logout" />
        </div>
      </div>
    );
  };

export default Navbar