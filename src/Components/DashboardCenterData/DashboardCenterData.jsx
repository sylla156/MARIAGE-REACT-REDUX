import React, { useCallback, useEffect, useState } from "react";
import calend from "../../Assets/img/Profils/calend.png";
import book from "../../Assets/img/Profils/book.png";
import people from "../../Assets/img/Profils/people.png";
import lieu from "../../Assets/img/Profils/position.png";
import otherUser from "../../Assets/img/Profils/otherUser.png";
import invitation from "../../Assets/img/Profils/invitation.png";
import creation from "../../Assets/img/Profils/creation.png";
import tableImg from "../../Assets/img/Profils/tableImg.png";
import imgAction from "../../Assets/img/Profils/imgAction.png";
import cr from "../../Assets/img/Icons/cr.png";
import "./DashboardCenterData.scss";
import religieuse from "../../Helpers/contents/religieuse";
import civile from "../../Helpers/contents/civile";
import soiree from "../../Helpers/contents/soiree";
import jeunes from "../../Helpers/contents/jeunes";
import brunch from "../../Helpers/contents/brunch";


const DashboardCenterData = ({ position }) => {
  const [table, setTable] = useState("first");
  const handleTable = useCallback((value) => {
    setTable(value);
  }, []);
  return (
    <div className="dashboard__center--data">
      <Header table={table} position={position} />
      <TableTitle
        onChangeTable={handleTable}
        table={table}
        position={position}
      />
      <TableContent table={table} position={position} />
    </div>
  );
};
const TableTitle = ({ onChangeTable, table, position }) => {
  const handleClick = useCallback(
    (event) => {
      const subtitleAll = Array.from(
        document.querySelectorAll(".title .subtitle p")
      );
      const subtitleBorderAll = Array.from(
        document.querySelectorAll(".border .subtitle div")
      );
      subtitleAll.forEach((subtitle) =>
        subtitle.classList.remove("subtitleActive")
      );
      subtitleBorderAll.forEach((subtitleBorder) =>
        subtitleBorder.classList.remove("subtitleBorderActive")
      );
      const position = event.target.classList[0];
      const border = document.querySelector(`.border .subtitle .${position}`);
      border.classList.add("subtitleBorderActive");
      event.target.classList.add("subtitleActive");
      // top it's the select effect
      //down is for change the table
      onChangeTable(event.target.classList[0]);
    },
    [table]
  );
  return (
    <div className="tableTitle">
      <div className="title">
        <div className="subtitle">
          <p onClick={handleClick} className="first subtitleActive">
            liste des invites (45)
          </p>
          <p onClick={handleClick} className="second">
            groupe d'invites (03)
          </p>
          <p onClick={handleClick} className="three">
            programmes (01)
          </p>
        </div>
        <div className="stats">
          <p>
            <span>34</span> invitations en attentes
          </p>
        </div>
      </div>
      <div className="border">
        <div className="subtitle">
          <div className="first subtitleBorderActive"></div>
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
const TableContent = ({ table, position }) => {
  const [data, setData] = useState(religieuse());
  const [tableContent, setTableContent] = useState(
    <Table head={data.headList} body={data.bodyList} />
  );
  useEffect(() => {
    console.log(position);
    switch (position) {
      case "religieuse":
        setData(religieuse());
        break;
      case "civile":
        setData(civile());
        break;
      case "soiree":
        setData(soiree());
        break;
      case "jeunes":
        setData(jeunes());
        break;
      case "brunch":
        setData(brunch());
        break;

      default:
        break;
    }
  }, [position, table]);

  useEffect(() => {
    switch (table) {
      case "first":
        setTableContent(<Table head={data.headList} body={data.bodyList} />);
        break;
      case "second":
        setTableContent(
          <Table head={data.headGroupe} body={data.bodyGroupe} />
        );

        break;
      case "three":
        setTableContent(
          <Table head={data.headProgrammes} body={data.bodyProgrammes} />
        );

        break;

      default:
        break;
    }
  }, [data]);

  return <div className="tableContent">{tableContent}</div>;
};

const Table = ({ head, body }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {head.map((element, key) => {
            return (
              <th key={key}>
                {element} {<Imgs />}
              </th>
            );
          })}

          <th></th>
        </tr>
      </thead>
      <tbody>
        {body.map((elements, key) => {
          return (
            <tr key={key}>
              <td>
                {" "}
                <input type="checkbox" />
              </td>

              {elements.map((element, key) => {
                return <td key={key}>{element}</td>;
              })}
              <td>{<ImgAction />}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
const Imgs = () => {
  return <img src={tableImg} alt="icons" />;
};
const ImgAction = () => {
  return <img src={imgAction} alt="action" />;
};
const Header = ({ table, position }) => {
  const [data, setData] = useState(religieuse().header);
  useEffect(() => {
    switch (position) {
      case "religieuse":
        setData(religieuse().header);
        break;
      case "civile":
        setData(civile().header);
        break;
      case "soiree":
        setData(soiree().header);
        break;
      case "jeunes":
        setData(jeunes().header);
        break;
      case "brunch":
        setData(brunch().header);
        break;

      default:
        break;
    }
  }, [position]);
  return (
    <div className="header">
      <div className="first">
        <DashboardTitle img={data.img} title={data.title} />
        <div className="underline"></div>
        <div className="details">
          <div className="premier">
            <img src={calend} alt="calendrier" />
            <span>{data.date}</span>
            <span>A partir de {data.hour} h</span>
          </div>
          <div className="deuxieme">
            <img src={lieu} alt="position" />
            <span>{data.lieu}</span>
            <span>{data.secondLieu}</span>
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
            <p>{data.programmesNombre}</p>
          </div>
        </div>
        <div className="deuxieme child">
          <div className="title">
            <span>Invite</span>
            <img src={people} alt="people" />
          </div>
          <div className="content">
            <p>{data.inviteNombre}</p>
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
