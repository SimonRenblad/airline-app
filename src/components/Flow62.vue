<template>
  <div class="container-center-horizontal">
    <div class="flow-7 screen">
      <div class="overlap-group-13 sfprotext-normal-oracle-17px">
        <status-bar :className="statusBarProps.className" :statusBar2Props="statusBarProps.statusBar2Props" />
        <div class="flex-row-30">
          <img
            class="image-6-11"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/image-6@2x.png"
            alt="image 6"
          />
          <div class="cathay-beyond-12 sfprotext-regular-normal-oracle-17px">
            <span class="sfprotext-regular-normal-oracle-17px">Cathay</span
            ><span class="sfprotext-regular-normal-oracle-17px">Beyond</span>
          </div>
          <img
            class="union-26"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/union@2x.svg"
            alt="Union"
          />
        </div>
        <div class="lounge-access-1">Lounge access</div>
        <div class="overlap-group1-12">
          <img
            class="mask-group-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/mask-group@2x.svg"
            alt="Mask group"
          />
          <img
            class="rectangle-40-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/rectangle-40@2x.png"
            alt="Rectangle 40"
          />
          <p class="check-out-the-deck-lounge-1 sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">Check out </span
            ><span class="sfprotext-bold-white-17px">The Deck</span
            ><span class="sfprotext-regular-normal-white-17px"> Lounge!</span>
          </p>
          <p class="address-29 sfprotext-light-white-12px">3 mins ahead of you</p>
        </div>
        <div class="recommended-amenities-1">Recommended amenities</div>
        <div class="overlap-group2-9">
          <div class="rectangle-4-2"></div>
          <div class="nippon-ramen-1 sfprotext-regular-normal-white-17px">Nippon Ramen</div>
          <img
            class="vectorclear-25"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="navigate-3-minutes-1 sfprotext-light-white-12px">Navigate 3 minutes</div>
        </div>
        <div class="overlap-group3-9">
          <img
            class="rectangle-43-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/rectangle-43@2x.png"
            alt="Rectangle 43"
          />
          <div class="rectangle-4-2"></div>
          <div class="taka-sushi-sake-1 sfprotext-regular-normal-white-17px">Taka Sushi &amp; Sake</div>
          <img
            class="vectorclear-26"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="navigate-5-minutes-1 sfprotext-light-white-12px">Navigate 5 minutes</div>
        </div>
        <div class="overlap-group4-9">
          <div class="rectangle-4-2"></div>
          <div class="showers-1 sfprotext-regular-normal-white-17px">Showers</div>
          <img
            class="vectorclear-25"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="navigate-11-minutes-1 sfprotext-light-white-12px">Navigate 11 minutes</div>
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
  name: "Flow62",
  components: {
    StatusBar,
    HomeIndicatorWhite,
  },
  props: ["statusBarProps", "homeIndicatorWhiteProps"],
};
</script>

<style>
.flow-7 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group-13 {
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

.flex-row-30 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 34px;
  margin-right: 31.89px;
  margin-top: 20px;
  min-width: 243px;
}

.image-6-11 {
  height: 28px;
  width: 24px;
}

.cathay-beyond-12 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-bottom: 2.89px;
  margin-left: 9px;
  min-height: 19px;
  min-width: 118px;
  white-space: nowrap;
}

.union-26 {
  align-self: flex-end;
  height: 25px;
  margin-left: 67px;
  width: 25px;
}

.lounge-access-1 {
  align-self: flex-start;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 26px;
  margin-top: 26px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group1-12 {
  height: 293px;
  margin-right: 3px;
  margin-top: 15px;
  position: relative;
  width: 349px;
}

.mask-group-1 {
  height: 179px;
  left: 0;
  position: absolute;
  top: 114px;
  width: 349px;
}

.rectangle-40-1 {
  height: 148px;
  left: 4px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 341px;
}

.check-out-the-deck-lounge-1 {
  left: 19px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 13px;
  white-space: nowrap;
}

.address-29 {
  left: 224px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 118px;
  white-space: nowrap;
}

.recommended-amenities-1 {
  align-self: flex-start;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 26px;
  margin-top: 21px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group2-9 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/rectangle-41@2x.png);
  background-size: 100% 100%;
  height: 65px;
  margin-right: 3px;
  margin-top: 15px;
  position: relative;
  width: 341px;
}

.rectangle-4-2 {
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

.nippon-ramen-1,
.showers-1 {
  left: 20px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 23px;
  white-space: nowrap;
}

.vectorclear-25 {
  height: 19px;
  left: 308px;
  position: absolute;
  top: 23px;
  width: 11px;
}

.navigate-3-minutes-1 {
  left: 198px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 22px;
  white-space: nowrap;
}

.overlap-group3-9 {
  height: 65px;
  margin-right: 4px;
  margin-top: 14px;
  position: relative;
  width: 342px;
}

.rectangle-43-1 {
  height: 65px;
  left: 1px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 341px;
}

.taka-sushi-sake-1 {
  left: 21px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 23px;
  white-space: nowrap;
}

.vectorclear-26 {
  height: 19px;
  left: 309px;
  position: absolute;
  top: 23px;
  width: 11px;
}

.navigate-5-minutes-1 {
  left: 199px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 22px;
  white-space: nowrap;
}

.overlap-group4-9 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/rectangle-45@2x.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 65px;
  margin-right: 3px;
  margin-top: 14px;
  position: relative;
  width: 341px;
}

.navigate-11-minutes-1 {
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
