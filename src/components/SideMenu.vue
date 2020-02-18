<template>
  <div class="side-menu">
    <div class="side-title" :class="color">
      <em>
        <span>{{en}}</span>
      </em>
      <h3>{{tw}}</h3>
    </div>
    <div>
      <ul class="side-link">
        <li v-for="categoryInfo in category" :key="categoryInfo['.key']">
          <router-link :to="{ path: path, query: { category: categoryInfo.name }}">{{categoryInfo.name}}</router-link>          
        </li>        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:['en','tw','color','category','path']
}
</script>

<style lang="scss">
.side-menu {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  .side-link {
    list-style: none;
    padding-left: 0;
    li {
      position: relative;
      a {
        position: relative;
        display: block;
        padding: 10px 0 10px 50px;
        font-size: 17px;
        color: #626262;
        text-align: left;
        transition: all 0.5s;
        letter-spacing: 0.1rem;
        &:hover {
          padding-left: 70px;
          color: #263149;
          &::before {
            width: 55px;
            background-color: #22ac38;
          }
        }
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -0.5px;
          width: 28px;
          height: 1px;
          background-color: #e5e5e5;
          transition: all 0.5s;
        }
      }
    }
  }
  .side-title {
    position: relative;
    z-index: 0;
    margin-bottom: 80px;
    text-align: left;
    &:before {
      content: "";
      position: absolute;
      left: -25px;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      z-index: -1;
      width: 176px;
      height: 176px;
      background: url(../assets/images/circle/01.png) no-repeat;
      background-size: contain;
    }
    &.green:before {
      background: url(../assets/images/circle/01.png);
      background-size: contain;
    }
    &.yellow:before {
      background: url(../assets/images/circle/02.png);
      background-size: contain;
    }
    em {
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      width: 100%;
      color: #000;
      font-family: arial, sans-serif;
      text-transform: uppercase;
      text-align: left;
      span {
        display: block;
        width: 300px;        
        position: absolute;
        top: 15px;
        transform: scaleX(0.74);
        transform-origin: left;
      }
    }
    h3 {
      margin-top: 55px;
      font-weight: bold;
      font-size: 22px;
      color: #000;
      letter-spacing: 0.075em;
    }
  }
}
</style>

