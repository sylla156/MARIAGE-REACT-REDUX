import bch from "../../Assets/img/Icons/brunch.png";
const brunch = () => {
  const header = {
    img: bch,
    title: "brunch",
    date: "le 22 mai 2022",
    hour: "10",
    lieu: "Mosquee Hamsa",
    secondLieu: "Cocody,Abidjan,Cote D'ivoire",
    programmesNombre: 15,
    inviteNombre: 15,
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
      "toure aline",
      "other",
      "table droite",
      "1",
      "0105060406",
      "aline@gmail.com",
      "50540",
    ],
    [
      "toure aline",
      "other",
      "table droite",
      "1",
      "0105060406",
      "aline@gmail.com",
      "50540",
    ],
    [
      "toure aline",
      "other",
      "table droite",
      "1",
      "0105060406",
      "aline@gmail.com",
      "50540",
    ],
    [
      "toure aline",
      "other",
      "table droite",
      "1",
      "0105060406",
      "aline@gmail.com",
      "50540",
    ],
    [
      "toure aline",
      "other",
      "table droite",
      "1",
      "0105060406",
      "aline@gmail.com",
      "50540",
    ],
    [
      "toure aline",
      "other",
      "table droite",
      "1",
      "0105060406",
      "aline@gmail.com",
      "50540",
    ],
  ];

  const headGroupe = ["Libelle du groupe", "invite du groupe", "action"];
  const bodyGroupe = [
    ["famille", "4"],
    ["famille", "4"],
    ["famille", "4"],
    ["famille", "4"],
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
      "jeux",
      "juste un peu de data",
      "05-22-2022",
      "06-22-2022",
      "anniversaire",
    ],
    [
      "jeux",
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

export default brunch;
