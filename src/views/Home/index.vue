<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner :advertisement="advertisement"/>
    <identity
      :num="index+1"
      v-for="(identities,index) in mergeIdentity"
      :key="index"
      :identities="identities"
    ></identity>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Loading } from "element-ui";
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Identity from "@/components/Identity.vue";
import { Promise } from "q";
export default {
  name: "home",
  async created() {
    const loading = Loading.service({
      fullscreen: true,
      text: "獲取數據中..."
    });
    await Promise.all([
      this.$binding("advertisement", firestore.collection("advertisement")),
      this.$binding("identity", firestore.collection("identity"))
    ]);
    loading.close();
  },
  data() {
    return {
      advertisement: [],
      identity: []
    };
  },
  computed: {
    mergeIdentity() {
      let data = [];
      for (let i = 0; i < this.identity.length; i++) {
        if (i <= 2 * data.length) {
          data[parseInt(i / 2)] = data[parseInt(i / 2)]
            ? data[parseInt(i / 2)]
            : [];
          data[parseInt(i / 2)].push(this.identity[i]);
        }
      }
      return data;
    }
  },
  components: {
    Navbar,
    Banner,
    Footer,
    Identity
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>


