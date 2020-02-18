<template>
  <div class="brand-area" :class="isDetail===true?'white':'no-bg'">
    <div class="brand-box">
      <div class="Img">
        <img :src="brand.img_url">
      </div>
      <div class="Txt">
        <div class="logo">
          <img :src="brand.logo" alt>
        </div>
        <h4>{{brand.title}}</h4>
        <p v-text="brand.intro"></p>
        <div class="btn">
          <router-link :to="{ path: '/products/list', query: { brand: brand.name }}">
           More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .brand-area {
    .brand-box {
      display: block;
      .Img {
        width: 100%;
      }
      .Txt {
        width: 100%;
        max-width: 100%;
        padding: 30px 0;
        h4 {
          margin-bottom: 8px;
          font-size: 24px;
        }
        .logo {
          width: 180px;
          margin-top: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .brand-area {
    .brand-box {
      display: flex;
      .Img {
        width: 50%;
      }
      .Txt {
        width: 50%;
        h4 {
          margin-bottom: 0.35rem;
          font-size: 30px;
        }
        .logo {
          width: 240px;
          margin-bottom: 25px;
        }
        p {
          margin-bottom: 60px;
        }
      }
    }
  }
}
.brand-area {
  width: 100%;
  position: relative;
  height: auto;
  &.white {
    background-color: #fff;
    .brand-box {
      .Txt {
        .btn {
          display: none;
        }
      }
    }
    &:nth-child(odd) {
      .brand-box {
        flex-direction: row-reverse;
      }
    }
    &:nth-child(even) {
      .brand-box {
        flex-direction: row;
      }
    }
  }
  &:nth-child(odd) {
    .brand-box {
      flex-direction: row;
    }
  }
  &:nth-child(even) {
    .brand-box {
      flex-direction: row-reverse;
    }
  }
  .brand-box {
    width: 100%;
    height: 100%;
    .Img {
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 240px;
      }
    }
    .Txt {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .logo {
        img {
          display: inline-block;
          vertical-align: top;
          max-width: 100%;
        }
      }
      h4 {
        font-weight: bold;
        margin-top: 0;
      }
      p {
        margin-top: 0;
        font-size: 15px;
        color: #626262;
        letter-spacing: 0.05em;
      }
      .btn {
        a {
          display: inline-block;
          padding: 9px 54px;
          font-weight: 500;
          font-size: 20px;
          color: #fff;
          font-family: "Oswald", "微軟正黑體", sans-serif;
          letter-spacing: 0.075em;
          text-transform: uppercase;
          border-radius: 35px;
          background-color: #009944;
          &:hover {
            background-color: #263149;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: ["num", "isDetail","brand"]
};
</script>

