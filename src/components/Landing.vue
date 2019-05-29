<template>
  <div class="landing">
      <img src="../assets/avatar2.png">
      <div class="text">
        <h1 class="title">{{ this.name }}</h1>
        <h4 class="subtitle">{{ this.intro }}</h4>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Landing',
  computed: {
    ...mapGetters(['name', 'intro']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing {
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
  font-size: 6vw;
}

.subtitle {
  font-size: 1.5vw;
}

h1, h4 {
  margin: 0;
}

img {
  width: 25vw;
  height: auto;
}

.text {
  text-align: right;
  text-align: -webkit-right;
  margin-right: 20px;
}
</style>
