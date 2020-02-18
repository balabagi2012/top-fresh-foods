<template>
  <div class="hopeBox">
    <div class="wrap">
      <div class="title">
        <em>We hope</em>
        <h3>我們希望</h3>
      </div>
      <div class="hopeList">
        <div class="mobile">
          <el-carousel :interval="5000" arrow="always" height="550px">
            <el-carousel-item class="item" v-for="hope in thirdPart.hopes" :key="hope.title">
              <div class="Img">
                <img :src="hope.img_url" alt>
              </div>
              <div class="Txt">
                <h3>{{hope.title}}</h3>
                <p>{{hope.intro}}</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <el-row class="swiper-wrapper desktop">
          <el-col :md="6" class="item" v-for="hope in thirdPart.hopes" :key="hope.title">
            <div class="Img">
              <img :src="hope.img_url" alt>
            </div>
            <div class="Txt">
              <h3>{{hope.title}}</h3>
              <p>{{hope.intro}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .hopeBox {
    padding: 50px 0 0px;
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
  .hopeBox {
    padding: 100px 0 120px;
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
}
.hopeBox {
  
  overflow: hidden;
  max-width: 100%;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 11%;
    .hopeList {
      width: 100%;
      position: relative;
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
      }
      .item {
        padding-right: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:nth-child(odd) {
          .Txt {
            h3 {
              &::before {
                background-image: url(../assets/images/circle/01.png);
              }
            }
          }
        }
        &:nth-child(even) {
          .Txt {
            h3 {
              &::before {
                background-image: url(../assets/images/circle/02.png);
              }
            }
          }
        }
        .Txt {
          text-align: center;
          padding: 45px 0 0 0;
          h3 {
            position: relative;
            z-index: 0;
            display: inline-block;
            height: 80px;
            font-weight: bold;
            font-size: 30px;
            color: #1b1b1b;
            letter-spacing: 0.2em;
            margin: 0;
            writing-mode: vertical-lr;
            &::before {
              content: "";
              position: absolute;
              left: 50%;
              top: -18px;
              -webkit-transform: translateX(-50%);
              -ms-transform: translateX(-50%);
              transform: translateX(-50%);
              z-index: -1;
              width: 70px;
              height: 70px;
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
          p {
            margin: 0;
            font-size: 15px;
            color: #626262;
            letter-spacing: 0.1rem;
          }
        }
        .Img {
          max-width: 360px;
          border-radius: 50%;
          overflow: hidden;
          &:hover {
            img {
              opacity: 0.8;
              transform: scale(1.05);
            }
          }
          img {
            display: block;
            width: 100%;
            transition: all 0.3s linear;
            backface-visibility: hidden;
          }
        }
      }
    }
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
        background-image: url(../assets/images/circle/02.png);
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
export default {  
  props:['thirdPart'],
  mounted() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
    };
  },
  data() {
    return {
      fullWidth: 0
    };
  }
};
</script>
