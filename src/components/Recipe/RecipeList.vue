<template>
  <div class="recipes-list">
    <el-row :gutter="40" v-for="(recipesRow,index) in recipesRows" :key="index">
      <el-col :md="12" :sm="24" v-for="recipe in recipesRow" :key="recipe['.key']">
        <div class="item">
          <div class="Img">
            <a :href="`/recipes/info?id=${recipe['.key']}`">
              <img :src="recipe.img_url" alt />
              <p v-text="recipe.intro"></p>
            </a>
          </div>
          <div class="Txt">
            <h3>{{recipe.name}}</h3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ["recipes"],
  computed: {
    recipesRows() {
      const recipesRows = [];
      if (this.recipes.length > 0) {
        for (let i = 0; i < this.recipes.length; i += 2) {
          recipesRows[i / 2] = [];
          this.recipes[i] && recipesRows[i / 2].push(this.recipes[i]);
          this.recipes[i + 1] && recipesRows[i / 2].push(this.recipes[i + 1]);
        }
      }
      return recipesRows;
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .item:not(:first) {
    margin-top: 40px;
  }
}
.item {
  .Img {
    position: relative;
    background-color: #fff;
    overflow: hidden;
    max-height: 347px;
    &:hover {
      &::after {
        bottom: 0;
        opacity: 1;
      }
      a {
        p {
          top: 50%;
          opacity: 1;
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -40%;
      width: 100%;
      height: 100%;
      background-color: rgba(159, 1, 1, 0.95);
      opacity: 0;
      pointer-events: none;
      transition: all 0.5s ease-in-out;
    }
    a {
      display: block;
      width: 100%;
      color: #4f5c67;
      position: relative;
      transition: all 0.4s ease;
      img {
        display: block;
        width: 100%;
        backface-visibility: hidden;
        border: 0;
      }
      p {
        overflow-wrap: break-word;
        position: absolute;
        left: 0px;
        top: 40%;
        transform: translateY(-50%);
        z-index: 2;
        margin: 10px 35px;
        line-height: 27px;
        height: 108px;
        font-size: 15px;
        color: #fff;
        text-align: center;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        pointer-events: none;
      }
    }
  }
}
</style>

