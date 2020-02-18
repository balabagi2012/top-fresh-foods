<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner en="Quality" tw="安心食材" intro="新鮮 美味 安全 平價" img="/images/banner/quality.jpg"/>
    <!-- <Brand :isDetail="true" v-for="brandInfo in brand" :key="brandInfo['.key']" :brand="brandInfo"></Brand> -->
    <VideoBox :quality="quality"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Brand from "@/components/Brand/Brand.vue";
import Banner from "@/components/SimpleBanner.vue";
import VideoBox from "@/components/VideoBox.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Quality",
  firestore() {
    return {
      brand: firestore.collection("brand"),
      quality: firestore.collection("quality").doc("quality")
    };
  },
  components: {
    Navbar,
    Banner,
    VideoBox,
    Brand,
    Footer
  }
};
</script>


