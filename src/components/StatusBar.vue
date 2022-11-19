<template>
  <div :class="[`status-bar`, className || ``]">
    <status-bar2
      :statusBarTimeProps="statusBar2Props.statusBarTimeProps"
      :statusBarTimeProps2="statusBar2Props.statusBarTimeProps2"
    />
  </div>
</template>

<script>
import StatusBar2 from "./StatusBar2";
export default {
  name: "StatusBar",
  components: {
    StatusBar2,
  },
  props: ["className", "statusBar2Props"],
};
</script>

<style>
.status-bar {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  height: 47px;
  min-width: 393px;
  position: relative;
}

.status-bar.status-bar-white,
.status-bar.status-bar-white-1 {
  align-self: flex-start;
}
</style>
