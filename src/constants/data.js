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
      to: '/home/user/assessment',
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
      to: '/home/admin',
      title: 'Home',
  },
  {
      to: 'utilisateurs',
      title: 'Users',
  },
  {
      to: '/home/admin/communication',
      title: 'Communication',
  },
  {
      to: 'promo',
      title: 'Promo',
  },
]

const modules = [
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
    id_module: 1,
    'nom module': 'Architecture ',
    'nom promo': '2eme annee classe preparatoire',
    'niveau': '2CP',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Kazi-Tani',
    specialite: '',
  },
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
    number: 10,
  },
]

const groupe_communication = [
  {
    id: 0,
    nom: '1CS',
    annee:'2023-2024',
    student: 180,
    question: 250,
    answer: 600,
  },
  {
    id: 1,
    nom: '2CS',
    annee:'2023-2024',
    student: 150,
    question: 200,
    answer: 700,
  },
  {
    id: 2,
    nom: '2CP',
    annee:'2023-2024',
    student: 250,
    question: 364,
    answer: 598,
  },
]

const promo = [
  {
    id_promo: 0,
    nom: '1CP 2023-2024',
  },
  {
    id_promo: 0,
    nom: '3CS 2023-2024',
  },
]

const questions = [
  {
    id: 1,
    person: 'person',
    tag: 'Do I have to allow the use of cookies?',
    info:
      'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
    time: 'March 19, 2024, 1:02p.m',
  },
  {
    id: 2,
    person: 'person',
    tag: 'How do I change my My Page password?',
    info:
      'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
    time: 'March 19, 2024, 1:02p.m',
  },
  {
    id: 3,
    person: 'person',
    tag: 'What is BankID?',
    info:
      'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
    time: 'March 19, 2024, 1:02p.m',
  },
  {
    id: 4,
    person: 'person',
    tag: 'Whose birth number can I use?',
    info:
      'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
    time: 'March 19, 2024, 1:02p.m',
  },
  {
    id: 5,
    person: 'person',
    tag: 'When do I recieve a password ordered by letter?',
    info:
      'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
    time: 'March 19, 2024, 1:02p.m',
  },
]

const tags = ['tag1', 'tag2', 'python']

const question = [
  {
    id: 0,
    title: "what's python",
    description: 'please',
    tags: ['tag1', 'tag2'],
    time: '16-03-2024',
    person: 'issam',
    comments: [
      {
        id: 1,
        content: "reponse 1",
        createdAt: "2023-07-04T12:00:00Z",
        agree: 12,
        disagree: 2,
        user: 'person 1',
        replies: []
      },
      {
        id: 2,
        content: "reponse 2",
        createdAt: "2023-07-18T12:00:00Z",
        agree: 12,
        disagree: 2,
        user: 'person 2',
        replies: [
          {
            id: 3,
            content: "reponse pour commentaire 1",
            createdAt: "2023-07-25T12:00:00Z",
            agree: 12,
            disagree: 2,
            replyingTo: "maxblagun",
            user: 'person 1'
          },
          {
            id: 4,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis eveniet qui nobis sint voluptatibus officia obcaecati aliquam cum. Mollitia, adipisci! Nulla corporis similique iusto ullam ad alias veritatis ex voluptatem eveniet non nemo deleniti reprehenderit, harum nisi voluptas excepturi omnis voluptates sed, atque voluptatibus illo nam repellat? Omnis, eius.",
            createdAt: "2023-08-02T12:00:00Z",
            agree: 12, 
            disagree: 2,
            replyingTo: "ramsesmiron",
            user: 'person 3'
          }
        ]
      }
    ]
  }
]

const quizes = [
  {
    id: 0,
    nom: 'Quiz n=°1',
  },
  {
    id: 1,
    nom: 'Quiz n=°2',
  },
  {
    id: 3,
    nom: 'Quiz n=°5',
  },
  {
    id: 4,
    nom: 'Quiz n=°8',
  },
]

export { enseignants, groupe_communication, modules, moreInfoElements, navBarElementsAdmin, navBarElementsLanding, navBarElementsUser, promo, question, questions, quizes, tags };

