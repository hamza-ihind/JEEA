function generateFiles(type, courseId, level, semester, title, count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `${type} ${index + 1}`,
    path: `/pdf/${level}/${semester}/${title}/${type}/${type}_${index + 1}.pdf`,
  }));
}

function generateCourse(
  courseId,
  title,
  teacher,
  description,
  tags,
  image,
  chapters
) {
  return {
    courseId,
    title,
    teacher,
    description,
    tags,
    image,
    files: [
      {
        type: "cours",
        files: generateFiles(
          "Cours",
          courseId,
          tags[0],
          tags[1],
          title,
          chapters.length
        ),
      },
      {
        type: "TD",
        files: generateFiles(
          "TD",
          courseId,
          tags[0],
          tags[1],
          title,
          chapters.length
        ),
      },
      {
        type: "DS",
        files: generateFiles(
          "DS",
          courseId,
          tags[0],
          tags[1],
          title,
          chapters.length
        ),
      },
    ],
    chapters: chapters.map((chapter, index) => ({
      id: index + 1,
      title: `Chapitre ${index + 1}`,
    })),
  };
}

const cp1_modules = [
  generateCourse(
    1,
    "Electrostatique",
    "Driss Agliz",
    "L'électrostatique étudie les interactions entre charges électriques au repos, régies par la loi de Coulomb, avec diverses applications industrielles.",
    ["CP1", "S1"],
    "/courses/electrostatique.jpg",
    Array(3)
  ),
  generateCourse(
    2,
    "Analyse 1",
    "Said Taarabti",
    "Le module d'analyse 1 couvre les suites réelles, les nombres réels et les fonctions des variables réelles, fondamentaux en analyse mathématique.",
    ["CP1", "S1"],
    "/courses/analyse_1.jpg",
    Array(4)
  ),
  generateCourse(
    3,
    "Magnetostatique",
    "Abdelfattah Narjis",
    "Étude des champs magnétiques statiques, leurs interactions et applications, notamment en magnétisme des matériaux et électrotechnique.",
    ["CP1", "S1"],
    "/courses/magnetostatique.jpg",
    Array(3)
  ),
  generateCourse(
    4,
    "Mécanique du point",
    "Abdellah Tihane",
    "Introduction à la mécanique des points, décrivant le mouvement des particules sans considérer les facteurs de masse ou de forme.",
    ["CP1", "S1"],
    "/courses/mecanique_point.jpg",
    Array(3)
  ),
  generateCourse(
    5,
    "Algèbre 1",
    "Abdellah Bnouhachem",
    "Introduction aux structures algébriques, incluant les ensembles, les opérations et leurs propriétés, fondamentales dans l'étude mathématique.",
    ["CP1", "S1"],
    "/courses/algebre_1.jpg",
    Array(3)
  ),
  generateCourse(
    6,
    "Informatique 1",
    "Abdenbi Abenaou",
    "Introduction aux concepts fondamentaux de l'informatique, aux algorithmes et aux bases de la programmation en utilisant un langage de haut niveau.",
    ["CP1", "S1"],
    "/courses/info_1.jpg",
    Array(3)
  ),
  generateCourse(
    7,
    "Analyse 2",
    "Hicham Mahdioui",
    "Approfondissement des concepts d'analyse, y compris les séries, les fonctions vectorielles et les équations différentielles, avec des applications variées.",
    ["CP1", "S2"],
    "/courses/analyse_2.jpg",
    []
  ),
  generateCourse(
    8,
    "Algèbre 2",
    "Lahcen Taoufiq",
    "Étude avancée des structures algébriques, telles que les groupes, les anneaux et les corps, avec des applications en théorie des nombres et en cryptographie.",
    ["CP1", "S2"],
    "/courses/algebre_2.jpg",
    []
  ),
  generateCourse(
    9,
    "Electrocinétique 1",
    "Wissam Jenkal",
    "Introduction à l'électrocinétique, couvrant les circuits électriques, les lois de Kirchhoff et les circuits RC, RL et RLC.",
    ["CP1", "S2"],
    "/courses/electrocinetique_1.jpg",
    []
  ),
  generateCourse(
    10,
    "Electrocinétique 2",
    "Marouane Elazzaoui",
    "Étude approfondie des phénomènes électriques, y compris les champs électromagnétiques, les équations de Maxwell et les ondes électromagnétiques.",
    ["CP1", "S2"],
    "/courses/electrocinetique_2.jpg",
    []
  ),
  generateCourse(
    11,
    "Chimie Générale",
    "Rachid Salghi",
    "Introduction aux concepts de base de la chimie, y compris la structure atomique, les liaisons chimiques, les réactions chimiques et les solutions.",
    ["CP1", "S2"],
    "/courses/chimie.jpg",
    []
  ),
  generateCourse(
    12,
    "Matlab et Maple",
    "Abdenbi Abenaou",
    "Introduction à l'utilisation des logiciels Matlab et Maple pour la résolution de problèmes mathématiques et la visualisation de données.",
    ["CP1", "S2"],
    "/courses/matlab_maple.jpg",
    []
  ),
];

const cp2_modules = [
  generateCourse(
    13,
    "Electronique Analogique",
    "Samira Chabaa",
    "Étude des circuits électroniques analogiques, y compris les amplificateurs, les filtres et les oscillateurs, avec des applications dans l'électronique de puissance et l'électronique analogique.",
    ["CP2", "S3"],
    "/courses/electronique.jpg",
    Array(3)
  ),
  generateCourse(
    14,
    "Thermodynamique",
    "Hicham Meftah",
    "Introduction à la thermodynamique, couvrant les concepts de base tels que les lois de la thermodynamique, les cycles thermodynamiques et les transferts de chaleur.",
    ["CP2", "S3"],
    "/courses/thermodynamique.jpg",
    Array(3)
  ),
  generateCourse(
    15,
    "Statique Des Fluides",
    "Mbarek Feddaoui",
    "Étude des fluides au repos, y compris la pression, les forces exercées par les fluides et les applications pratiques en génie civil et en génie mécanique.",
    ["CP2", "S3"],
    "/courses/statique_fluides.jpg",
    Array(3)
  ),
  generateCourse(
    16,
    "Analyse 3",
    "Lahcen Taoufiq",
    "Étude approfondie des fonctions de plusieurs variables, des intégrales multiples et de leurs applications en physique, en ingénierie et en économie.",
    ["CP2", "S3"],
    "/courses/analyse_3.jpg",
    Array(3)
  ),
  generateCourse(
    17,
    "Topologie dans R",
    "Hicham Mahdioui",
    "Introduction à la topologie des espaces métriques, en mettant l'accent sur les concepts de continuité, de compacité et de convergence.",
    ["CP2", "S3"],
    "/courses/topologie.jpg",
    Array(3)
  ),
  generateCourse(
    18,
    "Mécanique du Solide",
    "Hamid Essabir",
    "Étude des déformations et des contraintes dans les solides, en mettant l'accent sur les lois de comportement des matériaux et les applications en génie civil et en mécanique des matériaux.",
    ["CP2", "S3"],
    "/courses/mecanique_solide.jpg",
    Array(3)
  ),
  generateCourse(
    19,
    "Electromagnétisme",
    "Abella Bouaddi",
    "Étude des phénomènes électromagnétiques, y compris les champs électriques et magnétiques, les équations de Maxwell et les ondes électromagnétiques.",
    ["CP2", "S4"],
    "/courses/electromagnetisme.jpg",
    Array(3)
  ),
  generateCourse(
    20,
    "Optique",
    "Abdellah Tihane",
    "Introduction à l'optique géométrique et ondulatoire, couvrant la réflexion, la réfraction, la diffraction et les interférences de la lumière.",
    ["CP2", "S4"],
    "/courses/optique.jpg",
    Array(3)
  ),
  generateCourse(
    21,
    "Analyse 4",
    "Hicham Boujaoui",
    "Étude avancée des concepts d'analyse, y compris les séries de Fourier, les transformées de Laplace et les équations aux dérivées partielles.",
    ["CP2", "S4"],
    "/courses/analyse_4.jpg",
    Array(3)
  ),
  generateCourse(
    22,
    "Analyse numérique",
    "Hicham Boujaoui",
    "Introduction à l'analyse numérique, couvrant les méthodes d'approximation, l'interpolation, l'intégration numérique et la résolution numérique d'équations différentielles.",
    ["CP2", "S4"],
    "/courses/analyse_numerique.jpg",
    Array(3)
  ),
  generateCourse(
    23,
    "Probabilités",
    "Ghizlane Lakhnati",
    "Introduction aux concepts de base des probabilités, y compris les événements, les espaces d'échantillonnage, les distributions de probabilité et les variables aléatoires.",
    ["CP2", "S4"],
    "/courses/proba.jpg",
    Array(3)
  ),
  generateCourse(
    24,
    "Programmation C",
    "Wissam Jenkal",
    "Introduction à la programmation en langage C, couvrant les structures de contrôle, les fonctions, les pointeurs et la gestion de la mémoire.",
    ["CP2", "S4"],
    "/courses/programmation_c.jpg",
    Array(3)
  ),
  generateCourse(
    25,
    "DAO",
    "Lahoucine Belarche",
    "Introduction à la conception assistée par ordinateur (CAO) et aux logiciels de dessin technique, en mettant l'accent sur les techniques de dessin et les principes de conception en ingénierie.",
    ["CP2", "S4"],
    "/courses/dao.jpg",
    Array(3)
  ),
  generateCourse(
    26,
    "Matériaux",
    "Mohamed Barbachi",
    "Étude de la science des matériaux, couvrant la structure, les propriétés et les applications des matériaux en ingénierie.",
    ["CP2", "S4"],
    "/courses/materiaux.jpg",
    Array(3)
  ),
  generateCourse(
    27,
    "Economie Et Organisation",
    "Amina Tourabi",
    "Introduction aux principes économiques et aux structures organisationnelles, en mettant l'accent sur la gestion d'entreprise et les processus de prise de décision.",
    ["CP2", "S4"],
    "/courses/economie.jpg",
    Array(3)
  ),
  generateCourse(
    28,
    "Statistiques",
    "Ghizlane Lakhnati",
    "Introduction à la conception assistée par ordinateur (DAO), en mettant l'accent sur l'utilisation de logiciels de modélisation pour la conception de pièces et d'assemblages mécaniques.",
    ["CP2", "S4"],
    "/courses/statistiques.jpg",
    Array(3)
  ),
];

export { cp1_modules, cp2_modules };
