import { ACED_Mohammed_Reda, azza_mohammed, NadiaElouali } from '../assets/images';

const navBarElementsLanding = [
  {
      to: 'home',
      title: 'Home',
  },
  {
      to: 'modules',
      title: 'Courses',
  },
  {
      to: 'enseignants',
      title: 'Professors',
  },
  {
      to: 'more-info',
      title: 'About Us',
  },
]

const navBarElementsUser = [
  {
      to: 'home',
      title: 'Home',
  },
  {
      to: 'evaluation',
      title: 'Assessment',
  },
  {
      to: 'communication',
      title: 'Communication',
  },
  {
      to: 'profil',
      title: 'Profile',
  },
]

const navBarElementsAdmin = [
  {
      to: 'home',
      title: 'Home',
  },
  {
      to: 'utilisateurs',
      title: 'Users',
  },
  {
      to: 'communication',
      title: 'Communication',
  },
  {
      to: 'promo',
      title: 'Promo',
  },
]

const modules = [
  {
    id_module: 0,
    'nom module': 'ACSI',
    'nom promo': '1er annee classe superieur',
    niveau: '1CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Malki',
    specialite: '',
  },
  {
    id_module: 1,
    'nom module': 'Architecture ',
    'nom promo': '2eme annee classe preparatoire',
    'niveau': '2CP',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Kazi-Tani',
    specialite: '',
  },
  {
    id_module: 3,
    'nom module': 'Analyse numérique',
    'nom promo': '1er annee classe preparatoire',
    'niveau': '1CP',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Amroun',
    specialite: '',
  },
  {
    id_module: 4,
    'nom module': 'Machine Learning',
    'nom promo': '2er annee classe superieur',
    'niveau': '2CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr x',
    specialite: 'IASD',
  },
  {
    id_module: 5,
    'nom module': 'module',
    'nom promo': '3er annee classe superieur',
    'niveau': '3CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr y',
    specialite: 'ISI',
  },
]

const enseignants = [
  {
    id_enseignant: 0,
    nom: 'Mr ACED Mohammed Reda',
    email: 'm.aced@esi-sba.dz',
    telephone: '0***',
    statut: 'Maître Assistant A',
    modules: ['Electronique Fondamentale 1', 'Electronique 2'],
    image: ACED_Mohammed_Reda
  },
  {
    id_enseignant: 1,
    nom: 'Mr AZZA Mohammed',
    email: 'm.azza@esi-sba.dz',
    telephone: '0***',
    statut: 'Maître de conférences B',
    modules: ["Introduction au Système d'exploitation 1", 'Réseaux 1', 'Réseaux 2'],
    image: azza_mohammed
  },
  {
    id_enseignant: 1,
    nom: 'Mrs ELOUALI Nadia',
    email: 'n.elouali@esi-sba.dz',
    telephone: '0***',
    statut: 'Maître de conférences A',
    modules: ["Interaction Homme-Machine", 'Développement Mobile', 'Algorithmique et structures de données dynamiques (ESI-SBA - 2015-2017)', 'Algorithmique et structures de données statiques (ESI-SBA -2015-2017)', 'Génie Logiciel (ESI-SBA - 2017-2018)'],
    image: NadiaElouali
  },
]



const moreInfoElements = [
  {
    element: 'students',
    number: 1200,
  },
  {
    element: 'employed students',
    number: 2000,
  },
  {
    element: 'professors',
    number: 100,
  },
  {
    element: 'courses',
    number: 1200,
  },
  {
    element: 'years experience',
    number: 500,
  },
]

export { enseignants, modules, moreInfoElements, navBarElementsAdmin, navBarElementsLanding, navBarElementsUser };

