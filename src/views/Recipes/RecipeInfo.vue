<template>
  <div class="receipeInfo">
    <Navbar/>
    <RecipeInfo :recipe="recipe"/>
    <Preparation :recipe="recipe"/>
    <RecipeSteps :recipe="recipe"/>
    <Footer/>
  </div>
</template>
<style lang="scss" scoped>
.recipeInfo {
  background-color: #fff;
}
</style>
<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import RecipeInfo from "@/components/Recipe/RecipeInfo.vue";
import Preparation from "@/components/Recipe/Preparation.vue";
import RecipeSteps from "@/components/Recipe/RecipeSteps.vue";
import Footer from "@/components/Footer.vue";

export default {
  firestore() {
    return {
      recipe: firestore.collection("recipes").doc(this.$route.query.id)
    };
  },
  components: {
    Navbar,
    RecipeInfo,
    Preparation,
    RecipeSteps,
    Footer
  }
};
</script>


