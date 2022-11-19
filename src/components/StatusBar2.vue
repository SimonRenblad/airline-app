<template>
  <div class="status-bar-1">
    <status-bar-time :children="statusBarTimeProps.children" />
    <right-side :className="statusBarTimeProps2.className" />
  </div>
</template>

<script>
import StatusBarTime from "./StatusBarTime";
import RightSide from "./RightSide";
export default {
  name: "StatusBar2",
  components: {
    StatusBarTime,
    RightSide,
  },
  props: ["statusBarTimeProps", "statusBarTimeProps2"],
};
</script>

<style>
.status-bar-1,
.status-bar-2,
.status-bar-3 {
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
