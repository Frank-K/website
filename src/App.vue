<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <Landing />
    </div>
    <div class="section">
      <Intro />
    </div>
    <div class="section">
      <Work />
    </div>
    <div class="section">
      <Projects />
    </div>
    <div class="section">
      <Contact />
    </div>
    <div class="section fp-auto-height">
      <Footer />
    </div>
  </full-page>
</div>
</template>

<script>
import Landing from './components/Landing.vue';
import Intro from './components/Intro.vue';
import Work from './components/Work.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Landing,
    Intro,
    Work,
    Projects,
    Contact,
    Footer,
  },
  data() {
    return {
      options: {
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        navigation: true,
        sectionsColor: ['#77A6F7', '#F77676', '#F7B476', '#76D0F7', '#F776D5', '#F776D5'],
      },
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
