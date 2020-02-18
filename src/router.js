import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home/index.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/About/index.vue")
    },
    {
      path: "/news/info",
      name: "newsInfo",
      component: () => import("./views/News/NewsInfo")
    },
    {
      path: "/news",
      name: "news",
      component: () => import("./views/News/News")
    },
    {
      path: "/products/list",
      name: "ProductList",
      component: () => import("./views/Product/ProductList")
    },
    {
      path: "/products/info",
      name: "ProductInfo",
      component: () => import("./views/Product/ProductInfo")
    },
    {
      path: "/products",
      name: "products",
      component: () => import("./views/Product/Products")
    },
    {
      path: "/quality",
      name: "Quality",
      component: () => import("./views/Quality/index.vue")
    },
    {
      path: "/recipes/info",
      name: "RecipeInfo",
      component: () => import("./views/Recipes/RecipeInfo")
    },
    {
      path: "/recipes",
      name: "Recipes",
      component: () => import("./views/Recipes/Recipes")
    }
  ]
});
