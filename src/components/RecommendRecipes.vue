<template>
  <div class="recommend-recipes">
    <div class="wrap">
      <div class="recipes-top">
        <CircleTxt color="green">
          <div slot="en">Recipes</div>
          <div slot="tw">推薦食譜</div>
        </CircleTxt>
        <div class="btn">
          <a href="/recipes">探索美味食譜</a>
        </div>
      </div>
      <RecipeList :recipes="product.recommendRecipes" style="margin: 90px 0;overflow: hidden;"/>
      <div class="recipes-top">
        <CircleTxt color="yellow">
          <div slot="en">DESCRIPTION</div>
          <div slot="tw">產品介紹</div>
        </CircleTxt>
        <el-tabs v-model="activeName" class="table" :stretch="true">
          <el-tab-pane label="產品規格" name="first">
            <div v-html="product.spec">
            </div>
          </el-tab-pane>
          <el-tab-pane label="內容物成分" name="second">
            <div v-html="product.content">
            </div>
          </el-tab-pane>
          <el-tab-pane label="使用與保存" name="third">
            <div v-html="product.save">
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.table {
  .el-tabs__item {
    font-size: 18px;
    font-weight: bold;
    color: #4f5c67;
    &:hover {
      color: #3b445a;
    }
    &.is-active {
      color: #3b445a;
    }
  }
  .el-tabs__active-bar {
    background-color: #009944;
    height: 3px;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .recommend-recipes {
    padding: 80px 0 50px;
    .wrap {
      width: calc(100% - 60px);
      padding: 0 30px;
      .recipes-top {
        display: block;
        .table {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .recommend-recipes {
    padding: 80px 0;
    .wrap {
      .recipes-top {
        display: flex;
        .table {
          margin: 30px 0;
          margin-left: 80px;
          width: 100%;
        }
      }
    }
  }
}
.recommend-recipes {
  position: relative;
  .wrap {
    position: relative;
    .recipes-top {
      position: relative;
      width: 100%;
      .btn {
        width: 100%;
        position: relative;
        text-align: right;
        a {
          position: absolute;
          bottom: 5px;
          right: 0;
          display: block;
          padding: 10px 25px;
          font-size: 16px;
          letter-spacing: 0.2em;
          background-color: #009944;
          color: #fff;
          text-transform: uppercase;
          border-radius: 23px;
        }
      }
    }
  }
}
</style>
<script>
import RecipeList from "@/components/Recipe/RecipeList2.vue";
import CircleTxt from "@/components/CircleTxt.vue";
export default {
  props:['product'],
  data() {
    return {
      activeName: "first"
    };
  },
  methods:{
    handleClick(name){
      console.log(name)
      this.activeName=name
    }
  },
  components: {
    RecipeList,
    CircleTxt
  }
};
</script>


