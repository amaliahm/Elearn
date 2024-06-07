import {
  ACED_Mohammed_Reda, NadiaElouali, acsi,
  amar_bensaber_djamel,
  analyse, archi, azza_mohammed, bdd,
  bendaoud_fayssal, benslimane,
  cloud_computing,
  kechar_mohamed, mimoun_malki,
  reseau, se,
  serhane_oussama, si_mohamed_nasreddine,
  thl
} from '../assets/images';

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
      to: '/user/home',
      title: 'Home',
  },
  {
      to: '/user/modules',
      title: 'Courses',
  },
  {
      to: '/user/assessment',
      title: 'Assessment',
  },
  {
      to: '/user/communication',
      title: 'Communication',
  },
  {
      to: '/user/profil',
      title: 'Profile',
  },
]

const navBarElementsAdmin = [
  {
      to: '/admin/home',
      title: 'Home',
  },
  {
      to: '/admin/utilisateurs',
      title: 'Users',
  },
  {
      to: '/admin/communication',
      title: 'Communication',
  },
  {
      to: '/admin/promo',
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
    image: analyse,
  },
  {
    id_module: 1,
    'nom module': 'Architecture ',
    'nom promo': '2éme annee classe preparatoire',
    'niveau': '2CP',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Kazi-Tani',
    specialite: '',
    image: archi,
  },
  {
    id_module: 0,
    'nom module': 'ACSI',
    'nom promo': '1er annee cycle superieur',
    niveau: '1CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Malki',
    specialite: '',
    image: acsi,
  },
  {
    id_module: 4,
    'nom module': 'Réseaux avancés',
    'nom promo': '2éme annee cycle superieur',
    'niveau': '2CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Abdelkader AMRANE',
    specialite: 'ISI',
    image: reseau,
  },
  {
    id_module: 5,
    'nom module': 'Cloud Computing',
    'nom promo': '3éme annee cylce superieur',
    'niveau': '3CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Miloud KHALDI',
    specialite: 'ISI',
    image: cloud_computing,
  },
  {
    id_module: 6,
    'nom module': 'Base de données Avancées 2',
    'nom promo': '3éme annee cycle superieur',
    'niveau': '3CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Samir AWAD',
    specialite: 'SIW',
    image: bdd,
  },
  {
    id_module: 7,
    'nom module': 'Systeme d\'Exploitation 1',
    'nom promo': '1er annee cycle superieur',
    'niveau': '1CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mrs Manel BABA-AHMED',
    specialite: '',
    image: se,
  },
  {
    id_module: 8,
    'nom module': 'Théorie des Langages',
    'nom promo': '1er annee cycle superieur',
    'niveau': '1CS',
    'annee universitaire': '2023/2024',
    'responsable du module': 'Mr Mohamed KECHAR',
    specialite: '',
    image: thl,
  },
]

const enseignants = [
  {
    id_enseignant: 5,
    nom: 'Mr KECHAR Mohamed',
    email: 'm.kechar@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître de conférences A',
    modules: ["Théorie de langages et Compilation", ' Administration Bases De Données'],
    image: kechar_mohamed
  },
  {
    id_enseignant: 0,
    nom: 'Mr ACED Mohammed Reda',
    email: 'm.aced@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître Assistant A',
    modules: ['Electronique Fondamentale 1', 'Electronique 2'],
    image: ACED_Mohammed_Reda
  },
  {
    id_enseignant: 5,
    nom: 'Mr BENSLIMANE Sidi Mohammed',
    email: 's.benslimane@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Professeur',
    modules: ["Introduction au Génie Logiciel 2023-2024", 'Langages et Outils du Web 2016-2024', 'XML et les Services Web 2010-2015', 'Introduction aux systèmes d’information 2001-2011'],
    image: benslimane
  },
  {
    id_enseignant: 1,
    nom: 'Mr AZZA Mohammed',
    email: 'm.azza@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître de conférences B',
    modules: ["Introduction au Système d'exploitation 1", 'Réseaux 1', 'Réseaux 2'],
    image: azza_mohammed
  },
  {
    id_enseignant: 6,
    nom: 'Mr MALKI Mimoun',
    email: 'm.malki@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Professeur',
    modules: ["Bases de données", 'Ontologie et Web sémantique', 'Méthodes de conception avancées', 'Méthodologie de la recherche scientifique', 'Introduction aux systèmes d’information', 'Analyse et conception de systèmes d\’information', 'Génie logiciel'],
    image: mimoun_malki
  },
  {
    id_enseignant: 2,
    nom: 'Mrs ELOUALI Nadia',
    email: 'n.elouali@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître de conférences A',
    modules: ["Interaction Homme-Machine", 'Développement Mobile', 'Algorithmique et structures de données dynamiques (ESI-SBA - 2015-2017)', 'Algorithmique et structures de données statiques (ESI-SBA -2015-2017)', 'Génie Logiciel (ESI-SBA - 2017-2018)'],
    image: NadiaElouali
  },
  {
    id_enseignant: 3,
    nom: 'Mr AMAR BENSABER Djamel',
    email: 'd.amarbensaber@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Professeur',
    modules: ["Gestion de project", 'Introduction au Génie Logiciel'],
    image: amar_bensaber_djamel
  },
  {
    id_enseignant: 4,
    nom: 'Mr BENDAOUD Fayssal',
    email: 'f.bendaoud@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître de conférences A',
    modules: ["Introduction à la sécurité informatique", 'Internet des objets ', '-Ingénierie de connaissances', 'Systèmes répartis', 'Sécurité des systèmes et réseaux (2SC ISI)'],
    image: bendaoud_fayssal
  },
  {
    id_enseignant: 7,
    nom: 'Mr SERHANE Oussama',
    email: 'o.serhane@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître de conférences B',
    modules: ["Programmation orientée objet"],
    image: serhane_oussama
  },
  {
    id_enseignant: 8,
    nom: 'Mr SI MOHAMED Nasreddine',
    email: 'n.simohamed@esi-sba.dz',
    telephone: '0555555555',
    statut: 'Maître de conférences A',
    modules: ["Algorithmique et structures de données Statiques", "Algorithmique et structures de données Dynamiques", "Architecture des ordinateurs", "Programmation Logique (Prolog)", "Systèmes experts", "Intelligence Artificielle", "Système d’Information Géographique (SIG)"],
    image: si_mohamed_nasreddine
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
    nom: 'groupe general',
    annee:'2023-2024',
    student: 678,
    question: 15,
    answer: 64,
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

const participate_quiz = [{
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      id: 0,
      question: 'Which function is used to serialize an object into a JSON string in Javascript?',
      choices: ['stringify()', 'parse()', 'convert()', 'None of the above', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
    },
    {
      id: 1,
      question: 'Which of the following keywords is used to define a variable in Javascript?',
      choices: ['var', 'let', 'var and let', 'None of the above', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'var and let',
    },
    {
      id: 2,
      question:
        'Which of the following methods can be used to display data in some form using Javascript?',
      choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      id: 3,
      question: 'How can a datatype be declared to be a constant type?',
      choices: ['const', 'var', 'let', 'constant', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'const',
    },
  ],
}]


const old_quiz = [{
  id: 0,
  nom: 'Quiz n=°2',
  totalQuestions: 4,
  perQuestionScore: 5,
  date: '2024-05-08',
  Duration: 15,
  time: 20,
  score: -5,
  correctAnswers: 1,
  wrongAnswers: 2,
  Oanswer: 1,
  questions: [
    {
      id: 0,
      question: 'Which function is used to serialize an object into a JSON string in Javascript?',
      choices: ['stringify()', 'parse()', 'convert()', 'None of the above', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'stringify()',
      choosenAnswer: 'parse()',
    },
    {
      id: 1,
      question: 'Which of the following keywords is used to define a variable in Javascript?',
      choices: ['var', 'let', 'var and let', 'None of the above', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'var and let',
      choosenAnswer: 'I do not know',
    },
    {
      id: 2,
      question:
        'Which of the following methods can be used to display data in some form using Javascript?',
      choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'All of the above',
      choosenAnswer: 'console.log()',
    },
    {
      id: 3,
      question: 'How can a datatype be declared to be a constant type?',
      choices: ['const', 'var', 'let', 'constant', 'I do not know'],
      type: 'MCQs',
      correctAnswer: 'const',
      choosenAnswer: 'const',
    },
  ],
}]


export { enseignants, groupe_communication, modules, moreInfoElements, navBarElementsAdmin, navBarElementsLanding, navBarElementsUser, old_quiz, participate_quiz, promo, question, questions, quizes, tags };

