<template>
  <div class="banner">
    <el-carousel
      class="carousel"
      :height="fullWidth>=768?'100vh':'195px'"
      trigger="click"
      :autoplay="true"
      :loop="true"
      @change="setIndex"    >
      <el-carousel-item v-for="advertisementInfo in advertisement" :key="advertisementInfo['.key']"> 
        <img
          class="slider-img slow"
          alt="slider"
          :src="advertisementInfo.img_url"
          :class="advertisementInfo.animate==='1'?'animated fadeIn':null"
        >
        <div class="slider-box">
          <div class="txt" :class="advertisementInfo.animate==='2'?'animated slideInLeft':null">
            <em>{{advertisementInfo.en}}</em>
            <h3>{{advertisementInfo.tw}}</h3>
            <p>{{advertisementInfo.intro}}</p>
            <a :href="advertisementInfo.link" class="btn">More</a>
          </div>
        </div>
      </el-carousel-item>
      
    </el-carousel>
  </div>
</template>
<style lang="scss">
.banner {
  @keyframes slideInLeft {
    from {
      transform: translate3d(-30%, 0, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
  .el-carousel__indicators--horizontal{
    width: 100%;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .banner {
    margin-top: 60px;
    height: 195px;
    .carousel {
      height: 195px;
    }
    .slider-img {
      height: 195px;
    }
    .slider-box {
      height: 195px;
      .txt {
        position: relative;
        left: 30px;
        font-weight: 400;
        font-size: 24px;
        em {
          margin-top: 0;
          margin-bottom: 5px;
          line-height: 1.2;
          letter-spacing: 0.025em;
        }
        h3 {
          margin-bottom: 22px;
          margin-top: 0;
          line-height: 1.3;
          letter-spacing: 0.01em;
          span {
            &:before {
              margin-top: -0.5px;
              width: 34px;
              height: 1px;
            }
            &:after {
              right: -50px;
              top: 50%;
              margin-top: -0.5px;
              width: 34px;
              height: 1px;
            }
          }
        }
        p {
          display: none;
        }
        .btn {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 20px;
          letter-spacing: 0.01rem;
          // display: none;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1199px) {
  .banner {
    height: 100vh;
    .carousel {
      height: 100vh;
    }
    .slider-img {
      height: 100%;
    }
    .slider-box {
      height: 100%;
      position: relative;
      .txt {
        position: absolute;
        left: calc((100% - 430px) / 2);
        em {
          margin-bottom: 5px;
          font-size: 50px;
          line-height: 1.2;
          letter-spacing: 0.025em;
        }
        h3 {
          margin-bottom: 22px;
          margin-top: 0;
          font-size: 55px;
          line-height: 1.3;
          letter-spacing: 0.01em;
          span {
            font-size: 40px;
            &:before {
              margin-top: -0.5px;
              width: 34px;
              height: 1px;
            }
            &:after {
              right: -50px;
              top: 50%;
              margin-top: -0.5px;
              width: 34px;
              height: 1px;
            }
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 17px;
          letter-spacing: 0.2em;
        }
        .btn {
          padding: 11px 68px;
          border-radius: 35px;
          font-size: 20px;
          letter-spacing: 0.075rem;
          .text {
            transform: rotateY(30deg);
          }
          &:hover {
            padding: 11px 90px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .banner {
    height: 100vh;
    .carousel {
      height: 100vh;
    }
    .slider-img {
      height: 100%;
    }
    .slider-box {
      height: 100%;
      .txt {
        position: absolute;
        left: calc((100% - 1200px) / 2);
        em {
          margin-bottom: 5px;
          font-size: 50px;
          line-height: 1.2;
          letter-spacing: 0.025em;
        }
        h3 {
          margin-bottom: 22px;
          margin-top: 0;
          font-size: 55px;
          line-height: 1.3;
          letter-spacing: 0.01em;
          span {
            font-size: 40px;
            &:before {
              margin-top: -0.5px;
              width: 34px;
              height: 1px;
            }
            &:after {
              right: -50px;
              top: 50%;
              margin-top: -0.5px;
              width: 34px;
              height: 1px;
            }
          }
        }
        p {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 17px;
          letter-spacing: 0.2em;
        }
        .btn {
          padding: 11px 68px;
          border-radius: 35px;
          font-size: 20px;
          letter-spacing: 0.075rem;
          .text {
            transform: rotateY(30deg);
          }
          &:hover {
            padding: 11px 90px;
          }
        }
      }
    }
  }
}

.banner {
  width: 100%;
  position: relative;

  .slider-img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slider-box {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    .txt {
      text-align: left;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: #fff;
      em {
        color: #fff;
        font-weight: bold;
        font-family: "Oleo Script", "微軟正黑體", cursive;
      }
      h3 {
        position: relative;
        color: #fff;
        font-family: "微軟正黑體";
        span {
          position: relative;
          &:before {
            content: "";
            position: absolute;
            background-color: #1b1b1b;
          }
          &:after {
            content: "";
            background-color: #1b1b1b;
          }
        }
      }
      p {
        color: #fff;
        font-family: "Noto Sans TC", "微軟正黑體";
      }
      .btn {
        color: #fff;
        text-transform: uppercase;
        background-color: #009944;
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        .text {
          transform: rotateY(30deg);
        }
        &:hover {
          background-color: #fff;
          color: #009944;
        }
      }
    }
  }
}
</style>
<script>
export default {
  props:['advertisement'],
  data() {
    return {
      index: 0,
      fullWidth: 0,      
    };
  },
  created() {
    const vm = this;
    vm.fullWidth = window.innerWidth;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
    };
  },
  methods: {
    setIndex: function(now) {
      this.index = now;
    }
  }
};
</script>
