<template>
  <div class="sectionBox">
    <div class="Img">
      <img :src="secondPart.img_url" alt>
    </div>
    <div class="wrap">
      <div class="Txt">
        <h3>{{secondPart.title}}</h3>
        <p v-text="secondPart.intro">
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['secondPart']
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .sectionBox {
    max-width: 100%;
    position: relative;
    .Img {
      img {
        min-height: 400px;
      }
    }
    .wrap {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      padding: 0;
      width: 100%;
      .Txt {
        position: absolute;
        left: 50%;
        top: 50%;
        bottom: auto;
        transform: translate(-50%, -50%);
        width: 70%;
        padding: 25px 35px;
        h3 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
        &:after {
          left: -12px;
          top: -12px;
          width: calc(100% + 24px);
          height: calc(100% + 24px);
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .sectionBox {
    max-width: 100%;
    .Img {
      img {
        min-height: 490px;
      }
    }
    .wrap {
      width: 1200px;

      position: relative;
      .Txt {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 0;
        padding: 80px 110px;
        h3 {
          font-size: 30px;
        }
        p {
          font-size: 15px;
        }
        &:after {
          left: -17px;
          top: -17px;
          width: calc(100% + 34px);
          height: calc(100% + 34px);
        }
      }
    }
  }
}
.sectionBox {
  overflow: hidden;
  .Img {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .wrap {
    margin: 0 auto;
    .Txt {
      text-align: center;
      background-color: rgba(255, 255, 255, 0.9);
      h3 {
        margin-bottom: 12px;
        font-weight: bold;
        color: #1b1b1b;
        letter-spacing: 0.1rem;
      }
      p {
        color: #626262;
        letter-spacing: 0.1rem;
      }
      &:after {
        content: "";
        position: absolute;
        z-index: -1;
        background-color: rgba(255, 255, 255, 0.9);
      }
    }
  }
}
</style>
