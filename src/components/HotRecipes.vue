<template>
  <div class="hot-recipes">
    <div class="wrap">
      <el-carousel trigger="click" :autoplay="true" height="650px">
        <el-carousel-item>
          <div class="recipe-box" v-for="hotRecipe in hotRecipes" :key="hotRecipe['.key']">
            <div class="recipe">
              <div class="Img">
                <a :href="`/recipes/info?id=${hotRecipe['.key']}`">
                  <img :src="hotRecipe.img_url" alt>
                </a>
              </div>
              <div class="Txt">
                <div class="content">
                  <!--Txt-->
                  <h3>
                    <a href="/recipes/info" :title="hotRecipe.name">{{hotRecipe.name}}</a>
                  </h3>
                  <p
                    class="ellipsis"
                    style="overflow-wrap: break-word;"
                    v-text="hotRecipe.intro"
                  ></p>
                  <div class="bottom">
                    <!-- bottom -->
                    <ul class="recipesPerList">
                      <li>
                        <i class="icon iconfont icon-mood"></i>
                        <span class="people">{{hotRecipe.count}}</span>人份
                      </li>
                      <li>
                        <i class="icon iconfont icon-mood"></i>
                        <span class="minute">{{hotRecipe.time}}</span>分鐘
                      </li>
                    </ul>
                    <div class="btn">
                      <a :href="`/recipes/info${hotRecipe['.key']}`" :title="hotRecipe.name">More</a>
                    </div>
                  </div>
                  <!-- bottom end -->
                </div>
              </div>
            </div>
            <div class="text">
              <em>Recipe of
                <br>the Day !!
              </em>
            </div>

            <div class="title">
              <div class="circle-text">
                <svg viewBox="0 0 178 11">
                  <path d="M0,10.492c0,0,75.99-23.607,178,0" id="circle"></path>
                  <text>
                    <textPath xlink:href="#circle">Hot Recipes</textPath>
                  </text>
                </svg>
              </div>
              <h2>熱門食譜</h2>
              <em>Natural & Health</em>
            </div>
          </div>
        </el-carousel-item>        
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  props:['hotRecipes']
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .hot-recipes {
    display: none;
  }
}
.hot-recipes {
  position: relative;
  padding: 130px 60px;
  background-color: #fff;
  .wrap {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .recipe-box {
      display: flex;
      flex-direction: column;
    }

    .recipe {
      width: 770px;
      z-index: 2;
      height: 550px;
      overflow: hidden;
      .Img {
        height: 550px;
        overflow: hidden;
        &:hover {
          a {
            img {
              opacity: 0.8;
              transform: scale(1.05);
            }
          }
        }
        a {
          img {
            display: block;
            width: 100%;
            backface-visibility: hidden;
            transition: all 0.3s linear;
          }
        }
      }
      .Txt {
        position: absolute;
        right: 0;
        top: 225px;
        z-index: 1;
        width: 575px;
        height: 415px;
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 80px rgba(38, 38, 38, 0.1);
        overflow: hidden;
        &::before {
          content: "";
          position: absolute;
          left: 12px;
          top: 12px;
          z-index: -2;
          width: calc(100% - 24px);
          height: calc(100% - 24px);
          background-color: white;
          box-shadow: 0 0 80px rgba(38, 38, 38, 0.1);
        }
        .content {
          text-align: left;
          position: relative;
          padding: 60px;
          .bottom {
            bottom: 0;
            display: flex;
            align-items: center;
            .recipesPerList {
              flex: 2;
              display: flex;
              font-size: 22px;
              padding-left: 0;
              color: #263149;
              list-style: none;
              li {
                line-height: 1.7;
                margin-right: 25px;
                i {
                  font-size: 24px;
                  color: gray;
                  margin-right: 12px;
                }
                span {
                  display: inline-block;
                  margin-right: 5px;
                  font-weight: bold;
                  font-family: "Franklin Gothic Medium";
                  font-size: 40px;
                }
              }
            }
            .btn {
              margin-left: auto;
              &:hover {
                a {
                  background-color: #263149;
                }
              }
              a {
                padding: 10px 40px;
                font-size: 17px;
                display: inline-block;
                color: #fff;
                font-family: "Franklin Gothic Medium";
                letter-spacing: 0.075em;
                text-transform: uppercase;
                border-radius: 35px;
                background-color: #009944;
              }
            }
          }
          p {
            height: 85px;
            margin-bottom: 40px;
            font-size: 15px;
            color: #626262;
            letter-spacing: 0.05em;
            line-height: 27px;
          }
          h3 {
            a {
              display: block;
              padding-bottom: 10px;
              margin-bottom: 15px;
              font-weight: 400;
              font-size: 22px;
              color: #263149;
              letter-spacing: 0.1em;
              border-bottom: 1px solid #e5e5e5;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .text {
      position: relative;
      width: 170px;
      height: 170px;
      margin: -70px 0 0 345px;
      font-size: 22px;
      line-height: 1.4;
      background: url(../assets/images/circle/01.png) no-repeat;
      background-size: contain;
      em {
        position: absolute;
        top: 65%;
        left: 0%;
        z-index: 1;
        font-weight: bold;
        color: #1b1b1b;
        transform: translateY(-50%);
        width: 100%;
        text-align: center;
      }
    }
    .title {
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 20px 0;
      text-align: center;
      z-index: 0;
      top: 0;
      right: 95px;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 208px;
        height: 208px;
        background: url(../assets/images/circle/02.png) no-repeat;
        background-size: contain;
      }
      .circle-text {
        position: relative;
        z-index: 0;
        display: inline-block;
        width: 178px;
        height: 30px;
        font-weight: 500;
        font-size: 28px;
        color: #1b1b1b;
        text-transform: uppercase;
        transform-origin: left bottom;
        font-family: "Franklin Gothic Medium";
        transform: rotate(2deg);
        margin-left: 38px;
        text {
          fill: currentColor;
          text-align: center;
          letter-spacing: -1px;
        }
        svg {
          position: relative;
          overflow: visible;
        }
        path {
          fill: none !important;
        }
      }
      em {
        font-size: 18px;
        margin-top: 5px;
        color: #1b1b1b;
        font-family: "Franklin Gothic Medium";
        font-weight: bold;
      }
      h2 {
        position: relative;
        display: inline-block;
        padding: 2px 15px;
        margin: 12px 0 5px;
        font-weight: bold;
        line-height: 1.8;
        font-size: 35px;
        color: #1b1b1b;
        letter-spacing: 0.3em;
        text-indent: 0.3em;
        background-image: linear-gradient(to left, #1b1b1b 0%, #1b1b1b 100%),
          linear-gradient(to left, #1b1b1b 0%, #1b1b1b 100%),
          linear-gradient(to left, #1b1b1b 0%, #1b1b1b 100%),
          linear-gradient(to left, #1b1b1b 0%, #1b1b1b 100%);
        background-size: 100% 2px, 100% 1px, 100% 1px, 100% 2px;
        background-position: left top, left top 4px, left bottom 4px,
          left bottom;
        background-repeat: no-repeat;
        &:before {
          content: "";
          position: absolute;
          left: -16px;
          top: 50%;
          margin-top: -0.5px;
          width: 16px;
          height: 1px;
          background-color: #1b1b1b;
        }
        &:after {
          content: "";
          right: -16px;
          position: absolute;
          top: 50%;
          margin-top: -0.5px;
          width: 16px;
          height: 1px;
          background-color: #1b1b1b;
        }
      }
    }
  }
}
</style>

