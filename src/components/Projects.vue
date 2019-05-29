<template>
  <div class="projects">
      <div class="text">
        <h4 class="title" v-html="this.projects"></h4>
        <h5 class="subtitle" v-html="this.projects2"></h5>
      </div>
      <img src="../assets/cafe.png">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Projects',
  computed: {
    ...mapGetters(['projects', 'projects2']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 3vw;
}

.subtitle {
  font-size: 1.5vw;
}

h4, h5 {
  margin: 0;
}

img {
  width: 40vw;
  height: auto;
}

.text {
  margin-left: 20px;
  text-align: right;
  text-align: -webkit-right;
}

h4 >>> a, h5 >>> a {
    color: #ffffff;
}

h4 >>> a, h5 >>> a:visited {
    color: #ffffff;
}
</style>
