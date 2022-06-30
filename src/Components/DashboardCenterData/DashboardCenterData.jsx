import React, { useCallback } from "react";
import calend from "../../Assets/img/Profils/calend.png";
import book from "../../Assets/img/Profils/book.png";
import people from "../../Assets/img/Profils/people.png";
import position from "../../Assets/img/Profils/position.png";
import otherUser from "../../Assets/img/Profils/otherUser.png";
import invitation from "../../Assets/img/Profils/invitation.png";
import creation from "../../Assets/img/Profils/creation.png";
import tableImg from "../../Assets/img/Profils/tableImg.png";
import imgAction from "../../Assets/img/Profils/imgAction.png";
import cr from "../../Assets/img/Icons/cr.png";
import "./DashboardCenterData.scss";
const DashboardCenterData = () => {
  return (
    <div className="dashboard__center--data">
      <Header />
      <TableTitle />
      <TableContent />
    </div>
  );
};
const TableTitle = () => {
  const handleClick = useCallback((event) => {
    const subtitleAll = Array.from(
      document.querySelectorAll(".title .subtitle p")
    );
    const subtitleBorderAll = Array.from(
      document.querySelectorAll(".border .subtitle div")
    )
    subtitleAll.forEach((subtitle) =>
      subtitle.classList.remove("subtitleActive")
    );
    subtitleBorderAll.forEach((subtitleBorder) =>
    subtitleBorder.classList.remove("subtitleBorderActive")
  );
    const position = event.target.classList[0];
    const border = document.querySelector(`.border .subtitle .${position}`);
    border.classList.add('subtitleBorderActive')
    event.target.classList.add("subtitleActive");
  });
  return (
    <div className="tableTitle">
      <div className="title">
        <div className="subtitle">
          <p onClick={handleClick} className='first'>liste des invites (45)</p>
          <p onClick={handleClick} className='second'>groupe d'invites (03)</p>
          <p onClick={handleClick} className='three'>programmes (01)</p>
        </div>
        <div className="stats">
          <p>
            <span>34</span> invitations en attentes
          </p>
        </div>
      </div>
      <div className="border">
        <div className="subtitle">
          <div className="first"></div>
          <div className="second"></div>
          <div className="three"></div>
        </div>
        <div className="stats"></div>
      </div>
      <div className="search">
        <div className="inputs">
          <div className="status">
            <label htmlFor="status">Trier par</label>
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
          <p className="creation">
            <img src={creation} alt="creation de groupe" />
            <span>cree un groupe</span>
          </p>
          <p className="invitation">
            <img src={invitation} alt="envoyer une invitation" />
            <span>envoyer une invitation</span>
          </p>
          <p className="addUser">
            <img src={otherUser} alt="ajouter un user" />
            <span>Ajouter</span>
          </p>
        </div>
      </div>
    </div>
  );
};
const TableContent = () => {
  return (
    <div className="tableContent">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>
              Nom et prenom <Imgs />
            </th>
            <th>
              Tags <Imgs />
            </th>
            <th>
              Cote/Table <Imgs />
            </th>
            <th>
              Guess <Imgs />
            </th>
            <th>
              Telephone <Imgs />
            </th>
            <th>
              E-mail <Imgs />
            </th>
            <th>
              Identifiant <Imgs />
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Sylla ibrahim</td>
            <td>
              <span>Parent</span>
              <span>vip</span>
            </td>
            <td>Parasole Gauche</td>
            <td>4</td>
            <td>07080050604</td>
            <td>brahim@novate.com</td>
            <td>FF5WE66F</td>
            <td>
              <ImgAction />
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Sylla ibrahim</td>
            <td>
              <span>Parent</span>
              <span>vip</span>
            </td>
            <td>Parasole Gauche</td>
            <td>4</td>
            <td>07080050604</td>
            <td>brahim@novate.com</td>
            <td>FF5WE66F</td>
            <td>
              <ImgAction />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const Imgs = () => {
  return <img src={tableImg} alt="icons" />;
};
const ImgAction = () => {
  return <img src={imgAction} alt="action" />;
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

const DashboardTitle = (props) => {
  return (
    <div className="table">
      <img src={props.img} alt="tableau de title" />
      <span>{props.title}</span>
    </div>
  );
};

export default DashboardCenterData;
