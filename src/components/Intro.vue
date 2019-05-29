<template>
  <div class="intro">
      <div class="text">
        <h4 class="title">{{ this.bio }}</h4>
        <h5 class="subtitle">{{ this.courses }}</h5>
      </div>
      <img src="../assets/home.png">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Intro',
  computed: {
    ...mapGetters(['bio', 'courses']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro {
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
</style>
