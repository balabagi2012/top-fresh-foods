<template>
  <div class="product-box">
    <el-dialog :visible.sync="isOpen" class="lightBox" center>
      <div class="Img">
        <img :src="product.img_url" alt>
      </div>
    </el-dialog>
    <div class="wrap">
      <div class="product-intro">
        <el-row>
          <el-col :md="13" :sm="24">
            <div class="albumn">
              <div class="Img">
                <img :src="product.img_url" alt>
              </div>
              <div class="thumbnail">
                <img :src="product.img_url" alt @click="isOpen=true">
              </div>
            </div>
          </el-col>
          <el-col :md="11" :sm="24">
            <div class="Txt">
              <ul class="type">
                <li>{{product.brand}}</li>
                <li>{{product.category}}</li>
              </ul>
              <h1 class="articleTitle">{{product.name}}</h1>
              <p v-text="product.intro"></p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .product-box {
    padding: 0;
    margin-top: 60px;
    .wrap {
      .product-intro {
        .albumn {
          display: block;
          .Img {
            width: 100%;
            img {
              background-color: #fff;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .product-box {
    margin-top: 120px;
    padding: 80px 0;
    .wrap {
      .product-intro {
        .albumn {
          display: flex;
          flex-direction: row;
          .Img {
            width: 80%;
          }
        }
      }
    }
  }
}
.product-box {
  .lightBox {
    display: flex;
    .Img {
      width: 100%;
      text-align: center;
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  .wrap {
    .product-intro {
      display: flex;
      .albumn {
        width: 100%;
        .thumbnail {
          width: 20%;
          margin: 0 20px;
          img {
            width: 100%;
            border: 1px solid #f1f1f1;
            height: auto;
            transition: 0.4s linear;
            &:hover {
              border-color: #22ac38;
              transition: 0.4s linear;
            }
          }
        }
        .Img {
          background-color: #f8f8f8;
          img {
            width: 100%;
          }
        }
      }

      .Txt {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 75px;
        p {
          margin-bottom: 40px;
          margin-top: 0;
          padding-right: 70px;
          font-size: 15px;
          color: #626262;
          letter-spacing: 0.05em;
          line-height: 27px;
          text-align: left;
        }
        .articleTitle {
          padding-bottom: 15px;
          margin-bottom: 20px;
          border-bottom: 1px solid #e5e5e5;
          font-weight: bold;
          font-size: 30px;
          letter-spacing: 0.1em;
        }
        .type {
          display: flex;
          padding-left: 0;
          list-style: none;
          margin: 30px 0 20px;
          li {
            font-size: 15px;
            color: #626262;
            letter-spacing: 0.05em;
            &:not(:first-child) {
              &::before {
                content: "/";
                display: inline-block;
                margin: 0 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  props:['product'],
  data() {
    return {
      isOpen: false
    };
  }
};
</script>


