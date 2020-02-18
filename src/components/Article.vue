<template>
  <div class="article">
    <div class="wrap">
      <div class="content-box">
        <div class="title-area">
          <h1 class="articleTitle">{{news.title}}
            <div class="newsDate">
              <b>活動期間：[{{news.date_start}} ~ {{news.date_end}}]</b>
            </div>
          </h1>
        </div>
        <div v-html="news.html">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['news']
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1199px) {
  .article {
    .wrap {
      width: calc(100% - 60px);
    }
  }
}
@media screen and (min-width: 1200px) {
}
.article {
  .wrap {
    margin: 0 auto;
    .content-box {
      padding: 80px 0;
      .title-area {
        margin-bottom: 10px;
        text-align: left;
        .newsDate {
          padding: 5px 0;
          color: #626262;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .articleTitle {
          padding-bottom: 15px;
          border-bottom: 1px solid #e5e5e5;
          font-weight: bold;
          font-size: 30px;
          letter-spacing: 0.1em;
        }
      }
      .textEditor {
        clear: both;
        font-size: 15px;
        color: #626262;
        line-height: 1.8;
        margin-bottom: 40px;
        text-align: left;
        img {
          max-width: 100%;
        }
        ul {
          padding-left: 0;
        }
        ol {
          padding-left: 0;
        }
      }
    }
  }
}
</style>
