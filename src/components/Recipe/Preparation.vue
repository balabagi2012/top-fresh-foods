<template>
  <div class="preparation">
    <div class="wrap">
      <CircleTxt color="green">
        <div slot="en">PREPARATION</div>
        <div slot="tw">準備食材及配料</div>
      </CircleTxt>
      <div class="preparationListBox" v-for="(preparation,key) in preparations" :key="key">
        <div class="title">{{key}}</div>
        <ul class="list">
          <li v-for="detail in preparation" :key="detail.name">
            <div class="item">
              <div class="left">{{detail.name}}</div>
              <div class="right">
                <i>{{detail.count.slice(0,-1)}}</i>{{detail.count.slice(-1)}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .preparation {
    min-height: auto;
    .wrap {
      padding: 0 30px;
      .preparationListBox {
        width: 100%;
        padding: 0;
        .list {
          li {
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1200px) {
  .preparation {
    min-height: 300px;
    .preparationListBox {
      padding: 0 9% 0 30%;
      .list {
        li {
          width: 50%;
        }
      }
    }
  }
}
.preparation {
  position: relative;
  padding: 105px 0 50px;

  .preparationListBox {
    margin-bottom: 20px;
    .title {
      text-align: left;
      position: relative;
      font-weight: bold;
      font-size: 22px;
      line-height: 2.5;
      color: #263149;
      letter-spacing: 0.075em;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -43px;
      li {
        margin-bottom: 12px;
        .item {
          display: flex;
          padding-right: 43px;
          justify-content: space-between;
          font-size: 15px;
          color: #626262;
          letter-spacing: 0.05em;
          i {
            margin-right: 5px;
            font-style: normal;
          }
          .left {
            width: 200px;
            position: relative;
            padding: 5px 0;
            &:after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 1px;
              background: linear-gradient(
                to right,
                #a0a0a0 0%,
                #a0a0a0 50%,
                #fff 50%,
                #fff 100%
              );
              background-size: 2px 1px;
            }
          }
          .right {
            width: calc(100% - 215px);
            position: relative;
            padding: 5px 0;
            &:after {
              content: "";
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 1px;
              background: linear-gradient(
                to right,
                #a0a0a0 0%,
                #a0a0a0 50%,
                #fff 50%,
                #fff 100%
              );
              background-size: 2px 1px;
            }
          }
          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 83%;
            height: 1px;
            background-color: #e5e5e5;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 83%;
            height: 1px;
            background-color: #e5e5e5;
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
  watch: {
    recipe(v) {
      v.preparations.map(item => {
        this.preparations[item.type] = this.preparations[item.type] ? this.preparations[item.type] : [];
        this.preparations[item.type].push(item);
      });
      this.$forceUpdate()
    },immediate:true
  },
  data() {
    return {
      preparations: {}
    };
  },
  computed:{
    hii(){
      return this.type
    }
  },
  components: {
    CircleTxt
  }
};
</script>
