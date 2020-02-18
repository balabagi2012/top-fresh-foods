<template>
  <header class="full-bar">
    <el-dialog
      :visible.sync="centerDialogVisible"
      :fullscreen="true"
      :modal="false"
      custom-class="dialog"
    >
      <nav class="menu-box">
        <ul>
          <li>
            <router-link to="/about" class="flip-box" :class="{'active':$route.path=='/about'}">
              <span class="front">關於我們</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">About us</span>
            </router-link>
          </li>
          <li>
            <router-link to="/news" class="flip-box" :class="{'active':$route.path=='/news'}">
              <span class="front">最新消息</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">News</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/products"
              class="flip-box"
              :class="{'active':$route.path=='/products'}"
            >
              <span class="front">產品介紹</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Products</span>
            </router-link>
          </li>
          <li>
            <router-link to="/recipes" class="flip-box" :class="{'active':$route.path=='/recipes'}">
              <span class="front">精選食譜</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Recipes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/quality" class="flip-box" :class="{'active':$route.path=='/quality'}">
              <span class="front">安心食材</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Quality</span>
            </router-link>
          </li>
          <!-- <li>
            <a href class="flip-box">
              <span class="front">會員專區</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Members</span>
            </a>
          </li>-->
        </ul>
      </nav>
    </el-dialog>
    <div class="wrap">
      <div class="menu-button" @click="centerDialogVisible = !centerDialogVisible">
        <i :class="centerDialogVisible?'el-icon-close':'el-icon-menu'"></i>
        <!-- <img src="/img/logo.png" alt="" v-else> -->        
      </div>
      <div class="logo">
        <a href="/"><img :src="logo.navbar" alt></a>        
      </div>
      <nav class="menu-box">
        <ul>
          <li>
            <router-link to="/about" class="flip-box" :class="{'active':$route.path=='/about'}">
              <span class="front">關於我們</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">About us</span>
            </router-link>
          </li>
          <li>
            <router-link to="/news" class="flip-box" :class="{'active':$route.path=='/news'}">
              <span class="front">最新消息</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">News</span>
            </router-link>
          </li>
          <li>
            <router-link
              to="/products"
              class="flip-box"
              :class="{'active':$route.path=='/products'}"
            >
              <span class="front">產品介紹</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Products</span>
            </router-link>
          </li>
          <li>
            <router-link to="/recipes" class="flip-box" :class="{'active':$route.path=='/recipes'}">
              <span class="front">精選食譜</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Recipes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/quality" class="flip-box" :class="{'active':$route.path=='/quality'}">
              <span class="front">安心食材</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Quality</span>
            </router-link>
          </li>
          <!-- <li>
            <a href class="flip-box">
              <span class="front">會員專區</span>
              <i class="icon iconfont icon-mood"></i>
              <span class="back">Members</span>
            </a>
          </li>-->
        </ul>
      </nav>
      <!-- <div class="icon-box" @click="r">
        {{test}}
        <i class="icon iconfont icon-user"></i>登入
      </div>-->
    </div>
  </header>
</template>
<style lang="scss">
.full-bar {
  .el-dialog__wrapper {
    top: 60px;
  }
  .el-dialog {
    background: transparent;
    .el-dialog__body {
      background-color: rgba(0, 153, 68, 0.9);
      height: 100%;
      width: 100%;
      padding: 0;
      position: fixed;
      left: 0;
    }
    .menu-box {
      ul {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);

          .flip-box {
            display: flex;
            flex-direction: column-reverse;
            padding: 15px 10px;
            font-size: 15px;
            color: #fff;
            text-align: center;
            &:hover {
              background-color: rgba(255, 255, 255, 0.2);
            }
            .front {
              display: block;
              font-size: 16px;
              letter-spacing: 0.1em;
            }
            .back {
              display: block;
              font-size: 13px;
              text-transform: uppercase;
              opacity: 0.7;
            }
          }
          .icon {
            display: none;
          }
        }
      }
    }
  }

  .el-dialog__header {
    padding: 0;
    background: transparent;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  header {
    display: flex;
    align-items: center;
    box-shadow: 0 2px 5px rgba(126, 126, 126, 0.5);
    height: 60px;
    .wrap {
      width: 100%;
      margin: 0;
      .menu-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 60px;
        i {
          font-size: 30px;
        }
        img{
          width: 30px;
          height: auto;
        }
      }
      .logo {
        img {
          height: 30px;
          width: 60px;
        }
      }
      .menu-box {
        display: none;
      }
      .icon-box {
        margin-left: auto;
        padding-right: 20px;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  header {
    width: 100%;
    .logo {
      width: 135px;
      margin-right: 80px;
    }
    .icon-box {
      margin-left: auto;
    }
    .menu-button {
      display: none;
    }
  }
}
header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1999;
  width: 100%;
  background: url(../assets/images/headerBg.jpg);
  background-size: cover;
  -webkit-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  .wrap {
    display: flex;
    align-items: center;
    .icon-box {
      font-size: 18px;
      transition: 3s linear;
      color: #555;
      &:hover {
        color: #004505;
        i {
          color: #004505;
        }
      }
      i {
        font-size: 24px;
        margin-right: 0.5rem;
      }
    }
    .menu-box {
      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        position: relative;
        li {
          height: 120px;
          width: 120px;
          position: relative;
          display: -webkit-inline-box;
          display: -ms-inline-flexbox;
          display: inline-flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          justify-content: center;
          .flip-box {
            float: left;
            &.active {
              .icon {
                opacity: 1;
                margin-top: 0px;
              }
              .back {
                transform: rotateX(0deg);
                opacity: 1;
                margin-top: 0;
              }
              .front {
                opacity: 0;
              }
            }
            .front {
              transform: rotateX(0deg);
              opacity: 1;
              position: absolute;
              backface-visibility: hidden;
              transition: linear 0.4s;
              text-align: left;
              margin-top: 0;
              left: 20px;
              width: 100px;
            }
            .back {
              transform: rotateX(60deg);
              opacity: 0;
              position: absolute;
              margin-top: -1rem;
              left: 26px;
              backface-visibility: hidden;
              transition: linear 0.4s;
              text-align: left;
              width: 100px;
            }
            .icon {
              margin-top: 5px;
              opacity: 0;
              position: absolute;
              left: 0;
              width: 20px;
              font-size: 18px;
              backface-visibility: hidden;
              transition: ease-in 0.2s;
            }
            &:hover {
              .front {
                transform: rotateX(-60deg);
                opacity: 0;
                margin-top: 1rem;
              }
              .back {
                left: 26px;
                margin-top: 0;
                opacity: 1;
                transform: rotateX(0deg);
              }
              .icon {
                transition-delay: 0.3s;
                opacity: 1;
                margin-top: 0px;
              }
            }
          }
          a {
            position: relative;
            display: flex;
            font-weight: 400;
            width: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 30px;
            padding: 0 20px 0 26px;
            font-size: 16px;
            color: #004505;
          }
        }
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
<script>
import { firestore } from "@/firebase";
export default {
  firestore() {
    return {
      logo: firestore.collection("setting").doc("logo"),
      test: firestore.collection("test")
    };
  },
  data() {
    return {
      centerDialogVisible: false
    };
  }
};
</script>
