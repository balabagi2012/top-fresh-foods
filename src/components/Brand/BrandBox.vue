<template>
  <div class="brandBox">
    <div class="wrap">
      <div class="title">
        <em>Our Brand</em>
        <h3>美味品牌</h3>
      </div>
      <div class="mobile">
        <el-carousel :interval="5000" arrow="always" :height="fullWidth>768?'500px':'650px'">
          <el-carousel-item v-for="(brandInfo,index) in brand" :key="brandInfo['.key']">
            <Brand :isDetail="true" :num="index" :brand="brandInfo"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="desktop">
        <Brand
          :isDetail="true"
          :num="index"
          :brand="brandInfo"
          v-for="(brandInfo,index) in brand"
          :key="brandInfo['.key']"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .brandBox {
    padding: 50px 0 20px;
    .mobile {
      display: block;
      width: 100%;
      height: auto;
    }
    .desktop {
      display: none;
    }
  }
}
@media screen and (min-width: 1200px) {
  .brandBox {
    padding: 120px 0 130px;
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
}
.brandBox {
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 11%;
    .title {
      &::before {
        content: "";
        position: absolute;
        left: -45px;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
        width: 135px;
        height: 135px;
        background-repeat: no-repeat;
        background-image: url("~/assets/images/circle/01.png");
        background-size: contain;
      }
      text-align: left;
      margin-bottom: 90px;
      position: relative;
      z-index: 1;
      em {
        display: block;
        margin-bottom: 7px;
        font-weight: bold;
        font-style: normal;
        color: #000;
        font-size: 38px;
        letter-spacing: -2px;
        font-weight: bold;
        font-family: "Franklin Gothic Medium", "微軟正黑體", cursive;
        line-height: 1;
        text-transform: uppercase;
      }
      h3 {
        font-weight: bold;
        font-size: 20px;
        margin: 0;
        line-height: 1.3;
        letter-spacing: 0.07rem;
      }
    }
  }
}
</style>
<script>
import Brand from "@/components/Brand/Brand.vue";
export default {
  props: ["brand"],
  components: {
    Brand
  },
  data() {
    return {
      fullWidth: 0
    };
  },
  created() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
    };
  }
};
</script>

