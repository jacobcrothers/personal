// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Angular',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Vue',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.js',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Laravel',
    competency: 5,
    category: ['Web Development', 'PHP'],
  },
  {
    title: 'CodeIgniter',
    competency: 5,
    category: ['Web Development', 'PHP'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Django',
    competency: 5,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'TailwindCSS',
    competency: 5,
    category: ['Web Development', 'CSS'],
  },
  {
    title: 'SmartContract',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'NFT',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Defi',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Dex',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Amazon Web Services',
    competency: 5,
    category: ['Web Development', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
