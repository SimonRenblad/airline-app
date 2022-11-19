<template>
  <div :class="[`home-indicator-white`, className || ``]"></div>
</template>

<script>
export default {
  name: "HomeIndicatorWhite",
  props: ["className"],
};
</script>

<style>
.home-indicator-white {
  background-color: var(--white);
  border: 1px none;
  border-radius: 100px;
  height: 5px;
  left: 129px;
  position: absolute;
  top: 774px;
  width: 134px;
}

.home-indicator-white.home-indicator-white-1,
.home-indicator-white.home-indicator-white-14,
.home-indicator-white.home-indicator-white-15,
.home-indicator-white.home-indicator-white-16 {
  left: unset;
  margin-right: 4px;
  margin-top: 31px;
  position: unset;
  top: unset;
}

.home-indicator-white.home-indicator-white-2,
.home-indicator-white.home-indicator-white-17 {
  left: 152px;
  top: 966px;
}

.home-indicator-white.home-indicator-white-3,
.home-indicator-white.home-indicator-white-5,
.home-indicator-white.home-indicator-white-6,
.home-indicator-white.home-indicator-white-7,
.home-indicator-white.home-indicator-white-8,
.home-indicator-white.home-indicator-white-9,
.home-indicator-white.home-indicator-white-10,
.home-indicator-white.home-indicator-white-11 {
  left: 152px;
  top: 856px;
}

.home-indicator-white.home-indicator-white-4,
.home-indicator-white.home-indicator-white-13 {
  background-color: var(--black);
  left: unset;
  margin-right: 4px;
  margin-top: 107px;
  position: unset;
  top: unset;
}

.home-indicator-white.home-indicator-white-12 {
  left: 152px;
  top: 957px;
}
</style>
