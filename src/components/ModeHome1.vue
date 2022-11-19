<template>
  <div class="container-center-horizontal">
    <div class="mode-home1 screen">
      <div class="overlap-group-14">
        <status-bar-white :statusBar3Props="statusBarWhiteProps.statusBar3Props" />
        <div class="flex-row-31">
          <img class="image-6-12" :src="image6" alt="image 6" />
          <div class="cathay-beyond-13 sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
            ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
          </div>
        </div>
        <div class="flex-col-6">
          <div class="flex-row-32 sfprotext-thin-white-34px">
            <div class="nrt-10">{{ nrt }}</div>
            <div class="overlap-group-container-24">
              <div class="overlap-group9-4">
                <img
                  class="line-1-12"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
                  alt="Line 1"
                />
                <div class="x1035am-9 sfprotext-light-white-12px">{{ x1035Am }}</div>
                <group1 :className="group1Props.className" />
              </div>
              <div class="cx-aneo-container sfprotext-light-white-12px">
                <div class="cx501-a321neo-4">{{ cx501A321Neo1 }}</div>
                <div class="cx501-a321neo-5">{{ cx501A321Neo2 }}</div>
              </div>
            </div>
            <div class="hkg-12">{{ hkg }}</div>
          </div>
          <div class="flex-row-33">
            <div class="x-container-4 sfprotext-light-white-17px">
              <p class="baggage-drop-10">
                <span class="sfprotext-light-white-17px">{{ spanText3 }}</span
                ><span class="sfprotext-light-white-12px">{{ spanText4 }}</span
                ><span class="sfprotext-light-white-17px">{{ spanText5 }}</span>
              </p>
              <div class="security-11">{{ security }}</div>
            </div>
            <div class="overlap-group5-8 sfprotext-lightitalic-light-white-17px">
              <div class="mins-20">{{ mins1 }}</div>
              <div class="text-14" v-html="text14"></div>
              <div class="rectangle-10-10"></div>
              <div class="rectangle-11-6"></div>
              <div class="address-31">{{ address1 }}</div>
            </div>
          </div>
          <div class="flex-col-7">
            <div class="overlap-group14-4">
              <div class="overlap-group5-9">
                <div class="immigration-10 sfprotext-light-white-17px">{{ immigration }}</div>
                <div class="mins-21 sfprotext-lightitalic-light-white-17px">{{ mins2 }}</div>
                <div class="overlap-group6-7">
                  <div class="text-15 sfprotext-lightitalic-light-white-17px" v-html="text15"></div>
                  <div class="rectangle-12"></div>
                  <div class="address-32 sfprotext-medium-white-12px">{{ address2 }}</div>
                  <div class="total-6 sfprotext-medium-white-12px">{{ total }}</div>
                </div>
              </div>
              <div class="please-prepare-11 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
            </div>
            <div class="flex-row-34">
              <img
                class="fingerprint-11"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/fingerprint-2@2x.svg"
                alt="fingerprint"
              />
              <div class="passport-and-identification-11 sfprotext-regular-normal-white-12px">
                {{ passportAndIdentification }}
              </div>
            </div>
            <div class="flex-row-35">
              <img
                class="history_edu-10"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/history-edu-2@2x.svg"
                alt="history_edu"
              />
              <div class="negative-pcr-certification-10 sfprotext-regular-normal-white-12px">
                {{ negativePcrCertification }}
              </div>
            </div>
            <div class="vaccin-container-4">
              <img
                class="vaccines-10"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vaccines-2@2x.svg"
                alt="vaccines"
              />
              <div class="official-vaccination-records-10 sfprotext-regular-normal-white-12px">
                {{ officialVaccinationRecords }}
              </div>
            </div>
            <div class="overlap-group-container-25">
              <div class="terminal-container sfprotext-light-white-17px">
                <div class="terminal-11">{{ terminal1 }}</div>
                <div class="terminal-12">{{ terminal2 }}</div>
              </div>
              <div class="number-container sfprotext-thinitalic-thin-white-34px">
                <div class="number-30">{{ number1 }}</div>
                <div class="number-31">{{ number2 }}</div>
              </div>
              <div class="overlap-group-container-26">
                <div class="number-container-1 sfprotext-thinitalic-thin-white-34px">
                  <div class="number-32">{{ number3 }}</div>
                  <div class="number-33">{{ number4 }}</div>
                </div>
                <div class="overlap-group3-10">
                  <div class="address-30 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
                  <div class="gate-11 sfprotext-light-white-17px">{{ gate1 }}</div>
                  <div class="address-30 sfprotext-regular-normal-white-12px">{{ address4 }}</div>
                  <div class="gate-12 sfprotext-light-white-17px">{{ gate2 }}</div>
                </div>
              </div>
            </div>
            <div class="address-container sfprotext-medium-white-12px">
              <div class="address-33">{{ address5 }}</div>
              <div class="address-34">{{ address6 }}</div>
            </div>
          </div>
        </div>
        <div class="overlap-group2-10">
          <img class="union-27" :src="union1" alt="Union" /><img class="union-28" :src="union2" alt="Union" />
          <div class="preview-inflight-entertainment-1 sfprotext-normal-white-17px">
            {{ previewInflightEntertainment }}
          </div>
          <div class="inflight-shopping-12 sfprotext-normal-white-17px">{{ inflightShopping1 }}</div>
          <img
            class="vectorclear-27"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img
            class="vectorclear-28"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img class="union-29" :src="union3" alt="Union" /><img class="union-30" :src="union4" alt="Union" />
          <div class="inflight-entertainment-10 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
          <div class="preselect-your-favourite-shows-10 sfprotext-light-white-17px">
            {{ preselectYourFavouriteShows }}
          </div>
          <div class="inflight-shopping-12 sfprotext-normal-white-17px">{{ inflightShopping2 }}</div>
          <img
            class="vectorclear-27"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
            alt="vectorclear"
          />
          <img
            class="vectorclear-28"
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
  name: "ModeHome1",
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
    "cx501A321Neo1",
    "cx501A321Neo2",
    "hkg",
    "spanText3",
    "spanText4",
    "spanText5",
    "security",
    "mins1",
    "text14",
    "address1",
    "immigration",
    "mins2",
    "text15",
    "address2",
    "total",
    "pleasePrepare",
    "passportAndIdentification",
    "negativePcrCertification",
    "officialVaccinationRecords",
    "terminal1",
    "terminal2",
    "number1",
    "number2",
    "number3",
    "number4",
    "address3",
    "gate1",
    "address4",
    "gate2",
    "address5",
    "address6",
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
.mode-home1 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group-14 {
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

.flex-row-31 {
  align-items: center;
  display: flex;
  gap: 9px;
  margin-right: 3px;
  margin-top: 20px;
  min-width: 151px;
}

.image-6-12 {
  height: 28px;
  width: 24px;
}

.cathay-beyond-13 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 3px;
  min-height: 19px;
  min-width: 118px;
  white-space: nowrap;
}

.flex-col-6 {
  align-items: flex-end;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/subtract-2@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  margin-top: 11px;
  min-height: 417px;
  padding: 19px 23px;
  width: 358px;
}

.flex-row-32 {
  align-items: center;
  display: flex;
  margin-top: 4px;
  min-width: 311px;
}

.nrt-10 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group-container-24 {
  height: 44px;
  margin-left: 1px;
  position: relative;
  width: 165px;
}

.overlap-group9-4 {
  height: 37px;
  left: 0;
  position: absolute;
  top: 7px;
  width: 165px;
}

.line-1-12 {
  height: 1px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 15px;
  width: 155px;
}

.x1035am-9 {
  left: 66px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 15px;
  white-space: nowrap;
}

.cx-aneo-container {
  height: 22px;
  left: 43px;
  position: absolute;
  top: 0;
  width: 92px;
}

.cx501-a321neo-4,
.cx501-a321neo-5,
.number-30,
.number-31,
.number-32,
.number-33 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.hkg-12 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-33 {
  align-items: flex-end;
  display: flex;
  gap: 4px;
  margin-top: 18px;
  min-width: 311px;
}

.x-container-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 48px;
  width: 248px;
}

.baggage-drop-10,
.security-11,
.passport-and-identification-11,
.negative-pcr-certification-10 {
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
}

.overlap-group5-8 {
  height: 68px;
  position: relative;
  width: 59px;
}

.mins-20 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 20px;
  white-space: nowrap;
}

.text-14 {
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 20px;
}

.rectangle-10-10 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 42px;
  width: 23px;
}

.rectangle-11-6 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 0;
  width: 23px;
}

.address-31 {
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 46px;
  white-space: nowrap;
}

.flex-col-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  min-height: 241px;
  width: 311px;
}

.overlap-group14-4 {
  height: 71px;
  position: relative;
  width: 311px;
}

.overlap-group5-9 {
  height: 51px;
  left: 0;
  position: absolute;
  top: 0;
  width: 311px;
}

.immigration-10,
.terminal-11,
.terminal-12,
.gate-11,
.gate-12,
.address-33,
.address-34 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.mins-21 {
  left: 274px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.overlap-group6-7 {
  height: 51px;
  left: 232px;
  position: absolute;
  top: 0;
  width: 79px;
}

.text-15 {
  left: 28px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
}

.rectangle-12 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 20px;
  position: absolute;
  top: 22px;
  width: 32px;
}

.address-32 {
  left: 35px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.total-6 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 22px;
  white-space: nowrap;
}

.please-prepare-11 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 49px;
  white-space: nowrap;
}

.flex-row-34 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 3px;
  margin-top: 4px;
  min-width: 171px;
}

.fingerprint-11 {
  align-self: flex-end;
  height: 22px;
  width: 22px;
}

.flex-row-35 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 3px;
  margin-top: 2px;
  min-width: 171px;
}

.history_edu-10,
.vaccines-10 {
  height: 22px;
  width: 22px;
}

.vaccin-container-4 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 3px;
  margin-top: 2px;
  min-width: 178px;
}

.official-vaccination-records-10 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 148px;
  white-space: nowrap;
}

.overlap-group-container-25 {
  align-items: flex-start;
  display: flex;
  margin-top: 19px;
  min-width: 248px;
}

.terminal-container {
  height: 22px;
  margin-top: 5px;
  position: relative;
  width: 65px;
}

.number-container {
  height: 22px;
  margin-left: 11px;
  position: relative;
  width: 15px;
}

.overlap-group-container-26 {
  height: 47px;
  margin-left: 66px;
  position: relative;
  width: 91px;
}

.number-container-1 {
  height: 22px;
  left: 48px;
  position: absolute;
  top: 0;
  width: 43px;
}

.overlap-group3-10 {
  height: 42px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 88px;
}

.address-30 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.address-container {
  align-self: center;
  height: 22px;
  margin-left: 2px;
  margin-top: 6px;
  position: relative;
  width: 129px;
}

.overlap-group2-10 {
  height: 284px;
  margin-right: 6px;
  margin-top: 1px;
  position: relative;
  width: 358px;
}

.union-27 {
  height: 181px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 355px;
}

.union-28 {
  height: 101px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 355px;
}

.preview-inflight-entertainment-1 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 80px;
  white-space: nowrap;
}

.inflight-shopping-12 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 220px;
  white-space: nowrap;
}

.vectorclear-27 {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 81px;
  width: 11px;
}

.vectorclear-28 {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 221px;
  width: 11px;
}

.union-29 {
  height: 184px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 358px;
}

.union-30 {
  height: 104px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 358px;
}

.inflight-entertainment-10 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 69px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-10 {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 92px;
  white-space: nowrap;
}
</style>
