<template>
  <div class="contact">
      <img src="../assets/meeting.png">
      <div class="text">
        <h1 class="title" v-html="this.jobs"></h1>
        <h4 class="subtitle" v-html="this.contact"></h4>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Contact',
  computed: {
    ...mapGetters(['jobs', 'contact']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
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

h1, h4 {
  margin: 0;
}

img {
  width: 40vw;
  height: auto;
}

.text {
  text-align: left;
  text-align: -webkit-left;
  margin-right: 40px;
}

h4 >>> a {
  color: #ffffff;
}

h4 >>> a {
  color: #ffffff;
}

h1 >>> span {
  text-decoration: underline;
}
</style>
