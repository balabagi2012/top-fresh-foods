<template>
  <div class="news-list">
    <div class="item" v-for="newsInfo in news" :key="newsInfo['.key']">
      <div class="Img">
        <router-link :to="{ path: '/news/info', query: { id: newsInfo['.key'] }}">
          <img :src="newsInfo.img_url" alt>
        </router-link>
      </div>
      <div class="Txt b-box">
        <div class="date">
          <div class="top">Update</div>
          <div class="day">{{newsInfo.date}}</div>
        </div>
        <h3>
          <router-link
            :to="{ path: '/news/info', query: { id: newsInfo['.key'] }}"
          >{{newsInfo.title}}</router-link>
        </h3>
        <p v-text="newsInfo.intro"></p>
        <div class="btn">
          <router-link :to="{ path: '/news/info', query: { id: newsInfo['.key'] }}">詳細內容</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["news"]
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .news-list {
    width: calc(100% - 60px);
    margin: 30px auto;
    .item {
      display: block;
      .Img {
        width: 100%;
      }
      .Txt {
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .news-list {
    width: 100%;
    margin: 0 auto;
    .item {
      display: flex;
      .Img {
        width: 420px;
      }
      .Txt {
        width: calc(100% - 420px);
      }
    }
  }
}

.news-list {
  .item {
    width: 100%;
    background-color: #fff;
    &:not(:first-child) {
      margin-top: 30px;
    }
    &:hover {
      img {
        transform: scale(1.02);
        opacity: 0.6;
      }
    }
    .Txt {
      padding: 30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .btn {
        a {
          position: relative;
          display: flex;
          align-items: center;
          font-weight: 400;
          font-size: 17px;
          color: #009944;
          letter-spacing: 0.075em;
          i {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 50px;
            margin-right: 12px;
            border-radius: 50%;
            background-color: #22ac38;
            &::before {
              content: "";
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 2px;
              height: 23px;
              border-radius: 1px;
              background-color: #fff;
            }
            &::after {
              content: "";
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 23px;
              height: 2px;
              border-radius: 1px;
              background-color: #fff;
            }
          }
        }
      }
      h3 {
        text-align: left;
        margin: 0;
        width: 100%;
        margin-bottom: 12px;
        a {
          display: block;
          height: 30px;
          font-weight: bold;
          font-size: 22px;
          line-height: 1.4;
          color: #263149;
          letter-spacing: 0.1em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:hover {
            color: #009944;
          }
        }
      }
      p {
        margin-bottom: 30px;
        text-align: left;
        text-overflow: ellipsis;
        font-size: 15px;
        color: #626262;
        line-height: 27px;
        letter-spacing: 0.05em;
        overflow-wrap: break-word;
      }
      .date {
        position: relative;
        display: flex;
        align-items: center;
        margin-right: auto;
        padding-bottom: 3px;
        margin-bottom: 18px;
        font-weight: bold;
        text-align: center;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border: 1px solid #a0a0a0;
          border-left: none;
          border-right: none;
        }
        .top {
          margin-right: 10px;
          font-size: 16px;
          color: #1b1b1b;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        .day {
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          letter-spacing: -0.01em;
        }
      }
    }
    .Img {
      background-color: #fff;
      overflow: hidden;
      a {
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease-in-out;
        }
      }
    }
  }
}
</style>
