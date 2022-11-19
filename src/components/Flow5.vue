<template>
  <div class="container-center-horizontal">
    <div class="flow-5 screen">
      <div class="overlap-group1-1">
        <div class="beyond-background-1"></div>
        <status-bar-white
          :className="statusBarWhiteProps.className"
          :statusBar3Props="statusBarWhiteProps.statusBar3Props"
        />
        <img
          class="subtract"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-2@2x.svg"
          alt="Subtract"
        />
        <img class="rectangle-9" :src="rectangle9" alt="Rectangle 9" />
        <div class="hkg-2 sfprotext-thin-white-34px">{{ hkg }}</div>
        <div class="syd sfprotext-thin-white-34px">{{ syd }}</div>
        <img
          class="line-1-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
          alt="Line 1"
        />
        <div class="x1255am sfprotext-light-white-12px">{{ x1255Am }}</div>
        <div class="security-1 sfprotext-light-white-17px">{{ security }}</div>
        <div class="please-prepare-1 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
        <div class="passport-and-identification-1 sfprotext-regular-normal-white-12px">
          {{ passportAndIdentification }}
        </div>
        <group1 :className="group1Props.className" />
        <img
          class="fingerprint-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-2@2x.svg"
          alt="fingerprint"
        />
        <div class="address-4 sfprotext-lightitalic-light-white-17px">{{ address1 }}</div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <img class="image-6-2" :src="image6" alt="image 6" />
        <div class="cathay-beyond-1 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
        </div>
        <img class="union-4" :src="union1" alt="Union" />
        <div class="inflight-shopping-1 sfprotext-normal-white-17px">{{ inflightShopping1 }}</div>
        <img
          class="vectorclear-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img class="union-5" :src="union2" alt="Union" /><img class="union-6" :src="union3" alt="Union" />
        <div class="keep-watching sfprotext-normal-white-17px">{{ keepWatching }}</div>
        <div class="surname-1 sfprotext-light-white-12px">{{ surname }}</div>
        <div class="address-5 sfprotext-light-white-12px">{{ address2 }}</div>
        <div class="inflight-shopping-2 sfprotext-normal-white-17px">{{ inflightShopping2 }}</div>
        <img
          class="vectorclear-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="ellipse-6"></div>
        <div class="text-1 sfprotext-light-white-12px">{{ text1 }}</div>
        <img
          class="near_me"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/near-me@2x.svg"
          alt="near_me"
        />
        <img
          class="play_arrow"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378b199672269d88a1c133c/img/play-arrow@2x.svg"
          alt="play_arrow"
        />
        <div class="group-59">
          <div class="group-49">
            <img class="image-5-1" :src="image5" alt="image 5" />
            <div class="overlap-group-2">
              <p class="now-boarding-cx-501-to-hkg sfprotext-normal-oracle-17px">{{ nowBoardingCx501ToHkg }}</p>
            </div>
          </div>
          <p class="your-flight-to-hong sfprotext-normal-oracle-17px-2" v-html="yourFlightToHong"></p>
        </div>
        <div class="check-out-the-deck sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText3 }}</span
          ><span class="sfprotext-bold-white-17px">{{ spanText4 }}</span>
        </div>
        <div class="your-transfer-experience sfprotext-regular-normal-white-12px">{{ yourTransferExperience }}</div>
        <div class="number-4 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
        <div class="number-5 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
        <div class="cx2101-a350 sfprotext-light-white-12px">{{ cx2101A350 }}</div>
        <div class="address-6 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
        <p class="address-7 sfprotext-medium-white-12px">{{ address4 }}</p>
        <div class="terminal-1 sfprotext-light-white-17px">{{ terminal }}</div>
        <div class="gate-1 sfprotext-light-white-17px">{{ gate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StatusBarWhite from "./StatusBarWhite";
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
export default {
  name: "Flow5",
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
    "text1",
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
.flow-5 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group1-1 {
  height: 997px;
  margin-left: -23px;
  margin-top: -127px;
  position: relative;
  width: 442px;
}

.beyond-background-1 {
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

.subtract {
  height: 321px;
  left: 40px;
  position: absolute;
  top: 233px;
  width: 358px;
}

.rectangle-9 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 550px;
  width: 355px;
}

.hkg-2 {
  left: 63px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 267px;
  white-space: nowrap;
}

.syd {
  left: 308px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 267px;
  white-space: nowrap;
}

.line-1-2 {
  height: 1px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 278px;
  width: 155px;
}

.x1255am {
  left: 197px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 278px;
  white-space: nowrap;
}

.security-1 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 338px;
  white-space: nowrap;
}

.please-prepare-1 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 375px;
  white-space: nowrap;
}

.passport-and-identification-1 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 401px;
  white-space: nowrap;
}

.fingerprint-1 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 402px;
  width: 22px;
}

.address-4 {
  left: 317px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 338px;
  white-space: nowrap;
}

.image-6-2 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 194px;
  width: 24px;
}

.cathay-beyond-1 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 200px;
  white-space: nowrap;
}

.union-4 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 831px;
  width: 355px;
}

.inflight-shopping-1 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 871px;
  white-space: nowrap;
}

.vectorclear-3 {
  height: 19px;
  left: 267px;
  position: absolute;
  top: 732px;
  width: 11px;
}

.vectorclear-2 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 872px;
  width: 11px;
}

.union-5 {
  height: 184px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 651px;
  width: 358px;
}

.union-6 {
  height: 104px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 831px;
  width: 358px;
}

.keep-watching {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 680px;
  white-space: nowrap;
}

.surname-1 {
  left: 179px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 786px;
  white-space: nowrap;
}

.address-5 {
  left: 281px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: right;
  text-shadow: 0px 4px 4px #00000040;
  top: 590px;
  white-space: nowrap;
}

.inflight-shopping-2 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 871px;
  white-space: nowrap;
}

.vectorclear-4 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 591px;
  width: 11px;
}

.ellipse-6 {
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

.text-1 {
  left: 199px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 741px;
  white-space: nowrap;
}

.near_me {
  height: 20px;
  left: 255px;
  position: absolute;
  top: 591px;
  width: 20px;
}

.play_arrow {
  height: 14px;
  left: 215px;
  position: absolute;
  top: 728px;
  width: 11px;
}

.group-59 {
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

.group-49 {
  align-items: flex-end;
  display: flex;
  gap: 4513px;
  min-width: 351px;
}

.image-5-1 {
  height: 35px;
  margin-bottom: -409px;
  margin-left: -4543px;
  width: 30px;
}

.overlap-group-2 {
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

.now-boarding-cx-501-to-hkg {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  min-width: 234px;
  white-space: nowrap;
}

.your-flight-to-hong {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-right: 11px;
  min-height: 37px;
  min-width: 262px;
}

.check-out-the-deck {
  left: 67px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 587px;
  white-space: nowrap;
}

.your-transfer-experience {
  left: 67px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 602px;
  white-space: nowrap;
}

.number-4 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 456px;
  white-space: nowrap;
}

.number-5 {
  left: 273px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 456px;
  white-space: nowrap;
}

.cx2101-a350 {
  left: 180px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 256px;
  white-space: nowrap;
}

.address-6 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 481px;
  white-space: nowrap;
}

.address-7 {
  left: 129px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 509px;
  white-space: nowrap;
}

.terminal-1 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 461px;
  white-space: nowrap;
}

.gate-1 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 461px;
  white-space: nowrap;
}
</style>
