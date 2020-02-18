<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner en="Products" tw="產品介紹" intro="豐富您的味蕾  保證安心" img="/images/banner/products.jpg"/>
    <Brand :isDetail="false" v-for="brandInfo in brand" :key="brandInfo['.key']" :brand="brandInfo"></Brand>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Brand from "@/components/Brand/Brand.vue";
import Banner from "@/components/SimpleBanner.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  firestore() {
    return {
      brand: firestore.collection("brand")
    };
  },
  components: {
    Navbar,
    Banner,
    Brand,
    Footer
  }
};
</script>


