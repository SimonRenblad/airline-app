<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-6 screen">
      <div class="overlap-group7-5">
        <img class="image-6-7" :src="image6" alt="image 6" />
        <div class="cathay-beyond-8 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
        </div>
        <div class="overlap-group-9">
          <div class="flex-row-8 sfprotext-thin-white-34px">
            <div class="nrt-6">{{ nrt }}</div>
            <div class="overlap-group4-6">
              <div class="overlap-group2-6">
                <img
                  class="line-1-8"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
                  alt="Line 1"
                />
                <group1 />
                <div class="cx501-a321neo-1 sfprotext-light-white-12px">{{ cx501A321Neo }}</div>
              </div>
              <div class="x1035am-6 sfprotext-light-white-12px">{{ x1035Am }}</div>
            </div>
            <div class="hkg-8">{{ hkg }}</div>
          </div>
          <div class="flex-row-9">
            <div class="x-container-1 sfprotext-light-white-17px">
              <p class="baggage-drop-6">
                <span class="sfprotext-light-white-17px">{{ spanText3 }}</span
                ><span class="sfprotext-light-white-12px">{{ spanText4 }}</span
                ><span class="sfprotext-light-white-17px">{{ spanText5 }}</span>
              </p>
              <div class="security-7">{{ security }}</div>
              <div class="immigration-6">{{ immigration }}</div>
            </div>
            <div class="overlap-group1-8 sfprotext-lightitalic-light-white-17px">
              <div class="mins-12">{{ mins1 }}</div>
              <div class="number-16 valign-text-bottom">{{ number1 }}</div>
              <div class="mins-13">{{ mins2 }}</div>
              <div class="rectangle-10-6"></div>
              <div class="number-17 valign-text-bottom">{{ number2 }}</div>
              <div class="rectangle-13-6"></div>
              <div class="address-15">{{ address1 }}</div>
            </div>
          </div>
          <div class="flex-row-10">
            <div class="total-2 sfprotext-medium-white-12px">{{ total }}</div>
            <div class="address-16 sfprotext-medium-sunglo-12px">{{ address2 }}</div>
          </div>
          <div class="please-prepare-7 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
          <div class="flex-row-11">
            <img
              class="fingerprint-7"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-7@2x.svg"
              alt="fingerprint"
            />
            <div class="passport-and-identification-7 sfprotext-regular-normal-white-12px">
              {{ passportAndIdentification }}
            </div>
          </div>
          <div class="flex-row-12">
            <img
              class="history_edu-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-6@2x.svg"
              alt="history_edu"
            />
            <div class="negative-pcr-certification-6 sfprotext-regular-normal-white-12px">
              {{ negativePcrCertification }}
            </div>
          </div>
          <div class="vaccin-container-1">
            <img
              class="vaccines-6"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-6@2x.svg"
              alt="vaccines"
            />
            <div class="official-vaccination-records-6 sfprotext-regular-normal-white-12px">
              {{ officialVaccinationRecords }}
            </div>
          </div>
          <div class="flex-row-13">
            <div class="terminal-7 sfprotext-light-white-17px">{{ terminal }}</div>
            <div class="number-18 sfprotext-thinitalic-thin-white-34px">{{ number3 }}</div>
            <div class="overlap-group5-5">
              <div class="number-19 sfprotext-thinitalic-thin-white-34px">{{ number4 }}</div>
              <div class="overlap-group3-6">
                <div class="address-17 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
                <div class="gate-7 sfprotext-light-white-17px">{{ gate }}</div>
              </div>
            </div>
          </div>
          <div class="address-18 sfprotext-medium-white-12px">{{ address4 }}</div>
        </div>
        <img class="union-18" :src="union1" alt="Union" /><img class="union-19" :src="union2" alt="Union" />
        <div class="inflight-shopping-8 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-17"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-18"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-6 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-6 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-5"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhiteProps.className"
          :statusBar3Props="statusBarWhiteProps.statusBar3Props"
        />
        <div class="overlap-group6-5">
          <div class="initialising sfprotext-normal-oracle-17px">{{ initialising }}</div>
        </div>
        <img
          class="line-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-3@2x.svg"
          alt="Line 3"
        />
        <group1 :className="group1Props.className" />
      </div>
    </div>
  </div>
</template>

<script>
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
import StatusBarWhite from "./StatusBarWhite";
export default {
  name: "Questionnaire6",
  components: {
    Group1,
    HomeIndicatorWhite,
    StatusBarWhite,
  },
  props: [
    "image6",
    "spanText1",
    "spanText2",
    "nrt",
    "cx501A321Neo",
    "x1035Am",
    "hkg",
    "spanText3",
    "spanText4",
    "spanText5",
    "security",
    "immigration",
    "mins1",
    "number1",
    "mins2",
    "number2",
    "address1",
    "total",
    "address2",
    "pleasePrepare",
    "passportAndIdentification",
    "negativePcrCertification",
    "officialVaccinationRecords",
    "terminal",
    "number3",
    "number4",
    "address3",
    "gate",
    "address4",
    "union1",
    "union2",
    "inflightShopping",
    "inflightEntertainment",
    "preselectYourFavouriteShows",
    "initialising",
    "homeIndicatorWhiteProps",
    "statusBarWhiteProps",
    "group1Props",
  ],
};
</script>

<style>
.questionnaire-6 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group7-5 {
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  margin-left: -23px;
  margin-top: -17px;
  position: relative;
  width: 442px;
}

.image-6-7 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 84px;
  width: 24px;
}

.cathay-beyond-8 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.overlap-group-9 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-7@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 40px;
  min-height: 417px;
  padding: 18px 23px;
  position: absolute;
  top: 123px;
  width: 358px;
}

.flex-row-8 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  margin-top: 6px;
  min-width: 311px;
}

.nrt-6 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group4-6 {
  height: 44px;
  margin-left: 1px;
  position: relative;
  width: 165px;
}

.overlap-group2-6 {
  height: 36px;
  left: 0;
  position: absolute;
  top: 0;
  width: 165px;
}

.line-1-8 {
  height: 1px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 21px;
  width: 155px;
}

.cx501-a321neo-1 {
  left: 43px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.x1035am-6 {
  left: 66px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 22px;
  white-space: nowrap;
}

.hkg-8 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-9 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  margin-top: 38px;
  min-width: 311px;
}

.x-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 74px;
  width: 248px;
}

.baggage-drop-6,
.security-7,
.immigration-6,
.passport-and-identification-7 {
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
}

.overlap-group1-8 {
  height: 74px;
  position: relative;
  width: 59px;
}

.mins-12 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.number-16 {
  height: 22px;
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.mins-13 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-10-6 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 23px;
}

.number-17 {
  height: 22px;
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-13-6 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 0;
  position: absolute;
  top: 24px;
  width: 32px;
}

.address-15 {
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 26px;
  white-space: nowrap;
}

.flex-row-10 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  height: 22px;
  min-width: 79px;
}

.total-2 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 31px;
  text-align: right;
  white-space: nowrap;
}

.address-16 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 44px;
  text-align: right;
  white-space: nowrap;
}

.please-prepare-7 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 1px;
  margin-top: 5px;
  white-space: nowrap;
}

.flex-row-11 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 171px;
}

.fingerprint-7,
.history_edu-6,
.vaccines-6 {
  height: 22px;
  width: 22px;
}

.flex-row-12 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 4px;
  margin-top: 5px;
  min-width: 171px;
}

.negative-pcr-certification-6 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 141px;
  white-space: nowrap;
}

.vaccin-container-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 24px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 178px;
}

.official-vaccination-records-6 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 148px;
  white-space: nowrap;
}

.flex-row-13 {
  align-items: flex-start;
  display: flex;
  margin-left: 1px;
  margin-top: 13px;
  min-width: 248px;
}

.terminal-7 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-top: 5px;
  min-width: 65px;
  white-space: nowrap;
}

.number-18 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 15px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group5-5 {
  height: 47px;
  margin-left: 66px;
  position: relative;
  width: 91px;
}

.number-19 {
  left: 48px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.overlap-group3-6 {
  height: 42px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 88px;
}

.address-17 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.gate-7 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.address-18 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 3px;
  margin-top: 6px;
  min-width: 129px;
  white-space: nowrap;
}

.union-18 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 355px;
}

.union-19 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 721px;
  width: 355px;
}

.inflight-shopping-8 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 761px;
  white-space: nowrap;
}

.vectorclear-17 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 622px;
  width: 11px;
}

.vectorclear-18 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 762px;
  width: 11px;
}

.inflight-entertainment-6 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 610px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-6 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 633px;
  white-space: nowrap;
}

.rectangle-14-5 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 17px;
  width: 393px;
}

.overlap-group6-5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 7px #00000040;
  display: flex;
  height: 174px;
  left: 59px;
  min-width: 322px;
  padding: 23px;
  position: absolute;
  top: 356px;
}

.initialising {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  white-space: nowrap;
}

.line-3 {
  height: 1px;
  left: 82px;
  object-fit: cover;
  position: absolute;
  top: 495px;
  width: 270px;
}
</style>
