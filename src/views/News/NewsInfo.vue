<template>
  <div class="home">
    <Navbar msg="Welcome to Your Vue.js App"/>
    <Banner en="Latest News" tw="最新消息" intro="最安心的食品，最用心的保證" img="/images/banner/news.jpg"/>
    <Article :news="news"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/SimpleBanner.vue";
import Footer from "@/components/Footer.vue";
import Article from "@/components/Article.vue";
export default {
  name: "NewsInfo",
  firestore() {
    return {
      news: firestore.collection("news").doc(this.$route.query.id)
    };
  },
  components: {
    Navbar,
    Banner,
    Footer,
    Article
  }
};
</script>



