<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner en="Recipes" tw="精選食譜" intro="在這裡人人都是總鋪師" img="/images/banner/recipes.jpg"/>
    <HotRecipes :isDetail="true" :hotRecipes="hotRecipes"></HotRecipes>
    <div class="wrap">
      <el-dropdown class="mobile-menu" @command="redirect">
        <el-button type="success" style="width:100%;border-radius:0px">
          {{$route.query.category?$route.query.category:'所有食譜'}}
          <i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" v-if="category">
          <el-dropdown-item
            v-for="(category,index) in category"
            :key="index"
            :command="category.name"
          >{{category.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="left-box">
        <SideMenu en="RECIPES CATEGORIES" tw="主題食譜" color="yellow" :category="category"/>
      </div>
      <div class="right-box">
        <RecipeList :recipes="recipes"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import HotRecipes from "@/components/HotRecipes.vue";
import Banner from "@/components/SimpleBanner.vue";
import Footer from "@/components/Footer.vue";
import SideMenu from "@/components/SideMenu.vue";
import RecipeList from "@/components/Recipe/RecipeList.vue";
export default {
  name: "recipes",
  firestore() {
    return {
      category: firestore.collection("recipes_category"),
      hotRecipes: firestore.collection("recipes").where("isHot", "==", true)
    };
  },
  data() {
    return { recipes: [] };
  },
  created() {
    if (this.$route.query.category) {
      this.$binding(
        "recipes",
        firestore
          .collection("recipes")
          .where("category", "==", this.$route.query.category)
      );
    } else {
      this.$binding("recipes", firestore.collection("recipes"));
    }
  },
  methods: {
    redirect(category) {
      this.$router.push({
        path: `/recipes`,
        query: { category: category || "讀取中" }
      });
    }
  },
  watch: {
    $route() {
      if (this.$route.query.category) {
        this.$binding(
          "recipes",
          firestore
            .collection("recipes")
            .where("category", "==", this.$route.query.category)
        );
      } else {
        this.$binding("recipes", firestore.collection("recipes"));
      }
    }
  },
  components: {
    Navbar,
    Banner,
    SideMenu,
    RecipeList,
    HotRecipes,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .wrap {
    .mobile-menu {
      display: block;
      width: 100%;
    }
    .left-box {
      display: none;
    }
    .right-box {
      width: 100%;
    }
  }
}
@media screen and (min-width: 1200px) {
  .wrap {
    display: flex;
    padding: 130px 0 70px;
    .mobile-menu {
      display: none;
    }
    .left-box {
      width: 220px;
    }
    .right-box {
      padding-left: 50px;
      width: calc(100% - 220px);
    }
  }
}
</style>


