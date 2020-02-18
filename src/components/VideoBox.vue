<template>
  <div class="video-box">
    <div class="wrap">
      <!-- wrap -->
      <div class="textEditor">
        <div class="myTitle">{{quality.title}}</div>
        <p v-text="quality.intro">
        </p>
      </div>
      <div class="playerBox" v-for="(video,index) in quality.videos" :key="index"> 
        <iframe
          width="640"
          class="video"
          height="360"
          :src="`https://www.youtube.com/embed/${video.url?video.url.slice(32):'HdGzHZJhW3o'}?modestbranding=1&autoplay=${index===0?'1':'0'}&controls=1&showinfo=0&rel=0&enablejsapi=1&version=3&allowfullscreen=true&wmode=transparent`"
          frameborder="0"
          allow="accelerometer; autoplay;encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['quality']
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .video-box {
    padding: 50px 0;
    .wrap {
      padding: 0 30px;
      width: calc(100% - 60px);
      .playerBox {
        max-width: 700px;
        width: 100%;
        height: 400px;
      }
      .textEditor {
        p {
          line-height: 2;
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .video-box {
    padding: 80px 0;
    .wrap {
      width: 1200px;
      .playerBox {
        max-width: 889px;
        width: 100%;
        height: 500px;
      }
    }
  }
}
.video-box {
  .wrap {
    margin: 0 auto;
    .playerBox {
      position: relative;
      margin: 35px auto 0;
      border: none;
      box-shadow: none;
      .video {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: none;
        box-shadow: none;
        margin-top: none;
        margin-bottom: none;
        width: 100%;
        height: 100%;
      }
    }

    .textEditor {
      text-align: center;
      .myTitle {
        font-weight: bold;
        font-size: 25px;
        color: #1b1b1b;
      }
      p {
        line-height: 1.5;
      }
    }
  }
}
</style>
