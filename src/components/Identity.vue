<template>
  <div class="identity-area">
    <div class="identity-box" v-for="(identity,index) in identities" :key="index">
      <div class="Img" :class="(num+index)%2==0?'green':'red'">
        <a :href="identity.link?identity.link:'/'">
          <img :src="identity.img_url" alt>
        </a>
      </div>
      <div class="Txt">
        <p>
          {{identity.name}}
          <br>
          {{identity.intro}}
        </p>
        <div class="btn">
          <a :href="identity.link?identity.link:'/'">More</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .identity-area {
    display: block;
    .identity-box {
      width: 100%;
      height: 300px;
      .Txt {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
        p {
          font-size: 24px;
        }
        .btn {
          a {
            padding: 9px 38px;
            font-size: 18px;
          }
        }
      }
      .Img {
        height: 300px;
        left: 0;
        top: 0;
        width: 100%;
        a {
          img {
            left: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) and (max-width: 1199px) {
  .identity-area {
    display: flex;

    .identity-box {
      width: 50%;
      min-height: 300px;
      &:only-child {
        width: 100%;
        &:hover {
          opacity: 0.6;
          width: 100%;
        }
      }
      .Txt {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: left;
        p {
          font-weight: 300;
          font-size: 30px;
        }
        .btn {
          display: none;
          margin-top: 40px;
          a {
            padding: 9px 54px;
            font-size: 20px;
          }
        }
      }
      &:hover {
        width: 75%;
      }
      &:nth-child(1) {
        .Img {
          img {
            left: 0;
          }
        }
      }
      &:nth-child(2) {
        .Img {
          img {
            right: 0;
          }
        }
      }
      .Img {
        top: 0;
        height: 100%;
        width: 100%;
        a {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .identity-area {
    display: flex;
    .identity-box {
      width: 50%;
      height: 700px;
      &:only-child {
        width: 100%;
        &:hover {
          opacity: 0.5;
          width: 100%;
        }
      }
      &:hover {
        width: 75%;
      }
      &:nth-child(1) {
        .Img {
          img {
            left: 0;
          }
        }
      }
      &:nth-child(2) {
        .Img {
          img {
            right: 0;
          }
        }
      }
      .Txt {
        position: absolute;
        top: 30%;
        left: 20%;
        text-align: left;
        p {
          height: 120px;
          font-weight: bold;
          font-size: 48px;
        }
        .btn {
          margin-top: 40px;
          a {
            padding: 9px 54px;
            font-size: 20px;
          }
        }
      }
      .Img {
        top: 0;
        height: 100%;
        a {
          img {
            width: 80vw;
          }
        }
      }
    }
  }
}
.identity-area {
  padding: 0;
  height: auto;
  width: 100%;
  .identity-box {
    position: relative;
    z-index: 0;
    display: flex;
    transition: all 0.5s ease-in-out;

    &:hover {
      .Img {
        a {
          img {
            opacity: 1;
            transition: all 1s ease-in-out;
          }
        }
      }
      .Txt {
        .btn {
          a {
            color: #263149;
            transition-delay: 0.3s;
          }
        }
      }
    }

    .Txt {
      z-index: 4;
      opacity: 1;
      transition-delay: 0.3s;
      color: #fff;
      pointer-events: none;
      p {
        line-height: 1.4;
        overflow: hidden;
        text-shadow: 5px 5px 20px rgba(38, 38, 38, 0.5);
        transition: all 1s;
        overflow-wrap: break-word;
      }
      .btn {
        transition: all 1s;
        a {
          display: inline-block;
          font-weight: bold;
          color: #009944;
          font-family: "Franklin Gothic Medium", "微軟正黑體", sans-serif;
          letter-spacing: 0.075em;
          text-transform: uppercase;
          border-radius: 35px;
          background-color: #fff;
        }
      }
    }
    .Img {
      position: absolute;
      z-index: 2;
      overflow: hidden;
      width: 100%;
      &.green {
        background-color: #004505;
      }
      &.red {
        background-color: #ab1716;
      }
      a {
        img {
          opacity: 0.15;
          display: inline-block;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 0;
          overflow: hidden;
          transition: all 1s ease-in-out;
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: ["num", "identities"],
  data() {
    return {
      odd: 12,
      even: 12
    };
  },
  methods: {
    hoverIdentity: function(type) {
      switch (type) {
        case "even":
          this.even = 16;
          this.odd = 8;
          break;
        default:
          this.even = 8;
          this.odd = 16;
      }
    }
  }
};
</script>
