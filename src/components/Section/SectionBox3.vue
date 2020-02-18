<template>
  <div class="sectionBox">
    <div class="Img">
      <img :src="fourthPart.background_img_url" alt>
    </div>
    <div class="wrap">
      <div class="Txt">
        <h3>{{fourthPart.title}}</h3>
        <pre v-text="fourthPart.intro"></pre>
        <img :src="fourthPart.img_url" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["fourthPart"]
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .sectionBox {
    .wrap {
      padding: 0 3vw;
      margin: 0 auto;
      .Txt {
        padding: 0;
        width: 100%;
        pre {
          width: 100%;
          white-space: pre-wrap;
          letter-spacing: 0.05em;
          word-wrap: break-word;
          word-break: normal;
        }
      }
    }
    .Txt {
      padding: 20px;
      white-space: normal;
      img {
        max-width: 60%;
        height: auto;
        margin: 0 auto;
      }
      h3 {
        font-size: 20px;
      }
    }
    .Img {
      img {
        display: block;
        position: absolute;
        left: 0%;
        bottom: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .sectionBox {
    .wrap {
      padding: 0 10vw;
      margin: 0 auto;
    }
    .Txt {
      margin: 0 auto;
      padding: 80px 110px;
      img {
        max-width: 500px;
        margin: 0 auto;
        height: auto;
      }
      h3 {
        font-size: 30px;
      }
    }
    .Img {
      img {
        display: block;
        position: absolute;
        left: 0%;
        bottom: 0;
        width: 100%;
        min-height: 100%;
      }
    }
  }
}
.sectionBox {
  padding: 90px 0;
  max-width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
  .wrap {
    justify-content: flex-end;
    display: flex;
    position: relative;
    .Txt {
      position: relative;
      display: inline-block;
      text-align: left;
      background-color: rgba(255, 255, 255, 0.9);
      img {
        display: block;
      }
      h3 {
        margin-bottom: 12px;
        font-weight: bold;
        color: #1b1b1b;
        letter-spacing: 0.1rem;
        text-align: center;
      }
      pre {
        margin-bottom: 50px;
        font-size: 15px;
        color: #626262;
        letter-spacing: 0.1rem;
        text-align: center;
      }
      &:after {
        content: "";
        position: absolute;
        left: -17px;
        top: -17px;
        z-index: -1;
        width: calc(100% + 34px);
        height: calc(100% + 34px);
        background-color: rgba(255, 255, 255, 0.9);
      }
    }
  }
  .Img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    img {
      display: block;
      position: absolute;
    }
  }
}
</style>
