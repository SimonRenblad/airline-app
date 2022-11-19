<template>
  <div :class="[`status-bar-white-3`, className || ``]">
    <status-bar3 :rightSideProps="statusBar3Props.rightSideProps" />
  </div>
</template>

<script>
import StatusBar3 from "./StatusBar3";
export default {
  name: "StatusBarWhite",
  components: {
    StatusBar3,
  },
  props: ["className", "statusBar3Props"],
};
</script>

<style>
.status-bar-white-3 {
  align-items: flex-start;
  align-self: flex-start;
  border: 1px none;
  display: flex;
  height: 47px;
  min-width: 393px;
  position: relative;
}

.status-bar-white-3.status-bar-white-4,
.status-bar-white-3.status-bar-white-16 {
  align-self: unset;
  left: 23px;
  position: absolute;
  top: 127px;
}

.status-bar-white-3.status-bar-white-5,
.status-bar-white-3.status-bar-white-6,
.status-bar-white-3.status-bar-white-7,
.status-bar-white-3.status-bar-white-8,
.status-bar-white-3.status-bar-white-9,
.status-bar-white-3.status-bar-white-10,
.status-bar-white-3.status-bar-white-11,
.status-bar-white-3.status-bar-white-12 {
  align-self: unset;
  left: 23px;
  position: absolute;
  top: 17px;
}

.status-bar-white-3.status-bar-white-2 {
  align-self: unset;
  left: 23px;
  position: absolute;
  top: 118px;
}
</style>
