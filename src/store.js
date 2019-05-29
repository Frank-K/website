import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'Frank Karunaratna',
    intro: 'A software developer based in Toronto',
    bio: 'I\'m currently a Computer Science student at the University of Toronto.',
    courses: 'I\'ve taken courses in Data Structures, Algorithm Design, Software Engineering, Databases, Operating Systems, Parallel Programming, Artificial Intelligence and Web Development.',
    work: 'I also have previous work experience as a Software Developer Intern.',
    experience: 'I interned at <a href="http://modiface.com/">Modiface Inc.</a> in Toronto on the Web Team and Special Projects Team. During my internship I developed full stack applications and REST APIs. I used tools / technologies like Python (Flask), PHP (Lumen, Slim), Node.js + Express.js, Vue.js, MySQL, AWS (RDS, S3, EC2) and CI (Jenkins).',
    projects: 'During my free time I\'ve worked on a variety of projects that can be found on my <a href="https://github.com/Frank-K">github.</a>',
    projects2: 'Some projects I\'ve worked on include a <a href="https://github.com/Frank-K/Chat-Server">chat application</a> using web sockets, a <a href="https://github.com/Frank-K/Shop-API">store api</a> for a hypothetical store using Node.js with Express.js, and an application to detect plagiarism in code using python.',
    jobs: 'I am currently looking for new grad positions starting in <span class"underline">Spring 2020</span>.',
    contact: 'If you would like to contact me or set up a meeting, feel free to send me an email at <a href="mailto:frank.karunaratna@gmail.com">frank.karunaratna@gmail.com</a>',
    footer: 'Created by Frank Karunaratna 🦄',
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    name: state => state.name,
    intro: state => state.intro,
    bio: state => state.bio,
    courses: state => state.courses,
    work: state => state.work,
    experience: state => state.experience,
    projects: state => state.projects,
    projects2: state => state.projects2,
    jobs: state => state.jobs,
    contact: state => state.contact,
    footer: state => state.footer,
  },
});
