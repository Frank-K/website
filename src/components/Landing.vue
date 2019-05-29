<template>
  <div class="landing" v-observe-visibility="{callback: visibilityChanged, once: true,}">
      <transition name="fade">
        <img src="../assets/avatar2.png" v-if="show" style="animation-duration: 1.5s">
      </transition>
      <div class="text">
        <transition name="fade">
          <h1 class="title" v-if="show" style="animation-duration: 1.5s">{{ this.name }}</h1>
        </transition>
        <transition name="fade">
          <h4 class="subtitle" v-if="show" style="animation-duration: 1.5s">{{ this.intro }}</h4>
        </transition>
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
  data() {
    return {
      show: false,
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.show = isVisible;
    },
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
