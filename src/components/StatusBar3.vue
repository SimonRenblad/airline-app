<template>
  <div class="status-bar-5">
    <status-bar-time2 />
    <right-side :className="rightSideProps.className" />
  </div>
</template>

<script>
import StatusBarTime2 from "./StatusBarTime2";
import RightSide from "./RightSide";
export default {
  name: "StatusBar3",
  components: {
    StatusBarTime2,
    RightSide,
  },
  props: ["rightSideProps"],
};
</script>

<style>
.status-bar-5,
.status-bar-6,
.status-bar-7,
.status-bar-8,
.status-bar-9,
.status-bar-10,
.status-bar-11,
.status-bar-12,
.status-bar-13,
.status-bar-14,
.status-bar-4,
.status-bar-15,
.status-bar-16,
.status-bar-17,
.status-bar-18 {
  align-items: center;
  border: 1px none;
  display: flex;
  gap: 207px;
  height: 47px;
  padding: 12px 26.6px;
  position: relative;
  width: 393px;
}
</style>
