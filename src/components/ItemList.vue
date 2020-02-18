<template>
  <div class="item-list">
    <el-row :gutter="0" v-for="(productRow,index) in products" :key="index">
      <el-col :md="8" :sm="24" :gutters="0" v-for="(productInfo,key) in productRow" :key="key">
        <div class="item">
          <div class="Img">
            <a :href="`/products/info?id=${productInfo['.key']}`">
              <img :src="productInfo.img_url" alt />
              <p>{{productInfo.intro}}</p>
            </a>
          </div>
          <div class="Txt">
            <h3>{{productInfo.name}}</h3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    products() {
      const products = [];
      if (this.product.length > 0) {
        for (let i = 0; i < this.product.length; i += 3) {
          products[i / 3] = [];
          this.product[i] && products[i / 3].push(this.product[i]);
          this.product[i + 1] && products[i / 3].push(this.product[i + 1]);
          this.product[i + 2] && products[i / 3].push(this.product[i + 2]);
        }
      }
      return products;
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .item:not(:first) {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.item {
  .Img {
    position: relative;
    background-color: #fff;
    overflow: hidden;
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
      background-color: rgba(16, 34, 50, 0.95);
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
        height: auto;
        backface-visibility: hidden;
        border: 0;
      }
      p {
        // padding: 0 35px;
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

