<template>
  <div class="title" :class="color">
    <slot name="en" class="en"></slot>
    <slot name="tw" class="tw"></slot>
  </div>
</template>
<style lang="scss" scoped>
.title {
  position: relative;
  left: 0;
  display: flex;
  height: 135px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  div {
    &:first-child {
      display: block;
      margin-top: 0;
      margin-bottom: 7px;
      font-weight: bold;
      font-family: "Franklin Gothic Medium";
      font-style: normal;
      color: #000;
      font-size: 38px;
      line-height: 1;
      text-transform: uppercase;
    }
    &:last-child {
      font-weight: bold;
      font-size: 20px;
      line-height: 1.3;
      letter-spacing: 0.05em;
      margin: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: -45px;
    top: -0%;
    z-index: -1;
    width: 135px;
    height: 135px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &.green::before {
    background-image: url(../assets/images/circle/01.png);
  }
  &.yellow::before {
    background-image: url(../assets/images/circle/02.png);
  }
}
</style>
<script>
export default {
  props: ["color"]
};
</script>
