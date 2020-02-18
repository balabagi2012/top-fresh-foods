<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>
<script>
import { auth } from "@/firebase";
export default {
  created() {
    auth.signInAnonymously();
  }
};
</script>

<style lang="scss">
html {
  padding: 0;
  margin: 0;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif, 微軟正黑體;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
}
</style>
