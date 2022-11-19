<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-7 screen">
      <div class="overlap-group7-6">
        <img class="image-6-8" :src="image6" alt="image 6" />
        <div class="cathay-beyond-9 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
        </div>
        <div class="overlap-group-10">
          <div class="flex-row-14 sfprotext-thin-white-34px">
            <div class="nrt-7">{{ nrt }}</div>
            <div class="overlap-group4-7">
              <div class="overlap-group2-7">
                <img
                  class="line-1-9"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
                  alt="Line 1"
                />
                <group1 />
                <div class="cx501-a321neo-2 sfprotext-light-white-12px">{{ cx501A321Neo }}</div>
              </div>
              <div class="x1035am-7 sfprotext-light-white-12px">{{ x1035Am }}</div>
            </div>
            <div class="hkg-9">{{ hkg }}</div>
          </div>
          <div class="flex-row-15">
            <div class="x-container-2 sfprotext-light-white-17px">
              <p class="baggage-drop-7">
                <span class="sfprotext-light-white-17px">{{ spanText3 }}</span
                ><span class="sfprotext-light-white-12px">{{ spanText4 }}</span
                ><span class="sfprotext-light-white-17px">{{ spanText5 }}</span>
              </p>
              <div class="security-8">{{ security }}</div>
              <div class="immigration-7">{{ immigration }}</div>
            </div>
            <div class="overlap-group1-9 sfprotext-lightitalic-light-white-17px">
              <div class="mins-14">{{ mins1 }}</div>
              <div class="number-20 valign-text-bottom">{{ number1 }}</div>
              <div class="mins-15">{{ mins2 }}</div>
              <div class="rectangle-10-7"></div>
              <div class="number-21 valign-text-bottom">{{ number2 }}</div>
              <div class="rectangle-13-7"></div>
              <div class="address-19">{{ address1 }}</div>
            </div>
          </div>
          <div class="flex-row-16">
            <div class="total-3 sfprotext-medium-white-12px">{{ total }}</div>
            <div class="address-20 sfprotext-medium-sunglo-12px">{{ address2 }}</div>
          </div>
          <div class="please-prepare-8 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
          <div class="flex-row-17">
            <img
              class="fingerprint-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-5@2x.svg"
              alt="fingerprint"
            />
            <div class="passport-and-identification-8 sfprotext-regular-normal-white-12px">
              {{ passportAndIdentification }}
            </div>
          </div>
          <div class="flex-row-18">
            <img
              class="history_edu-7"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-4@2x.svg"
              alt="history_edu"
            />
            <div class="negative-pcr-certification-7 sfprotext-regular-normal-white-12px">
              {{ negativePcrCertification }}
            </div>
          </div>
          <div class="vaccin-container-2">
            <img
              class="vaccines-7"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-4@2x.svg"
              alt="vaccines"
            />
            <div class="official-vaccination-records-7 sfprotext-regular-normal-white-12px">
              {{ officialVaccinationRecords }}
            </div>
          </div>
          <div class="flex-row-19">
            <div class="terminal-8 sfprotext-light-white-17px">{{ terminal }}</div>
            <div class="number-22 sfprotext-thinitalic-thin-white-34px">{{ number3 }}</div>
            <div class="overlap-group5-6">
              <div class="number-23 sfprotext-thinitalic-thin-white-34px">{{ number4 }}</div>
              <div class="overlap-group3-7">
                <div class="address-21 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
                <div class="gate-8 sfprotext-light-white-17px">{{ gate }}</div>
              </div>
            </div>
          </div>
          <div class="address-22 sfprotext-medium-white-12px">{{ address4 }}</div>
        </div>
        <img class="union-20" :src="union1" alt="Union" /><img class="union-21" :src="union2" alt="Union" />
        <div class="inflight-shopping-9 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-19"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-20"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-7 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-7 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-6"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhiteProps.className"
          :statusBar3Props="statusBarWhiteProps.statusBar3Props"
        />
        <div class="overlap-group6-6">
          <div class="initialising-1 sfprotext-normal-oracle-17px">{{ initialising }}</div>
        </div>
        <img
          class="line-3-1"
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
  name: "Questionnaire7",
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
.questionnaire-7 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group7-6 {
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  margin-left: -23px;
  margin-top: -17px;
  position: relative;
  width: 442px;
}

.image-6-8 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 84px;
  width: 24px;
}

.cathay-beyond-9 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.overlap-group-10 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-5@2x.svg);
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

.flex-row-14 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  margin-top: 6px;
  min-width: 311px;
}

.nrt-7 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group4-7 {
  height: 44px;
  margin-left: 1px;
  position: relative;
  width: 165px;
}

.overlap-group2-7 {
  height: 36px;
  left: 0;
  position: absolute;
  top: 0;
  width: 165px;
}

.line-1-9 {
  height: 1px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 21px;
  width: 155px;
}

.cx501-a321neo-2 {
  left: 43px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.x1035am-7 {
  left: 66px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 22px;
  white-space: nowrap;
}

.hkg-9 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-15 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  margin-top: 38px;
  min-width: 311px;
}

.x-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 74px;
  width: 248px;
}

.baggage-drop-7,
.security-8,
.immigration-7,
.passport-and-identification-8 {
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
}

.overlap-group1-9 {
  height: 74px;
  position: relative;
  width: 59px;
}

.mins-14 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.number-20 {
  height: 22px;
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.mins-15 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-10-7 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 23px;
}

.number-21 {
  height: 22px;
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-13-7 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 0;
  position: absolute;
  top: 24px;
  width: 32px;
}

.address-19 {
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 26px;
  white-space: nowrap;
}

.flex-row-16 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  height: 22px;
  min-width: 79px;
}

.total-3 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 31px;
  text-align: right;
  white-space: nowrap;
}

.address-20 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 44px;
  text-align: right;
  white-space: nowrap;
}

.please-prepare-8 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 1px;
  margin-top: 5px;
  white-space: nowrap;
}

.flex-row-17 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 171px;
}

.fingerprint-8,
.history_edu-7,
.vaccines-7 {
  height: 22px;
  width: 22px;
}

.flex-row-18 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 4px;
  margin-top: 5px;
  min-width: 171px;
}

.negative-pcr-certification-7 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 141px;
  white-space: nowrap;
}

.vaccin-container-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 24px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 178px;
}

.official-vaccination-records-7 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 148px;
  white-space: nowrap;
}

.flex-row-19 {
  align-items: flex-start;
  display: flex;
  margin-left: 1px;
  margin-top: 13px;
  min-width: 248px;
}

.terminal-8 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-top: 5px;
  min-width: 65px;
  white-space: nowrap;
}

.number-22 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 15px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group5-6 {
  height: 47px;
  margin-left: 66px;
  position: relative;
  width: 91px;
}

.number-23 {
  left: 48px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.overlap-group3-7 {
  height: 42px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 88px;
}

.address-21 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.gate-8 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.address-22 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 3px;
  margin-top: 6px;
  min-width: 129px;
  white-space: nowrap;
}

.union-20 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 355px;
}

.union-21 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 721px;
  width: 355px;
}

.inflight-shopping-9 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 761px;
  white-space: nowrap;
}

.vectorclear-19 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 622px;
  width: 11px;
}

.vectorclear-20 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 762px;
  width: 11px;
}

.inflight-entertainment-7 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 610px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-7 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 633px;
  white-space: nowrap;
}

.rectangle-14-6 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 17px;
  width: 393px;
}

.overlap-group6-6 {
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

.initialising-1 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  white-space: nowrap;
}

.line-3-1 {
  height: 1px;
  left: 82px;
  object-fit: cover;
  position: absolute;
  top: 495px;
  width: 270px;
}
</style>
