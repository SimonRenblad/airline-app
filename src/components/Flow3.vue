<template>
  <div class="container-center-horizontal">
    <div class="flow-3 screen">
      <div class="overlap-group1-15">
        <div class="beyond-background-3"></div>
        <status-bar-white
          :className="statusBarWhiteProps.className"
          :statusBar3Props="statusBarWhiteProps.statusBar3Props"
        />
        <img
          class="subtract-8"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/subtract-12@2x.svg"
          alt="Subtract"
        />
        <img class="rectangle-9-2" :src="rectangle9" alt="Rectangle 9" />
        <div class="hkg-15 sfprotext-thin-white-34px">{{ hkg }}</div>
        <div class="syd-2 sfprotext-thin-white-34px">{{ syd }}</div>
        <img
          class="line-1-15"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
          alt="Line 1"
        />
        <div class="x1255am-2 sfprotext-light-white-12px">{{ x1255Am }}</div>
        <div class="security-14 sfprotext-light-white-17px">{{ security }}</div>
        <div class="please-prepare-14 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
        <div class="passport-and-identification-13 sfprotext-regular-normal-white-12px">
          {{ passportAndIdentification }}
        </div>
        <group1 :className="group1Props.className" />
        <img
          class="fingerprint-14"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/fingerprint-12@2x.svg"
          alt="fingerprint"
        />
        <div class="address-43 sfprotext-lightitalic-light-white-17px">{{ address1 }}</div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <img class="image-6-15" :src="image6" alt="image 6" />
        <div class="cathay-beyond-16 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
        </div>
        <img class="union-38" :src="union1" alt="Union" />
        <div class="inflight-shopping-16 sfprotext-normal-white-17px">{{ inflightShopping1 }}</div>
        <img
          class="vectorclear-34"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-33"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img class="union-39" :src="union2" alt="Union" /><img class="union-40" :src="union3" alt="Union" />
        <div class="keep-watching-2 sfprotext-normal-white-17px">{{ keepWatching }}</div>
        <div class="surname-3 sfprotext-light-white-12px">{{ surname }}</div>
        <div class="address-44 sfprotext-light-white-12px">{{ address2 }}</div>
        <div class="inflight-shopping-17 sfprotext-normal-white-17px">{{ inflightShopping2 }}</div>
        <img
          class="vectorclear-33"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="ellipse-6-2"></div>
        <div class="text-19 sfprotext-light-white-12px">{{ text19 }}</div>
        <img
          class="near_me-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/near-me@2x.svg"
          alt="near_me"
        />
        <img
          class="play_arrow-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/play-arrow@2x.svg"
          alt="play_arrow"
        />
        <div class="group-59-3">
          <div class="group-49-2">
            <img class="image-5-4" :src="image5" alt="image 5" />
            <div class="overlap-group-17">
              <p class="now-boarding-cx-501-to-hkg-3 sfprotext-normal-oracle-17px">{{ nowBoardingCx501ToHkg }}</p>
            </div>
          </div>
          <p class="your-flight-to-hong-6 sfprotext-normal-oracle-17px-2" v-html="yourFlightToHong"></p>
        </div>
        <div class="check-out-the-deck-2 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText3 }}</span
          ><span class="sfprotext-bold-white-17px">{{ spanText4 }}</span>
        </div>
        <div class="your-transfer-experience-2 sfprotext-regular-normal-white-12px">{{ yourTransferExperience }}</div>
        <div class="number-38 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
        <div class="number-39 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
        <div class="cx2101-a350-2 sfprotext-light-white-12px">{{ cx2101A350 }}</div>
        <div class="address-45 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
        <p class="address-46 sfprotext-medium-white-12px">{{ address4 }}</p>
        <div class="terminal-15 sfprotext-light-white-17px">{{ terminal }}</div>
        <div class="gate-15 sfprotext-light-white-17px">{{ gate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusBarWhite from "./StatusBarWhite";
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
export default {
  name: "Flow3",
  components: {
    StatusBarWhite,
    Group1,
    HomeIndicatorWhite,
  },
  props: [
    "rectangle9",
    "hkg",
    "syd",
    "x1255Am",
    "security",
    "pleasePrepare",
    "passportAndIdentification",
    "address1",
    "image6",
    "spanText1",
    "spanText2",
    "union1",
    "inflightShopping1",
    "union2",
    "union3",
    "keepWatching",
    "surname",
    "address2",
    "inflightShopping2",
    "text19",
    "image5",
    "nowBoardingCx501ToHkg",
    "yourFlightToHong",
    "spanText3",
    "spanText4",
    "yourTransferExperience",
    "number1",
    "number2",
    "cx2101A350",
    "address3",
    "address4",
    "terminal",
    "gate",
    "statusBarWhiteProps",
    "group1Props",
    "homeIndicatorWhiteProps",
  ],
};
</script>

<style>
.flow-3 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group1-15 {
  height: 997px;
  margin-left: -23px;
  margin-top: -127px;
  position: relative;
  width: 442px;
}

.beyond-background-3 {
  background-color: var(--oracle);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  left: 0;
  position: absolute;
  top: 110px;
  width: 442px;
}

.subtract-8 {
  height: 321px;
  left: 40px;
  position: absolute;
  top: 233px;
  width: 358px;
}

.rectangle-9-2 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 550px;
  width: 355px;
}

.hkg-15 {
  left: 63px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 267px;
  white-space: nowrap;
}

.syd-2 {
  left: 308px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 267px;
  white-space: nowrap;
}

.line-1-15 {
  height: 1px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 278px;
  width: 155px;
}

.x1255am-2 {
  left: 197px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 278px;
  white-space: nowrap;
}

.security-14 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 338px;
  white-space: nowrap;
}

.please-prepare-14 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 375px;
  white-space: nowrap;
}

.passport-and-identification-13 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 401px;
  white-space: nowrap;
}

.fingerprint-14 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 402px;
  width: 22px;
}

.address-43 {
  left: 317px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 338px;
  white-space: nowrap;
}

.image-6-15 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 194px;
  width: 24px;
}

.cathay-beyond-16 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 200px;
  white-space: nowrap;
}

.union-38 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 831px;
  width: 355px;
}

.inflight-shopping-16 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 871px;
  white-space: nowrap;
}

.vectorclear-34 {
  height: 19px;
  left: 267px;
  position: absolute;
  top: 732px;
  width: 11px;
}

.vectorclear-33 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 872px;
  width: 11px;
}

.union-39 {
  height: 184px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 651px;
  width: 358px;
}

.union-40 {
  height: 104px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 831px;
  width: 358px;
}

.keep-watching-2 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 680px;
  white-space: nowrap;
}

.surname-3 {
  left: 179px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 786px;
  white-space: nowrap;
}

.address-44 {
  left: 309px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 590px;
  white-space: nowrap;
}

.inflight-shopping-17 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 871px;
  white-space: nowrap;
}

.ellipse-6-2 {
  background-color: var(--black);
  border: 1px none;
  border-radius: 32px;
  height: 64px;
  left: 187px;
  opacity: 0.4;
  position: absolute;
  top: 710px;
  width: 64px;
}

.text-19 {
  left: 199px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 741px;
  white-space: nowrap;
}

.near_me-2 {
  height: 20px;
  left: 283px;
  position: absolute;
  top: 591px;
  width: 20px;
}

.play_arrow-2 {
  height: 14px;
  left: 215px;
  position: absolute;
  top: 728px;
  width: 11px;
}

.group-59-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  left: 46px;
  min-height: 136px;
  position: absolute;
  top: 0;
  width: 351px;
}

.group-49-2 {
  align-items: flex-start;
  display: flex;
  gap: 184px;
  min-width: 351px;
}

.image-5-4 {
  height: 35px;
  margin-left: -214px;
  margin-top: -620px;
  width: 30px;
}

.overlap-group-17 {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 69px;
  justify-content: flex-end;
  min-width: 349px;
  padding: 23px 44px;
}

.now-boarding-cx-501-to-hkg-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  min-width: 234px;
  white-space: nowrap;
}

.your-flight-to-hong-6 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-right: 11px;
  min-height: 37px;
  min-width: 262px;
}

.check-out-the-deck-2 {
  left: 67px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 587px;
  white-space: nowrap;
}

.your-transfer-experience-2 {
  left: 67px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 602px;
  white-space: nowrap;
}

.number-38 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 456px;
  white-space: nowrap;
}

.number-39 {
  left: 273px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 456px;
  white-space: nowrap;
}

.cx2101-a350-2 {
  left: 180px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 256px;
  white-space: nowrap;
}

.address-45 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 481px;
  white-space: nowrap;
}

.address-46 {
  left: 134px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 509px;
  white-space: nowrap;
}

.terminal-15 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 461px;
  white-space: nowrap;
}

.gate-15 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 461px;
  white-space: nowrap;
}
</style>
