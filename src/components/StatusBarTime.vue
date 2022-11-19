<template>
  <div class="status-bar-time">
    <div class="time sfprotext-normal-black-17px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "StatusBarTime",
  props: ["children"],
};
</script>

<style>
.status-bar-time,
.status-bar-time-1,
.status-bar-time-2 {
  align-items: flex-end;
  align-self: flex-end;
  border: 0px none;
  border-radius: 24px;
  display: flex;
  height: 21px;
  margin-left: 1px;
  min-width: 54px;
}

.time,
.time-1,
.time-2 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-height: 20px;
  text-align: center;
  white-space: nowrap;
  width: 54px;
}
</style>
