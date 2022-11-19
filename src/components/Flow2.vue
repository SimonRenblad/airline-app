<template>
  <div class="container-center-horizontal">
    <div class="flow-2 screen">
      <div class="overlap-group-16">
        <status-bar-white :statusBar3Props="statusBarWhiteProps.statusBar3Props" />
        <div class="flex-row-43">
          <img class="image-6-14" :src="image6" alt="image 6" />
          <div class="cathay-beyond-15 sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
            ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
          </div>
        </div>
        <div class="overlap-group1-14">
          <img
            class="subtract-7"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/subtract-10@2x.svg"
            alt="Subtract"
          />
          <img class="rectangle-9-1" :src="rectangle9" alt="Rectangle 9" />
          <div class="hkg-14 sfprotext-thin-white-34px">{{ hkg }}</div>
          <div class="syd-1 sfprotext-thin-white-34px">{{ syd }}</div>
          <img
            class="line-1-14"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
            alt="Line 1"
          />
          <div class="x1255am-1 sfprotext-light-white-12px">{{ x1255Am }}</div>
          <div class="security-13 sfprotext-light-white-17px">{{ security }}</div>
          <div class="please-prepare-13 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
          <div class="passport-and-identification-12 sfprotext-regular-normal-white-12px">
            {{ passportAndIdentification }}
          </div>
          <group1 :className="group1Props.className" />
          <img
            class="fingerprint-13"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/fingerprint-10@2x.svg"
            alt="fingerprint"
          />
          <div class="address-39 sfprotext-lightitalic-light-white-17px">{{ address1 }}</div>
          <div class="check-out-the-deck-1 sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">{{ spanText3 }}</span
            ><span class="sfprotext-bold-white-17px">{{ spanText4 }}</span>
          </div>
          <div class="your-transfer-experience-1 sfprotext-regular-normal-white-12px">{{ yourTransferExperience }}</div>
          <div class="address-40 sfprotext-light-white-12px">{{ address2 }}</div>
          <img
            class="near_me-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/near-me-1@2x.svg"
            alt="near_me"
          />
          <div class="number-36 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
          <div class="number-37 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
          <div class="cx2101-a350-1 sfprotext-light-white-12px">{{ cx2101A350 }}</div>
          <div class="address-41 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
          <p class="address-42 sfprotext-medium-white-12px">{{ address4 }}</p>
          <div class="terminal-14 sfprotext-light-white-17px">{{ terminal }}</div>
          <div class="gate-14 sfprotext-light-white-17px">{{ gate }}</div>
        </div>
        <div class="overlap-group2-12">
          <img class="union-35" :src="union1" alt="Union" />
          <div class="inflight-shopping-14 sfprotext-normal-white-17px">{{ inflightShopping1 }}</div>
          <img
            class="vectorclear-32"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img
            class="vectorclear-31"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img class="union-36" :src="union2" alt="Union" /><img class="union-37" :src="union3" alt="Union" />
          <div class="keep-watching-1 sfprotext-normal-white-17px">{{ keepWatching }}</div>
          <div class="surname-2 sfprotext-light-white-12px">{{ surname }}</div>
          <div class="inflight-shopping-15 sfprotext-normal-white-17px">{{ inflightShopping2 }}</div>
          <img
            class="vectorclear-31"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <div class="ellipse-6-1"></div>
          <div class="text-18 sfprotext-light-white-12px">{{ text18 }}</div>
          <img
            class="play_arrow-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/play-arrow@2x.svg"
            alt="play_arrow"
          />
        </div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
      </div>
    </div>
  </div>
</template>

<script>
import StatusBarWhite from "./StatusBarWhite";
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
export default {
  name: "Flow2",
  components: {
    StatusBarWhite,
    Group1,
    HomeIndicatorWhite,
  },
  props: [
    "image6",
    "spanText1",
    "spanText2",
    "rectangle9",
    "hkg",
    "syd",
    "x1255Am",
    "security",
    "pleasePrepare",
    "passportAndIdentification",
    "address1",
    "spanText3",
    "spanText4",
    "yourTransferExperience",
    "address2",
    "number1",
    "number2",
    "cx2101A350",
    "address3",
    "address4",
    "terminal",
    "gate",
    "union1",
    "inflightShopping1",
    "union2",
    "union3",
    "keepWatching",
    "surname",
    "inflightShopping2",
    "text18",
    "statusBarWhiteProps",
    "group1Props",
    "homeIndicatorWhiteProps",
  ],
};
</script>

<style>
.flow-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group-16 {
  align-items: center;
  background-color: var(--oracle);
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

.flex-row-43 {
  align-items: center;
  display: flex;
  gap: 9px;
  margin-right: 3px;
  margin-top: 20px;
  min-width: 151px;
}

.image-6-14 {
  height: 28px;
  width: 24px;
}

.cathay-beyond-15 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 3px;
  min-height: 19px;
  min-width: 118px;
  white-space: nowrap;
}

.overlap-group1-14 {
  height: 418px;
  margin-right: 5px;
  margin-top: 11px;
  position: relative;
  width: 359px;
}

.subtract-7 {
  height: 321px;
  left: 1px;
  position: absolute;
  top: 0;
  width: 358px;
}

.rectangle-9-1 {
  height: 101px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 317px;
  width: 355px;
}

.hkg-14 {
  left: 24px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 34px;
  white-space: nowrap;
}

.syd-1 {
  left: 269px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 34px;
  white-space: nowrap;
}

.line-1-14 {
  height: 1px;
  left: 102px;
  object-fit: cover;
  position: absolute;
  top: 45px;
  width: 155px;
}

.x1255am-1 {
  left: 158px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 45px;
  white-space: nowrap;
}

.security-13 {
  left: 25px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 105px;
  white-space: nowrap;
}

.please-prepare-13 {
  left: 25px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 142px;
  white-space: nowrap;
}

.passport-and-identification-12 {
  left: 58px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 168px;
  white-space: nowrap;
}

.fingerprint-13 {
  height: 22px;
  left: 28px;
  position: absolute;
  top: 169px;
  width: 22px;
}

.address-39 {
  left: 278px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 105px;
  white-space: nowrap;
}

.check-out-the-deck-1 {
  left: 28px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 354px;
  white-space: nowrap;
}

.your-transfer-experience-1 {
  left: 28px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 369px;
  white-space: nowrap;
}

.address-40 {
  left: 270px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 357px;
  white-space: nowrap;
}

.near_me-1 {
  height: 20px;
  left: 244px;
  position: absolute;
  top: 358px;
  width: 20px;
}

.number-36 {
  left: 101px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 223px;
  white-space: nowrap;
}

.number-37 {
  left: 234px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 223px;
  white-space: nowrap;
}

.cx2101-a350-1 {
  left: 141px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 23px;
  white-space: nowrap;
}

.address-41 {
  left: 182px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 248px;
  white-space: nowrap;
}

.address-42 {
  left: 95px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 276px;
  white-space: nowrap;
}

.terminal-14 {
  left: 25px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 228px;
  white-space: nowrap;
}

.gate-14 {
  left: 182px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 228px;
  white-space: nowrap;
}

.overlap-group2-12 {
  height: 284px;
  margin-right: 6px;
  position: relative;
  width: 358px;
}

.union-35 {
  height: 101px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 355px;
}

.inflight-shopping-14 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 220px;
  white-space: nowrap;
}

.vectorclear-32 {
  height: 19px;
  left: 228px;
  position: absolute;
  top: 81px;
  width: 11px;
}

.vectorclear-31 {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 221px;
  width: 11px;
}

.union-36 {
  height: 184px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 358px;
}

.union-37 {
  height: 104px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 358px;
}

.keep-watching-1 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 29px;
  white-space: nowrap;
}

.surname-2 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 135px;
  white-space: nowrap;
}

.inflight-shopping-15 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 220px;
  white-space: nowrap;
}

.ellipse-6-1 {
  background-color: var(--black);
  border: 1px none;
  border-radius: 32px;
  height: 64px;
  left: 148px;
  opacity: 0.4;
  position: absolute;
  top: 59px;
  width: 64px;
}

.text-18 {
  left: 160px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.play_arrow-1 {
  height: 14px;
  left: 176px;
  position: absolute;
  top: 77px;
  width: 11px;
}
</style>
