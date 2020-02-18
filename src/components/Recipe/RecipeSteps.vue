<template>
  <div class="receipe-steps">
    <div class="wrap">
      <div class="center">
        <CircleTxt color="green">
          <div slot="en">STEP BY STEP</div>
          <div slot="tw">跟著步驟一起做料理</div>
        </CircleTxt>
        <div class="stepListBox">
          <ul class="stepList">
            <li class="stepItem" v-for="(step,index) in recipe.steps" :key="index">
              <div class="item">
                <!-- item -->
                <div class="Txt">
                  <!-- Txt -->
                  <div class="no">
                    STEP
                    <i>{{String(index+1).padStart(2,'0')}}</i>
                  </div>
                  <p v-text="step.intro"></p>
                </div>
                <!-- Txt end -->
              </div>
              <!-- item end -->
            </li>            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .receipe-steps {
    .wrap {
      padding: 0 30px;
      .center {
        .stepListBox {
          width: calc(100% - 30px);
          margin: 0 auto;
          overflow: hidden;
          &:before {
            display: none;
          }
          &:after {
            display: none;
          }
          .stepList {
            width: 100%;
            &:before {
              display: none;
            }
            &:after {
              display: none;
            }
            .stepItem {
              width: 100%;
              &:not(:first-child) {
                margin-top: 40px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .receipe-steps {
    .wrap {
      .center {
        .stepListBox {
          width: 100%;
          margin: 50px 0;
          .stepList {
            width: 900px;
            .stepItem {
              width: 400px;
            }
          }
        }
      }
    }
  }
}
.receipe-steps {
  background-color: #fff;
  padding: 100px 0;
  .wrap {
    position: relative;
    .center {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-direction: column;
      .stepListBox {
        position: relative;
        &::before {
          position: absolute;
          top: 0%;
          left: calc(50% - 1px);
          content: "";
          background-color: #bfbfbf;
          width: 1px;
          height: 100%;
        }
        position: relative;
        .stepList {
          position: relative;

          padding: 55px 0;
          margin: 0 auto;

          &::before {
            top: 0;
            position: absolute;
            left: calc(50% - 3px);
            z-index: 2;
            content: "";
            background-color: #bfbfbf;
            width: 5px;
            height: 5px;
            border-radius: 50%;
          }
          &::after {
            bottom: 0;
            position: absolute;
            left: calc(50% - 3px);
            z-index: 2;
            content: "";
            background-color: #bfbfbf;
            width: 5px;
            height: 5px;
            border-radius: 50%;
          }
          .stepItem {
            position: relative;
            text-align: left;
            .Txt {
              padding: 30px;
              background-color: #f7f6f5;
              .no {
                font-weight: bold;
                font-size: 20px;
                color: #263149;
                i {
                  font-style: normal;
                  font-size: 35px;
                  line-height: 1;
                }
              }
              p {
                font-weight: 400;
                font-size: 16px;
                color: #626262;
                letter-spacing: 0.05em;
              }
            }
          }
          .stepItem:nth-child(odd) {
            margin-right: auto;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              right: -50px;
              z-index: 3;
              width: 50px;
              height: 1px;
              background-color: #bfbfbf;
            }
            &:after {
              content: "";
              position: absolute;
              top: calc(50% - 7px);
              right: -57px;
              z-index: 3;
              width: 14px;
              height: 14px;
              background-color: #263149;
              border-radius: 50%;
            }
          }
          .stepItem:nth-child(even) {
            margin-left: auto;
            &:before {
              content: "";
              position: absolute;
              top: 50%;
              left: -50px;
              z-index: 3;
              width: 50px;
              height: 1px;
              background-color: #bfbfbf;
            }
            &:after {
              content: "";
              position: absolute;
              top: calc(50% - 7px);
              left: -57px;
              z-index: 3;
              width: 14px;
              height: 14px;
              background-color: #263149;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import CircleTxt from "@/components/CircleTxt.vue";
export default {
  props: ["recipe"],
  components: {
    CircleTxt
  }
};
</script>