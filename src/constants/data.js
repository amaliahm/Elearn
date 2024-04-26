import images from './images';

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

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export { awards, cocktails, modules, wines };

