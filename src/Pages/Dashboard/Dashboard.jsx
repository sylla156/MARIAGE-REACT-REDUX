import React from "react";
import "./dashboard.scss";
import logo from "../../Assets/img/Icons/logo.png";
import dh from "../../Assets/img/Icons/dh.png";
import brunch from "../../Assets/img/Icons/brunch.png";
import about from "../../Assets/img/Icons/about.png";
import crc from "../../Assets/img/Icons/crc.png";
import cr from "../../Assets/img/Icons/cr.png";
import dgj from "../../Assets/img/Icons/dgj.png";
import galerie from "../../Assets/img/Icons/Galerie.png";
import setting from "../../Assets/img/Icons/setting.png";
import user from "../../Assets/img/Icons/user.png";
import novate from "../../Assets/img/Icons/novate.png";
import search from "../../Assets/img/Profils/search.png";
import cloche from "../../Assets/img/Profils/cloche.png";
import logout from "../../Assets/img/Profils/logout.png";
import profile from "../../Assets/img/Profils/profile.png";
import calend from "../../Assets/img/Profils/calend.png";
import book from "../../Assets/img/Profils/book.png";
import people from "../../Assets/img/Profils/people.png";
import position from "../../Assets/img/Profils/position.png";
import otherUser from '../../Assets/img/Profils/otherUser.png';
import invitation from "../../Assets/img/Profils/invitation.png";
import creation from "../../Assets/img/Profils/creation.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* sidebard left for app */}
      <Sidebard />
      <div className="dashboard__center">
        {/* navbar top por setting et search of app */}
        <Navbar />
        {/* where the data will be represente  */}
        <div className="dashboard__center--data">
          <Header />
          <div className="tableTitle">
            <div className="title">
              <div className="subtitle">
                <p>liste des invites (45)</p>
                <p>groupe d'invites (03)</p>
                <p>programmes (01)</p>
              </div>
              <div className="stats">
                <p>
                  <span>34</span> invitations en attentes
                </p>
              </div>
            </div>
          </div>
          <div className="border">
            <div className="first"></div>
            <div className="second"></div>
            <div className="three"></div>
          </div>
          <div className="search">
            <div className="inputs">
              <div className="status">
                <label for="status">Trier par</label>
                <select name="status" id="status">
                  <option value="">Confimees</option>
                  <option value="dog">Dog</option>
                </select>
              </div>
              <div className="tags">
                <label htmlFor="tags">tags</label>
                <select name="tags" id="tags">
                  <option value="">parents</option>
                  <option value="dog">vip</option>
                </select>
              </div>
            </div>
            <div className="btn">
              <p>Action selection</p>
              <p>
                <img src={creation} alt="creation de groupe" />
                <span>cree un groupe</span>
              </p>
              <p>
                <img src={invitation} alt="envoyer une invitation" />
                <span>envoyer une invitation</span>
              </p>
              <p>
                <img src={otherUser} alt="ajouter un user" />
                <span>Ajouter</span>
              </p>
            </div>
          </div>
          <div className="tableContent"></div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="first">
        <DashboardTitle img={cr} title="ceremonie religieuse" />
        <div className="underline"></div>
        <div className="details">
          <div className="premier">
            <img src={calend} alt="calendrier" />
            <span>Le 17 Mars 2022</span>
            <span>A partir de 10 h</span>
          </div>
          <div className="deuxieme">
            <img src={position} alt="position" />
            <span>Mosquee Hamsa</span>
            <span>Cocody,Abidjan,Cote d'ivoire</span>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="premier child">
          <div className="title">
            <span>Programmes</span>
            <img src={book} alt="book" />
          </div>
          <div className="content">
            <p>03</p>
          </div>
        </div>
        <div className="deuxieme child">
          <div className="title">
            <span>Invite</span>
            <img src={people} alt="people" />
          </div>
          <div className="content">
            <p>03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebard = () => {
  return (
    <div className="dashboard__sidebard">
      <div className="logo">
        <img src={logo} alt="logo of app" />
      </div>
      <DashboardTitle img={dh} title="tableau de bord" />
      <p className="subtitle">
        <span>ceremonie</span>
      </p>
      <DashboardTitle img={cr} title="ceremonie religieuse" />
      <DashboardTitle img={crc} title="ceremonie civile" />
      <DashboardTitle img={crc} title="diner gala soiree civile" />
      <DashboardTitle img={dgj} title="diner gala pour jeunes" />
      <DashboardTitle img={brunch} title="brunch" />

      <div className="divise"></div>
      <p className="subtitle">
        <span>SITE INTERNET</span>
      </p>
      <DashboardTitle img={about} title="A propos de nous" />
      <DashboardTitle img={setting} title="information" />
      <DashboardTitle img={galerie} title="galerie photo" />
      <DashboardTitle img={user} title="Administrateurs" />

      <div className="footer">
        <span>Powered by</span> <img src={novate} alt="entreprise" />
      </div>
    </div>
  );
};
const DashboardTitle = (props) => {
  return (
    <div className="table">
      <img src={props.img} alt="tableau de title" />
      <span>{props.title}</span>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="dashboard__center--navbar">
      <div className="form">
        <input type="text" placeholder="input search text" />
        <button>
          <img src={search} alt="search" />
        </button>
      </div>

      <div className="profils">
        <img src={cloche} alt="cloche" />
        <img src={profile} alt="profil" />
        <p>Admin</p>
        <img src={logout} alt="logout" />
      </div>
    </div>
  );
};
export default Dashboard;
