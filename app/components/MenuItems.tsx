export const menuItems = [
  {
    title: "ACCEUIL",
    link: "/",
  },
  {
    title: "LE CENTRE",
    link: "/centre",
    submenu: [
      { title: "Consultations Médicales", link: "/centre/consultations" },
    ],
  },
  {
    title: "ÉPILATION LASER",
    link: "/laser",
    submenu: [
      {
        title: "Hommes",
        link: "/laser/hommes",
        submenu: [
          { title: "Visage", link: "/laser/hommes/visage" },
          { title: "Torse", link: "/laser/hommes/torse" },
          { title: "Dos", link: "/laser/hommes/dos" },
          { title: "Bras", link: "/laser/hommes/bras" },
          { title: "Jambes", link: "/laser/hommes/jambes" },
          { title: "Aisselles", link: "/laser/hommes/aisselles" },
          { title: "Maillot", link: "/laser/hommes/maillot" },
        ],
      },
      {
        title: "Femmes",
        link: "/laser/femmes",
        submenu: [
          { title: "Visage", link: "/laser/femmes/visage" },
          { title: "Bras", link: "/laser/femmes/bras" },
          { title: "Aisselles", link: "/laser/femmes/aisselles" },
          { title: "Jambes", link: "/laser/femmes/jambes" },
          { title: "Maillot", link: "/laser/femmes/maillot" },
          { title: "Dos", link: "/laser/femmes/dos" },
        ],
      },
    ],
  },
  {
    title: "INJECTION",
    link: "/injection",
  },
  {
    title: "QUALITÉ DE PEAU",
    link: "/qualiteDePeau",
  },
  {
    title: "HYDRAFACIAL",
    link: "/hydrafacial",
  },
  {
    title: "TARIFS",
    link: "/tarifs",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
];
