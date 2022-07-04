import crc from "../../Assets/img/Icons/crc.png";
const soiree = () => {
  const header = {
    img: crc,
    title: "diner gala soiree civile",
    date: "le 11 juillet 2022",
    hour: "10",
    lieu: "hotel vitevite",
    secondLieu: "Cocody,Abidjan,Cote D'ivoire",
    programmesNombre: 30,
    inviteNombre: 300,
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
      "karim ibrahim",
      "vip",
      "Parasole Gauche",
      "4",
      "0105060406",
      "brahim@novate.com",
      "FFW5FEWS",
    ],
    [
        "karim ibrahim",
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

export default soiree;
