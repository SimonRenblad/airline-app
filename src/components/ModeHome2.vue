<template>
  <div class="container-center-horizontal">
    <div class="mode-home2 screen">
      <div class="overlap-group-15">
        <status-bar-white :statusBar3Props="statusBarWhiteProps.statusBar3Props" />
        <div class="flex-row-36">
          <img class="image-6-13" :src="image6" alt="image 6" />
          <div class="cathay-beyond-14 sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
            ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
          </div>
        </div>
        <div class="overlap-group1-13">
          <div class="flex-row-37">
            <div class="nrt-11 sfprotext-thin-white-34px">{{ nrt }}</div>
            <div class="overlap-group8-4">
              <div class="overlap-group6-8">
                <img
                  class="line-1-13"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
                  alt="Line 1"
                />
                <div class="x1035am-10 sfprotext-light-white-12px">{{ x1035Am }}</div>
                <group1 :className="group1Props.className" />
              </div>
              <div class="cx501-a321neo-6 sfprotext-light-white-12px">{{ cx501A321Neo }}</div>
            </div>
            <div class="hkg-13 sfprotext-thin-white-34px">{{ hkg }}</div>
          </div>
          <div class="flex-row-38">
            <p class="baggage-drop-11 sfprotext-light-white-17px">
              <span class="sfprotext-light-white-17px">{{ spanText3 }}</span
              ><span class="sfprotext-light-white-12px">{{ spanText4 }}</span
              ><span class="sfprotext-light-white-17px">{{ spanText5 }}</span>
            </p>
            <div class="overlap-group3-11 sfprotext-lightitalic-light-white-17px">
              <div class="mins-22">{{ mins1 }}</div>
              <div class="text-16" v-html="text16"></div>
              <div class="rectangle-11-7"></div>
            </div>
          </div>
          <div class="flex-row-39">
            <div class="security-12 sfprotext-light-white-17px">{{ security }}</div>
            <div class="overlap-group5-10">
              <div class="rectangle-10-11"></div>
              <div class="address-35 sfprotext-lightitalic-light-white-17px">{{ address1 }}</div>
            </div>
          </div>
          <div class="overlap-group9-5">
            <div class="overlap-group11-4">
              <div class="immigration-11 sfprotext-light-white-17px">{{ immigration }}</div>
              <div class="mins-23 sfprotext-lightitalic-light-white-17px">{{ mins2 }}</div>
              <div class="overlap-group4-10">
                <div class="text-17 sfprotext-lightitalic-light-white-17px" v-html="text17"></div>
                <div class="rectangle-12-1"></div>
                <div class="address-36 sfprotext-medium-white-12px">{{ address2 }}</div>
                <div class="total-7 sfprotext-medium-white-12px">{{ total }}</div>
              </div>
            </div>
            <div class="please-prepare-12 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
          </div>
          <div class="flex-row-40">
            <img
              class="fingerprint-12"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/fingerprint-7@2x.svg"
              alt="fingerprint"
            />
            <div class="tification sfprotext-regular-normal-white-12px">{{ passportAndIdentification }}</div>
          </div>
          <div class="flex-row-41">
            <img
              class="history_edu-11"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/history-edu-7@2x.svg"
              alt="history_edu"
            />
            <div class="tification sfprotext-regular-normal-white-12px">{{ negativePcrCertification }}</div>
          </div>
          <div class="vaccin-container-5">
            <img
              class="vaccines-11"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vaccines-7@2x.svg"
              alt="vaccines"
            />
            <div class="official-vaccination-records-11 sfprotext-regular-normal-white-12px">
              {{ officialVaccinationRecords }}
            </div>
          </div>
          <div class="flex-row-42">
            <div class="terminal-13 sfprotext-light-white-17px">{{ terminal }}</div>
            <div class="number-34 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
            <div class="overlap-group10-4">
              <div class="number-35 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
              <div class="overlap-group7-8">
                <div class="address-37 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
                <div class="gate-13 sfprotext-light-white-17px">{{ gate }}</div>
              </div>
            </div>
          </div>
          <div class="address-38 sfprotext-medium-white-12px">{{ address4 }}</div>
        </div>
        <div class="overlap-group2-11">
          <img class="union-31" :src="union1" alt="Union" /><img class="union-32" :src="union2" alt="Union" />
          <div class="preview-inflight-entertainment-2 sfprotext-normal-white-17px">
            {{ previewInflightEntertainment }}
          </div>
          <div class="inflight-shopping-13 sfprotext-normal-white-17px">{{ inflightShopping1 }}</div>
          <img
            class="vectorclear-29"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img
            class="vectorclear-30"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img class="union-33" :src="union3" alt="Union" /><img class="union-34" :src="union4" alt="Union" />
          <div class="inflight-entertainment-11 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
          <div class="preselect-your-favourite-shows-11 sfprotext-light-white-17px">
            {{ preselectYourFavouriteShows }}
          </div>
          <div class="inflight-shopping-13 sfprotext-normal-white-17px">{{ inflightShopping2 }}</div>
          <img
            class="vectorclear-29"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img
            class="vectorclear-30"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
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
  name: "ModeHome2",
  components: {
    StatusBarWhite,
    Group1,
    HomeIndicatorWhite,
  },
  props: [
    "image6",
    "spanText1",
    "spanText2",
    "nrt",
    "x1035Am",
    "cx501A321Neo",
    "hkg",
    "spanText3",
    "spanText4",
    "spanText5",
    "mins1",
    "text16",
    "security",
    "address1",
    "immigration",
    "mins2",
    "text17",
    "address2",
    "total",
    "pleasePrepare",
    "passportAndIdentification",
    "negativePcrCertification",
    "officialVaccinationRecords",
    "terminal",
    "number1",
    "number2",
    "address3",
    "gate",
    "address4",
    "union1",
    "union2",
    "previewInflightEntertainment",
    "inflightShopping1",
    "union3",
    "union4",
    "inflightEntertainment",
    "preselectYourFavouriteShows",
    "inflightShopping2",
    "statusBarWhiteProps",
    "group1Props",
    "homeIndicatorWhiteProps",
  ],
};
</script>

<style>
.mode-home2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group-15 {
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

.flex-row-36 {
  align-items: center;
  display: flex;
  gap: 9px;
  margin-right: 3px;
  margin-top: 20px;
  min-width: 151px;
}

.image-6-13 {
  height: 28px;
  width: 24px;
}

.cathay-beyond-14 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 3px;
  min-height: 19px;
  min-width: 118px;
  white-space: nowrap;
}

.overlap-group1-13 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/subtract-7@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  margin-top: 11px;
  min-height: 417px;
  padding: 19px 23px;
  width: 358px;
}

.flex-row-37 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  margin-top: 4px;
  min-width: 311px;
}

.nrt-11 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group8-4 {
  height: 44px;
  margin-left: 1px;
  position: relative;
  width: 165px;
}

.overlap-group6-8 {
  height: 37px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 165px;
}

.line-1-13 {
  height: 1px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 15px;
  width: 155px;
}

.x1035am-10 {
  left: 66px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 15px;
  white-space: nowrap;
}

.cx501-a321neo-6 {
  left: 43px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.hkg-13 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-38 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 5px;
  margin-top: 16px;
  min-width: 311px;
}

.baggage-drop-11 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 247px;
  white-space: nowrap;
}

.overlap-group3-11 {
  height: 44px;
  position: relative;
  width: 59px;
}

.mins-22 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.text-16 {
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
}

.rectangle-11-7 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 23px;
}

.flex-row-39 {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  min-width: 311px;
}

.security-12 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 248px;
  white-space: nowrap;
}

.overlap-group5-10 {
  height: 26px;
  position: relative;
  width: 59px;
}

.rectangle-10-11 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 0;
  width: 23px;
}

.address-35 {
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 4px;
  white-space: nowrap;
}

.overlap-group9-5 {
  align-self: flex-end;
  height: 71px;
  margin-top: 4px;
  position: relative;
  width: 311px;
}

.overlap-group11-4 {
  height: 51px;
  left: 0;
  position: absolute;
  top: 0;
  width: 311px;
}

.immigration-11,
.gate-13 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.mins-23 {
  left: 274px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.overlap-group4-10 {
  height: 51px;
  left: 232px;
  position: absolute;
  top: 0;
  width: 79px;
}

.text-17 {
  left: 28px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
}

.rectangle-12-1 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 20px;
  position: absolute;
  top: 22px;
  width: 32px;
}

.address-36 {
  left: 35px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.total-7 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.please-prepare-12 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 49px;
  white-space: nowrap;
}

.flex-row-40 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 171px;
}

.fingerprint-12 {
  align-self: flex-end;
  height: 22px;
  width: 22px;
}

.tification {
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
}

.flex-row-41 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 4px;
  margin-top: 5px;
  min-width: 171px;
}

.history_edu-11,
.vaccines-11 {
  height: 22px;
  width: 22px;
}

.vaccin-container-5 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 4px;
  margin-top: 5px;
  min-width: 178px;
}

.official-vaccination-records-11 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 148px;
  white-space: nowrap;
}

.flex-row-42 {
  align-items: flex-start;
  display: flex;
  margin-left: 1px;
  margin-top: 13px;
  min-width: 248px;
}

.terminal-13 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-top: 5px;
  min-width: 65px;
  white-space: nowrap;
}

.number-34 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 15px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group10-4 {
  height: 47px;
  margin-left: 66px;
  position: relative;
  width: 91px;
}

.number-35 {
  left: 48px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.overlap-group7-8 {
  height: 42px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 88px;
}

.address-37 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.address-38 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 3px;
  margin-top: 6px;
  min-width: 129px;
  white-space: nowrap;
}

.overlap-group2-11 {
  height: 284px;
  margin-right: 6px;
  margin-top: 1px;
  position: relative;
  width: 358px;
}

.union-31 {
  height: 181px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 355px;
}

.union-32 {
  height: 101px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 355px;
}

.preview-inflight-entertainment-2 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 80px;
  white-space: nowrap;
}

.inflight-shopping-13 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 220px;
  white-space: nowrap;
}

.vectorclear-29 {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 81px;
  width: 11px;
}

.vectorclear-30 {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 221px;
  width: 11px;
}

.union-33 {
  height: 184px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 358px;
}

.union-34 {
  height: 104px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 358px;
}

.inflight-entertainment-11 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 69px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-11 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 92px;
  white-space: nowrap;
}
</style>
