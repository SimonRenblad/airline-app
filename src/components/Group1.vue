<template>
  <div :class="[`group-1`, className || ``]">
    <img
      class="icon-plane"
      src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/airplanemode-active-1@2x.svg"
      alt="icon-plane"
    />
  </div>
</template>

<script>
export default {
  name: "Group1",
  props: ["className"],
};
</script>

<style>
.group-1 {
  align-items: flex-end;
  background-color: var(--william);
  border-radius: 15px;
  display: flex;
  height: 30px;
  justify-content: flex-end;
  left: 0;
  min-width: 30px;
  padding: 3px;
  position: absolute;
  top: 6px;
}

.icon-plane {
  height: 23px;
  width: 23px;
}

.group-1.group-1-1,
.group-1.group-1-14 {
  left: 131px;
  top: 263px;
}

.group-1.group-1-2,
.group-1.group-1-3,
.group-1.group-1-4,
.group-1.group-1-5,
.group-1.group-1-6 {
  left: 131px;
  top: 153px;
}

.group-1.load {
  background-color: var(--white);
  left: 78px;
  top: 480px;
}

.group-1.load-1 {
  background-color: var(--white);
  left: 335px;
  top: 480px;
}

.group-1.group-1-10 {
  left: 131px;
  top: 254px;
}

.group-1.group-1-11,
.group-1.group-1-12 {
  top: 0;
}

.group-1.group-1-13 {
  left: 92px;
  top: 30px;
}
</style>
