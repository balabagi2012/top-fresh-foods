<template>
  <div class="sectionBox">
    <div class="wrap">
      <div class="Txt">
        <div class="title green" v-text="firstPart.title"></div>
        <div class="content" v-text="firstPart.intro"></div>
      </div>
    </div>
    <!-- <div class="album">
      <div class="img-left">
        <img src="@/assets/images/album/aboutImg01.jpg" alt>
      </div>
      <div class="img-right">
        <img src="@/assets/images/album/aboutImg02.jpg" alt>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  props: ["firstPart"]
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .sectionBox {
    padding: 100px 0;
    max-width: 100%;
    &::before {
      background-color: rgba(0, 0, 0, 0.5);
    }
    .album {
      display: none;
    }
    .wrap {
      .Txt {
        margin: 0 auto;
        .title {
          font-size: 20px;
        }
        .content{
          font-size: 15px;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .sectionBox {
    padding: 240px 0;
    max-width: 100%;
    &::before {
      background-color: rgba(0, 0, 0, 0.25);
    }
    .wrap {
      .Txt {
        .title {
          font-size: 40px;
        }
        .content{
          font-size: 22px;
        }
      }
    }
  }
}
.sectionBox {
  position: relative;
  z-index: 1;
  background-color: #fff;
  background-image: url("~@/assets/images/section.jpg");
  overflow: hidden;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .album {
    .img-left {
      left: -60px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
      width: 520px;
      pointer-events: none;
    }
    .img-right {
      right: -65px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
      width: 520px;
      pointer-events: none;
    }
  }
  .wrap {
    .Txt {
      clear: both;
      line-height: 1.8;
      .content {
        position: relative;
        text-align: center;
        z-index: 2;
        color: #fff;
      }
      .title {
        position: relative;
        margin-bottom: 40px;
        z-index: 1;
        margin-bottom: 20px;
        font-weight: bold;
        // color: #1b1b1b;
        color: #fff;
        line-height: 1.5;
        text-align: center;
        letter-spacing: 0.05em;
        &.green:after {
          background: url(~/assets/images/circle/01.png) no-repeat;
          content: "";
          position: absolute;
          left: 46%;
          top: 49%;
          z-index: -1;
          transform: translate(-50%, -50%);
          width: 135px;
          height: 135px;
          border-radius: 50%;
          background-position: center center;
        }
      }
    }
  }
}
</style>
