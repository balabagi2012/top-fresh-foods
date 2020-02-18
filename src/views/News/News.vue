<template>
  <div class="news">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner en="Latest News" tw="最新消息" intro="最優質的食材 創造美食流行" img="/images/banner/news.jpg"/>
    <div class="wrap">
      <el-dropdown class="mobile-menu" @command="redirect">
        <el-button type="success" style="width:100%;border-radius:0px">
          {{$route.query.category?$route.query.category:'所有消息'}}
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
        <SideMenu en="News categories" tw="主題類別" color="yellow" :category="category" path="/news"/>
      </div>
      <div class="right-box">
        <NewsList :news="news"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/SimpleBanner.vue";
import Footer from "@/components/Footer.vue";
import SideMenu from "@/components/SideMenu.vue";
import NewsList from "@/components/NewsList.vue";
export default {
  name: "home",
  firestore() {
    return {
      category: firestore.collection("news_category")
    };
  },
  data() {
    return { news: [] };
  },
  created() {
    if (this.$route.query.category) {
      this.$binding(
        "news",
        firestore
          .collection("news")
          .where("category", "==", this.$route.query.category)
      );
    } else {
      this.$binding("news", firestore.collection("news"));
    }
  },
  methods: {
    redirect(category) {
      this.$router.push({
        path: `/news`,
        query: { category: category || "讀取中" }
      });
    }
  },
  watch: {
    $route() {
      if (this.$route.query.category) {
        this.$binding(
          "news",
          firestore
            .collection("news")
            .where("category", "==", this.$route.query.category)
        );
      } else {
        this.$binding("news", firestore.collection("news"));
      }
    }
  },
  components: {
    Navbar,
    Banner,
    Footer,
    SideMenu,
    NewsList
  }
};
</script>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .news {
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
}
@media screen and (min-width: 1200px) {
  .news {
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
}
</style>


