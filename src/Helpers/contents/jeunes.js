import dgj from "../../Assets/img/Icons/dgj.png";
const jeunes = () => {
  const header = {
    img: dgj,
    title: "diner gala pour jeunes",
    date: "le 17 mars 2022",
    hour: "10",
    lieu: "Mosquee Hamsa",
    secondLieu: "Cocody,Abidjan,Cote D'ivoire",
    programmesNombre: 103,
    inviteNombre: 30,
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
      "sylla ibrahim",
      "vip",
      "Parasole Gauche",
      "4",
      "0105060406",
      "brahim@novate.com",
      "FFW5FEWS",
    ],
    [
      "sylla ibrahim",
      "vip",
      "Parasole Gauche",
      "4",
      "0105060406",
      "brahim@novate.com",
      "FFW5FEWS",
    ],
    [
      "sylla ibrahim",
      "vip",
      "Parasole Gauche",
      "4",
      "0105060406",
      "brahim@novate.com",
      "FFW5FEWS",
    ],
    [
      "sylla ibrahim",
      "vip",
      "Parasole Gauche",
      "4",
      "0105060406",
      "brahim@novate.com",
      "FFW5FEWS",
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

export default jeunes;
