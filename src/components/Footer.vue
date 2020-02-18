<template>
  <footer>
    <div class="wrap">
      <div class="logo-box">
        <div class="logo-up">
          <img :src="logo.footer1" alt />
        </div>
        <div class="logo-down">
          <img :src="logo.footer2" alt />
          <img :src="logo.footer3" alt />
        </div>
      </div>
      <div class="menu-down">
        <ul class="mobile">
          <el-collapse accordion>
            <li>
              <el-collapse-item class="item">
                <template slot="title">
                  <h3 class="t">About</h3>
                </template>
                <div class="link">
                  <a href="/about">關於我們</a>
                </div>
              </el-collapse-item>
            </li>
            <li>
              <el-collapse-item class="item">
                <template slot="title">
                  <h3>Products</h3>
                </template>
                <div class="link">
                  <a href="/products">產品介紹</a>
                  <a href="/quality">安心煮意</a>
                </div>
              </el-collapse-item>
            </li>
            <li>
              <el-collapse-item class="item">
                <template slot="title">
                  <h3 class="t">Recipes</h3>
                </template>
                <div class="link">
                  <a href="/recipes">精選食譜</a>
                </div>
              </el-collapse-item>
            </li>
            <li>
              <el-collapse-item class="item">
                <template slot="title">
                  <h3>News&Spots</h3>
                </template>
                <div class="link">
                  <a href="/news">最新消息</a>
                </div>
              </el-collapse-item>
            </li>
          </el-collapse>
        </ul>

        <ul>
          <li>
            <div class="item">
              <h3>About</h3>
              <div class="link">
                <a href="/about">關於我們</a>
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <h3>Products</h3>
              <div class="link">
                <a href="/products">產品介紹</a>
                <a href="/quality">安心食材</a>
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <h3>Recipes</h3>
              <div class="link">
                <a href="/recipes">精選食譜</a>
                <!-- <a href>名家帶路</a> -->
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <h3>News&Spots</h3>
              <div class="link">
                <a href="/news">最新消息</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <div class="left">
          Copyright ©2019 {{copyright.company}} All rights Reserved.
          <span>
            網頁設計
            <a href="mailto://balabagi2012@gmail.com">Leo</a>
          </span>
        </div>
        <div class="social">
          <a :href="social.facebook">
            <img src="@/assets/images/icon_fb.png" alt />
          </a>
          <a :href="social.instagram">
            <img src="@/assets/images/icon_ig.png" alt />
          </a>
          <a :href="social.yam">
            <img src="@/assets/images/icon_icook.png" alt />
          </a>
          <a :href="social.youtube">
            <img src="@/assets/images/icon_youtube.png" alt />
          </a>
          <a :href="social.pixnet">
            <img src="@/assets/images/icon_pixnet.png" alt />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  .el-collapse {
    border: none;
  }
  .el-collapse-item__wrap {
    border: none;
    background-color: transparent;
  }
  .el-collapse-item__header {
    background-color: transparent;
    border: none;
  }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  footer {
    padding: 60px 0;
    .wrap {
      width: 100%;
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      .logo-box {
        align-self: flex-start;
        width: 100%;
        .logo-up {
          margin-bottom: 10px;
          width: 200px;
          img {
            width: 200px;
            height: 200px;
          }
        }
        .logo-down {
          img {
            width: 120px;
            height: 120px;
          }
        }
      }
      .bottom {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        .social {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          margin-left: 0;
          margin-bottom: 20px;
        }
        .left {
          order: 3;
          text-align: left;
          line-height: 1.7;
        }
      }
      .menu-down {
        padding-left: 0;
        margin: 40px auto 0;
        width: 100%;
        ul {
          flex-direction: column;
          padding-left: 0;
          &.mobile {
            display: flex;
          }
          &:not(.mobile) {
            display: none;
          }
          li {
            &:not(:first-child) {
              margin-top: 50px;
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  footer {
    padding: 170px 0 130px;
    .wrap {
      width: 1200px;
      flex-direction: row;
      .logo-box {
        width: 360px;
        .logo-up {
          max-width: 150px;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      .bottom {
        align-items: center;
        margin-top: 80px;
        .social {
          margin-left: 100px;
          display: flex;
          align-items: center;
        }
      }
      .menu-down {
        padding-left: 110px;
        ul {
          &.mobile {
            display: none;
          }
          &:not(.mobile) {
            display: flex;
          }
        }
      }
    }
  }
}
footer {
  background-color: #f6f6f6;
  .wrap {
    flex-wrap: wrap;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    .bottom {
      display: flex;
      width: 100%;
      font-size: 13px;
      letter-spacing: 0.05em;
      color: #9d9d9d;
      text-transform: uppercase;
      .social {
        a {
          display: inline-block;
          margin-top: 5px;
          opacity: 0.5;
          color: #4f5c67;
          transition: 0.4s;
          &:hover {
            color: #3b445a;
            opacity: 1;
          }
          &:not(:last-child) {
            margin-right: 30px;
          }
        }
      }
    }
    .menu-down {
      flex: 1;
      h3 {
        position: relative;
        margin-top: 0;
        z-index: 1;
        margin-bottom: 20px;
        font-weight: 800;
        letter-spacing: -1px;
        transform: rotateY(40deg);
        transform-origin: 0% 50%;
        left: 0;
        font-size: 26px;
        color: #263149;
        font-family: "Oswald", "微軟正黑體", sans-serif;
        text-transform: uppercase;
      }
      a {
        display: block;
        margin-bottom: 8px;
        font-size: 15px;
        color: #626262;
        letter-spacing: 0.075em;
        transition: all 0.4s ease;
        &:hover {
          color: #22ac38;
        }
      }
      ul {
        counter-reset: items;
        justify-content: flex-start;
        list-style: none;
        li {
          flex: 1;
          text-align: left;
          .item {
            position: relative;
            z-index: 0;
            .t {
              background-color: transparent;
            }
            &:after {
              content: "0" counter(items);
              counter-increment: items;
              position: absolute;
              left: 0;
              top: -60px;
              transform: rotateY(40deg);
              transform-origin: 0% 50%;
              z-index: -9;
              font-weight: bold;
              font-size: 60px;
              color: #ececec;
              font-family: "Oswald", "微軟正黑體", sans-serif;
            }
          }
        }
      }
    }
    .logo-box {
      .logo-down {
        text-align: left;
        display: flex;
        a {
          color: #4f5c67;
        }
        img {
          margin-right: 25px;
          max-width: 140px;
        }
      }
      .logo-up {
        text-align: left;
        a {
          color: #4f5c67;
        }
      }
    }
  }
}
</style>
<script>
import { firestore } from "@/firebase";
export default {
  firestore() {
    return {
      social: firestore.collection("setting").doc("social"),
      copyright: firestore.collection("setting").doc("copyright"),
      logo: firestore.collection("setting").doc("logo")
    };
  }
};
</script>
