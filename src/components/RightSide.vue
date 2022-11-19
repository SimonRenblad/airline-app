<template>
  <div :class="[`right-side-1`, className || ``]">
    <img
      class="icon-mobile-signal-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/icon---mobile-signal@2x.svg"
      alt="Icon / Mobile Signal"
    />
    <img
      class="icon-signal-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c9929974d0023ddaf581/img/wifi@2x.svg"
      alt="icon-signal"
    />
    <img
      class="status-bar-battery-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378915a0efb2ec47e837b7b/img/-statusbar-battery-2@2x.svg"
      alt="StatusBar-battery"
    />
  </div>
</template>

<script>
export default {
  name: "RightSide",
  props: ["className"],
};
</script>

<style>
.right-side-1 {
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-top: 4px;
  min-width: 77px;
}

.icon-mobile-signal-1 {
  height: 12px;
  width: 18px;
}

.icon-signal-1 {
  height: 12px;
  margin-bottom: 0.17px;
  margin-left: 8px;
  width: 17px;
}

.status-bar-battery-1 {
  height: 13px;
  margin-left: 7px;
  width: 27px;
}

.right-side-1.right-side-2,
.right-side-1.right-side-8,
.right-side-1.right-side-10,
.right-side-1.right-side-11,
.right-side-1.right-side-12,
.right-side-1.right-side,
.right-side-1.right-side-14,
.right-side-1.right-side-17 {
  justify-content: unset;
  padding: 0 0px;
}

.right-side-1.right-side-3,
.right-side-1.right-side-4,
.right-side-1.right-side-5,
.right-side-1.right-side-6,
.right-side-1.right-side-7,
.right-side-1.right-side-9,
.right-side-1.right-side-13,
.right-side-1.right-side-15 {
  justify-content: center;
}
</style>
