<template>
  <div class="recipe-info">
    <div class="wrap">
      <div class="recipe-box">
        <div class="Img">
          <a href="">
            <img :src="recipe.img_url" alt>
          </a>            
        </div>
        <div class="Txt">
          <div class="content">
            <!--Txt-->
            <h3>{{recipe.name}}</h3>
            <p
              class="ellipsis"
              style="overflow-wrap: break-word;"
              v-text="recipe.intro"
            ></p>
            <div class="bottom">
              <!-- bottom -->
              <ul class="recipesPerList">
                <li>
                  <i class="icon iconfont icon-mood"></i>
                  <span class="people">{{recipe.count}}</span>人份
                </li>
                <li>
                  <i class="icon iconfont icon-mood"></i>
                  <span class="minute">{{recipe.time}}</span>分鐘
                </li>
              </ul>
            </div>
            <!-- bottom end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["recipe"]
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .recipe-info {
    padding: 50px 0px;
    margin-top: 60px;
    .wrap {
      width: calc(100% - 60px);
      padding: 0 30px;
      .recipe-box {
        display: block;
        .Txt {
          padding: 0;
        }
        .Img {
          margin-bottom: 30px;
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .recipe-info {
    padding: 160px 60px;
    .wrap {
      .recipe-box {
        display: flex;
        .Txt {
          padding: 40px 60px;
        }
      }
    }
  }
}
.recipe-info {
  position: relative;

  background-color: #fff;
  .wrap {
    position: relative;
    .recipe-box {
      .Img {
        flex: 1.2;
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
        flex: 1;
        background-color: rgba(255, 255, 255, 0.5);
        .content {
          text-align: left;

          position: relative;
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
            padding-bottom: 15px;
            margin-bottom: 20px;
            margin-top: 0;
            border-bottom: 1px solid #e5e5e5;
            font-weight: bold;
            line-height: 2;
            font-size: 30px;
            color: #1b1b1b;
            letter-spacing: 0.1em;
            &::before {
              content: "Let's Cook Easily";
              display: block;
              font-size: 18px;
              line-height: 1;
              font-family: "Oleo Script", "微軟正黑體", cursive;
              letter-spacing: 0;
            }
          }
        }
      }
    }
  }
}
</style>

