import crc from "../../Assets/img/Icons/crc.png";

const civile = () => {
  const header = {
    img: crc,
    title: "ceremonie civile",
    date: "le 31 decembre 2022",
    hour: "10",
    lieu: "Hotel ivoire",
    secondLieu: "Cocody,Abidjan,Cote D'ivoire",
    programmesNombre: 1000,
    inviteNombre: 6000,
  };
  const headList = [
    "nom et prenoms",
    "tags",
    "cote/table",
    "presence",
    "guess",
    "telephone",
    "identifiant",
    "action",
  ];
  const bodyList = [
    [
      "kamara yasmine",
      "parent",
      "Parasole centre",
      "4",
      "7896548512",
      "yasmine@gmail.com",
      "FDFSDF3F",
    ],
    [
      "kamara yasmine",
      "parent",
      "Parasole Gauche",
      "4",
      "7896548512",
      "yasmine@gmail.com",
      "FDFSDF3F",
    ],
    [
      "kamara yasmine",
      "parent",
      "Parasole Gauche",
      "4",
      "7896548512",
      "yasmine@gmail.com",
      "FDFSDF3F",
    ],
    [
      "kamara yasmine",
      "parent",
      "Parasole Gauche",
      "4",
      "7896548512",
      "yasmine@gmail.com",
      "FDFSDF3F",
    ],
  ];

  const headGroupe = ["Libelle du groupe", "invite du groupe", "action"];
  const bodyGroupe = [
    ["travail", "2"],
    ["travail", "2"],
    ["travail", "2"],
    ["travail", "2"],
    ["travail", "2"],
    ["travail", "2"],
  ];

  const headProgrammes = [
    "libelle",
    "description",
    "date du debut",
    "date de fin",
    "nom de l'evenement",
    "action",
  ];
  const bodyProgrammes = [
    [
      "anniversaire",
      "juste un peu de data",
      "05-22-2022",
      "06-22-2022",
      "anniversaire",
    ],
    [
      "anniversaire",
      "juste un peu de data",
      "05-22-2022",
      "06-22-2022",
      "anniversaire",
    ],
    [
      "anniversaire",
      "juste un peu de data",
      "05-22-2022",
      "06-22-2022",
      "anniversaire",
    ],
    [
      "anniversaire",
      "juste un peu de data",
      "05-22-2022",
      "06-22-2022",
      "anniversaire",
    ],
    [
      "anniversaire",
      "juste un peu de data",
      "05-22-2022",
      "06-22-2022",
      "anniversaire",
    ],
  ];

  return {
    header,
    headList,
    bodyList,
    headGroupe,
    bodyGroupe,
    headProgrammes,
    bodyProgrammes,
  };
};

export default civile;
