<template>
  <div class="banner">
    <div class="banner-box animated fadeIn">
      <img :src="img" alt>
      <div class="txt animated slideInUp">
        <em>{{en}}</em>
        <h2>{{tw}}</h2>
        <p>{{intro}}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 10%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .banner {
    margin-top: 60px;
    .banner-box {
      .txt{
        p{
font-size: 15px;
        }
        h2{
        font-size: 50px;
        }
        em{
        font-size: 48px;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .banner {
    margin-top: 120px;
    .banner-box {
      .txt{
        p{
font-size: 25px;
        }
        h2{
        font-size: 65px;
        }
        em{
        font-size: 58px;
        }
      }
    }
  }
}
.banner {
  position: relative;
  height: 100%;
  .banner-box {
    position: relative;
    height: 100%;
    &::before{
        position: absolute;
        content: "";
        left: 0;
        top:0;
        z-index: 1;
        background-color: rgba(0,0,0,.4);
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    .txt {
      width: 100%;
      position: absolute;
      height: 100%;
      z-index: 2;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      p {        
        color: #fff;
        margin: 0;
      }
      h2 {
        position: relative;
        margin-bottom: 5px;
        font-weight: 400;
        letter-spacing: 0.2em;
        text-indent: 0.2em;
        line-height: 1.6;
        margin-top: 0;
        color: #fff;
        font-family: "Noto Sans TC", "微軟正黑體";
        &:before {
          content: "";
          position: absolute;
          left: -50px;
          top: 50%;
          margin-top: -0.5px;
          width: 34px;
          height: 1px;
          background-color: #fff;
        }
        &:after {
          content: "";
          right: -50px;
          position: absolute;
          top: 50%;
          margin-top: -0.5px;
          width: 34px;
          height: 1px;
          background-color: #fff;
        }
      }
      em {
        line-height: 1;
        transform: scale(0.87, 0.9);
        margin-bottom: 5px;
        font-style: normal;
        color: #fff;
        letter-spacing: -2px;
        font-weight: bold;
        font-family: "Franklin Gothic Medium", "微軟正黑體", cursive;
        letter-spacing: 0.025em;
      }
    }
    img {
      backface-visibility: hidden;
      display: block;
      transform: translate3d(0px, 0px, 0px) scale(1);
      opacity: 1;
      width: 100%;
      min-height: 225px;
      object-fit: cover;
      position: relative;      
    }
  }
}
</style>
<script>
export default {
  props: ["en", "tw", "intro", "img"]
};
</script>
