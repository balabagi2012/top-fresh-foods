<template>
  <div class="bg-white">
    <Navbar/>
    <ProductIntro :product="product"/>
    <RecommendRecipes :product="product"/>
    <Footer/>
  </div>
</template>


<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ProductIntro from "@/components/ProductIntro.vue";
import RecommendRecipes from "@/components/RecommendRecipes.vue";

export default {
  name: "ProductInfo",
  firestore() {
    return {
      product: firestore.collection("product").doc(this.$route.query.id)
    };
  },
  components: {
    ProductIntro,
    RecommendRecipes,
    Navbar,
    Footer
  }
};
</script>


