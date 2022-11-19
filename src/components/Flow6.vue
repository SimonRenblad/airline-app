<template>
  <div class="container-center-horizontal">
    <div class="flow-6 screen">
      <div class="overlap-group-4 sfprotext-normal-oracle-17px">
        <status-bar :className="statusBarProps.className" :statusBar2Props="statusBarProps.statusBar2Props" />
        <div class="flex-row-7">
          <img class="image-6-4" :src="image6" alt="image 6" />
          <div class="cathay-beyond-3 sfprotext-regular-normal-oracle-17px">
            <span class="sfprotext-regular-normal-oracle-17px">{{ spanText1 }}</span
            ><span class="sfprotext-regular-normal-oracle-17px">{{ spanText2 }}</span>
          </div>
          <img
            class="union-9"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c9929974d0023ddaf581/img/union@2x.svg"
            alt="Union"
          />
        </div>
        <div class="lounge-access">{{ loungeAccess }}</div>
        <div class="overlap-group1-3">
          <img
            class="mask-group"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/mask-group@2x.svg"
            alt="Mask group"
          />
          <img class="rectangle-40" :src="rectangle40" alt="Rectangle 40" />
          <p class="check-out-the-deck-lounge sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">{{ spanText3 }}</span
            ><span class="sfprotext-bold-white-17px">{{ spanText4 }}</span
            ><span class="sfprotext-regular-normal-white-17px">{{ spanText5 }}</span>
          </p>
          <p class="address-9 sfprotext-light-white-12px">{{ address }}</p>
        </div>
        <div class="recommended-amenities">{{ recommendedAmenities }}</div>
        <div class="overlap-group4-2" :style="{ 'background-image': 'url(' + overlapGroup4 + ')' }">
          <div class="rectangle-4-1"></div>
          <div class="nippon-ramen sfprotext-regular-normal-white-17px">{{ nipponRamen }}</div>
          <img
            class="vectorclear-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="navigate-3-minutes sfprotext-light-white-12px">{{ navigate3Minutes }}</div>
        </div>
        <div class="overlap-group3-2">
          <img class="rectangle-43" :src="rectangle43" alt="Rectangle 43" />
          <div class="rectangle-4-1"></div>
          <div class="taka-sushi-sake sfprotext-regular-normal-white-17px">{{ takaSushiSake }}</div>
          <img
            class="vectorclear-8"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="navigate-5-minutes sfprotext-light-white-12px">{{ navigate5Minutes }}</div>
        </div>
        <div class="overlap-group2-2" :style="{ 'background-image': 'url(' + overlapGroup2 + ')' }">
          <div class="rectangle-4-1"></div>
          <div class="showers sfprotext-regular-normal-white-17px">{{ showers }}</div>
          <img
            class="vectorclear-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="navigate-11-minutes sfprotext-light-white-12px">{{ navigate11Minutes }}</div>
        </div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
      </div>
    </div>
  </div>
</template>

<script>
import StatusBar from "./StatusBar";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
export default {
  name: "Flow6",
  components: {
    StatusBar,
    HomeIndicatorWhite,
  },
  props: [
    "image6",
    "spanText1",
    "spanText2",
    "loungeAccess",
    "rectangle40",
    "spanText3",
    "spanText4",
    "spanText5",
    "address",
    "recommendedAmenities",
    "overlapGroup4",
    "nipponRamen",
    "navigate3Minutes",
    "rectangle43",
    "takaSushiSake",
    "navigate5Minutes",
    "overlapGroup2",
    "showers",
    "navigate11Minutes",
    "statusBarProps",
    "homeIndicatorWhiteProps",
  ],
};
</script>

<style>
.flow-6 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group-4 {
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  display: flex;
  flex-direction: column;
  margin-left: -23px;
  margin-top: -17px;
  min-height: 887px;
  padding: 17px 23px;
  position: relative;
  width: 442px;
}

.flex-row-7 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 34px;
  margin-right: 31.89px;
  margin-top: 20px;
  min-width: 243px;
}

.image-6-4 {
  height: 28px;
  width: 24px;
}

.cathay-beyond-3 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-bottom: 2.89px;
  margin-left: 9px;
  min-height: 19px;
  min-width: 118px;
  white-space: nowrap;
}

.union-9 {
  align-self: flex-end;
  height: 25px;
  margin-left: 67px;
  width: 25px;
}

.lounge-access {
  align-self: flex-start;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 26px;
  margin-top: 26px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group1-3 {
  height: 293px;
  margin-right: 3px;
  margin-top: 15px;
  position: relative;
  width: 349px;
}

.mask-group {
  height: 179px;
  left: 0;
  position: absolute;
  top: 114px;
  width: 349px;
}

.rectangle-40 {
  height: 148px;
  left: 4px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 341px;
}

.check-out-the-deck-lounge {
  left: 19px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 13px;
  white-space: nowrap;
}

.address-9 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 118px;
  white-space: nowrap;
}

.recommended-amenities {
  align-self: flex-start;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 26px;
  margin-top: 21px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group4-2 {
  background-size: 100% 100%;
  height: 65px;
  margin-right: 3px;
  margin-top: 15px;
  position: relative;
  width: 341px;
}

.rectangle-4-1 {
  background-color: var(--shark);
  border: 1px none;
  border-radius: 5px;
  height: 65px;
  left: 0;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 341px;
}

.nippon-ramen,
.showers {
  left: 20px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 23px;
  white-space: nowrap;
}

.vectorclear-7 {
  height: 19px;
  left: 308px;
  position: absolute;
  top: 23px;
  width: 11px;
}

.navigate-3-minutes {
  left: 198px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 22px;
  white-space: nowrap;
}

.overlap-group3-2 {
  height: 65px;
  margin-right: 4px;
  margin-top: 14px;
  position: relative;
  width: 342px;
}

.rectangle-43 {
  height: 65px;
  left: 1px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 341px;
}

.taka-sushi-sake {
  left: 21px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 23px;
  white-space: nowrap;
}

.vectorclear-8 {
  height: 19px;
  left: 309px;
  position: absolute;
  top: 23px;
  width: 11px;
}

.navigate-5-minutes {
  left: 199px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 22px;
  white-space: nowrap;
}

.overlap-group2-2 {
  background-position: 50% 50%;
  background-size: cover;
  height: 65px;
  margin-right: 3px;
  margin-top: 14px;
  position: relative;
  width: 341px;
}

.navigate-11-minutes {
  left: 195px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 22px;
  white-space: nowrap;
}
</style>
