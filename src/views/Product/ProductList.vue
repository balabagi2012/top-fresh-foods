<template>
  <div class="home">
    <Navbar/>
    <Banner en="Products" tw="產品介紹" intro="最安心的食品，最用心的保證" img="/images/banner/products.jpg"/>
    <div class="wrap">
      <el-dropdown class="mobile-menu" @command="redirect">
        <el-button type="success" style="width:100%;border-radius:0px">
          {{$route.query.category?$route.query.category:'所有產品'}}
          <i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" v-if="brand[0]">
          <el-dropdown-item
            v-for="(category,index) in brand[0].category||[]"
            :key="index"
            :command="category.name"
          >{{category.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="left-box">
        <SideMenu
          en="Product categories"
          :tw="$route.query.brand+'系列'"
          color="green"
          :category="brand[0]?brand[0].category:[{name:'讀取中'}]"
          :path="`/products/list?brand=${brand[0]?brand[0].name:'讀取中'}`"
        />
      </div>
      <div class="right-box">
        <ItemList :product="product"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>
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

<script>
// @ is an alias to /src
import { firestore } from "@/firebase";
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/SimpleBanner.vue";
import Footer from "@/components/Footer.vue";
import SideMenu from "@/components/SideMenu.vue";
import ItemList from "@/components/ItemList.vue";
export default {
  name: "ProductList",
  created() {
    if (this.$route.query.brand) {
      this.$binding(
        "product",
        firestore
          .collection("product")
          .where("brand", "==", this.$route.query.brand)
      );
      this.$binding(
        "brand",
        firestore
          .collection("brand")
          .where("name", "==", this.$route.query.brand)
      );
    } else {
      this.$binding("product", firestore.collection("product"));
      this.$binding(
        "brand",
        firestore
          .collection("brand")
          .orderBy("name")
          .limit(1)
      );
    }
  },
  data() {
    return {
      product: [],
      brand: [{ name: "讀取中", category: [{ name: "讀取中" }] }]
    };
  },
  methods: {
    redirect(category) {
      this.$router.push({
        path: `/products/list?brand=${
          this.brand[0] ? this.brand[0].name : "讀取中"
        }`,
        query: { category: category || "讀取中" }
      });
    }
  },
  watch: {
    $route() {
      if (this.$route.query.category && this.$route.query.brand) {
        this.$binding(
          "product",
          firestore
            .collection("product")
            .where("brand", "==", this.$route.query.brand)
            .where("category", "==", this.$route.query.category)
        );
      } else {
        this.$binding("product", firestore.collection("product"));
      }
    }
  },
  components: {
    ItemList,
    Navbar,
    Banner,
    SideMenu,
    Footer
  }
};
</script>


