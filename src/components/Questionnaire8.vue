<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-8 screen">
      <div class="overlap-group7-7">
        <img class="image-6-9" :src="image6" alt="image 6" />
        <div class="overlap-group-11">
          <div class="flex-row-21 sfprotext-thin-white-34px">
            <div class="nrt-8">{{ nrt }}</div>
            <div class="overlap-group4-8">
              <div class="overlap-group3-8">
                <img
                  class="line-1-10"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
                  alt="Line 1"
                />
                <group1 />
                <div class="cx501-a321neo-3 sfprotext-light-white-12px">{{ cx501A321Neo }}</div>
              </div>
              <div class="x1035am-8 sfprotext-light-white-12px">{{ x1035Am }}</div>
            </div>
            <div class="hkg-10">{{ hkg }}</div>
          </div>
          <div class="flex-row-22">
            <div class="x-container-3 sfprotext-light-white-17px">
              <p class="baggage-drop-8">
                <span class="sfprotext-light-white-17px">{{ spanText1 }}</span
                ><span class="sfprotext-light-white-12px">{{ spanText2 }}</span
                ><span class="sfprotext-light-white-17px">{{ spanText3 }}</span>
              </p>
              <div class="security-9">{{ security }}</div>
              <div class="immigration-8">{{ immigration }}</div>
            </div>
            <div class="overlap-group1-10 sfprotext-lightitalic-light-white-17px">
              <div class="mins-16">{{ mins1 }}</div>
              <div class="number-24 valign-text-bottom">{{ number1 }}</div>
              <div class="mins-17">{{ mins2 }}</div>
              <div class="rectangle-10-8"></div>
              <div class="number-25 valign-text-bottom">{{ number2 }}</div>
              <div class="rectangle-13-8"></div>
              <div class="address-23">{{ address1 }}</div>
            </div>
          </div>
          <div class="flex-row-23">
            <div class="total-4 sfprotext-medium-white-12px" v-html="total"></div>
            <div class="address-24 sfprotext-medium-sunglo-12px">{{ address2 }}</div>
          </div>
          <div class="please-prepare-9 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
          <div class="flex-row-24">
            <img
              class="fingerprint-9"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-4@2x.svg"
              alt="fingerprint"
            />
            <div class="passport-and-identification-9 sfprotext-regular-normal-white-12px">
              {{ passportAndIdentification }}
            </div>
          </div>
          <div class="flex-row-25">
            <img
              class="history_edu-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-3@2x.svg"
              alt="history_edu"
            />
            <div class="negative-pcr-certification-8 sfprotext-regular-normal-white-12px">
              {{ negativePcrCertification }}
            </div>
          </div>
          <div class="vaccin-container-3">
            <img
              class="vaccines-8"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-3@2x.svg"
              alt="vaccines"
            />
            <div class="official-vaccination-records-8 sfprotext-regular-normal-white-12px">
              {{ officialVaccinationRecords }}
            </div>
          </div>
          <div class="flex-row-26">
            <div class="terminal-9 sfprotext-light-white-17px">{{ terminal }}</div>
            <div class="number-26 sfprotext-thinitalic-thin-white-34px">{{ number3 }}</div>
            <div class="overlap-group5-7">
              <div class="number-27 sfprotext-thinitalic-thin-white-34px">{{ number4 }}</div>
              <div class="overlap-group2-8">
                <div class="address-25 sfprotext-regular-normal-white-12px">{{ address3 }}</div>
                <div class="gate-9 sfprotext-light-white-17px">{{ gate }}</div>
              </div>
            </div>
          </div>
          <div class="address-26 sfprotext-medium-white-12px">{{ address4 }}</div>
        </div>
        <div class="cathay-beyond-10 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText4 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText5 }}</span>
        </div>
        <img class="union-22" :src="union1" alt="Union" /><img class="union-23" :src="union2" alt="Union" />
        <div class="inflight-shopping-10 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-21"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-22"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-8 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-8 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-7"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhiteProps.className"
          :statusBar3Props="statusBarWhiteProps.statusBar3Props"
        />
        <div class="flex-col">
          <div class="flex-col-1">
            <div class="flex-col-2">
              <p class="your-flight-to-hong-3 sfprotext-normal-oracle-17px" v-html="yourFlightToHong"></p>
              <div class="flex-row-27">
                <img class="rectangle-3-1" :src="rectangle34" alt="Rectangle 34" />
                <div class="flex-col-3">
                  <div class="the-house-of-gucci-1 sfprotext-light-oracle-17px">{{ theHouseOfGucci }}</div>
                  <div class="m-202 sfprotext-lightitalic-light-oracle-12px">{{ x2H37M2021 }}</div>
                  <div class="play-container-1">
                    <img
                      class="play_circle-3"
                      src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-6@2x.svg"
                      alt="play_circle"
                    />
                    <div class="play-now-3 sfprotext-regular-normal-oracle-12px">{{ playNow1 }}</div>
                  </div>
                  <div class="group-3">
                    <img
                      class="queue_music-3"
                      src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-8@2x.svg"
                      alt="queue_music"
                    />
                    <div class="watch-later-3 sfprotext-regular-normal-oracle-12px">{{ watchLater1 }}</div>
                  </div>
                </div>
              </div>
              <img
                class="line"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-4@2x.svg"
                alt="Line 4"
              />
            </div>
            <div class="flex-row-28">
              <img class="rectangle-3-1" :src="rectangle35" alt="Rectangle 35" />
              <div class="flex-col-4">
                <div class="nightmare-alley-1 sfprotext-light-oracle-17px">{{ nightmareAlley }}</div>
                <div class="m-202 sfprotext-lightitalic-light-oracle-12px">{{ x2H30M2021 }}</div>
                <div class="play-container">
                  <img
                    class="play_circle-4"
                    src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-7@2x.svg"
                    alt="play_circle"
                  />
                  <div class="play-now-3 sfprotext-regular-normal-oracle-12px">{{ playNow2 }}</div>
                </div>
                <div class="flex-row-20">
                  <img
                    class="queue_music-4"
                    src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-6@2x.svg"
                    alt="queue_music"
                  />
                  <div class="watch-later-3 sfprotext-regular-normal-oracle-12px">{{ watchLater2 }}</div>
                </div>
              </div>
            </div>
            <img
              class="line"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-4@2x.svg"
              alt="Line 5"
            />
          </div>
          <div class="flex-row-29">
            <img class="rectangle-36-1" :src="rectangle36" alt="Rectangle 36" />
            <div class="flex-col-5">
              <div class="name-1 sfprotext-light-oracle-17px">{{ name }}</div>
              <div class="m-202 sfprotext-lightitalic-light-oracle-12px">{{ x1H49M2022 }}</div>
              <div class="play-container">
                <img
                  class="play_circle-5"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-8@2x.svg"
                  alt="play_circle"
                />
                <div class="play-now-3 sfprotext-regular-normal-oracle-12px">{{ playNow3 }}</div>
              </div>
              <div class="flex-row-20">
                <img
                  class="queue_music-5"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-7@2x.svg"
                  alt="queue_music"
                />
                <div class="watch-later-3 sfprotext-regular-normal-oracle-12px">{{ watchLater3 }}</div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/mode-home3">
        <img
          class="icon-close-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c9929974d0023ddaf581/img/union-2@2x.svg"
          alt="icon-close"
        />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
import StatusBarWhite from "./StatusBarWhite";
export default {
  name: "Questionnaire8",
  components: {
    Group1,
    HomeIndicatorWhite,
    StatusBarWhite,
  },
  props: [
    "image6",
    "nrt",
    "cx501A321Neo",
    "x1035Am",
    "hkg",
    "spanText1",
    "spanText2",
    "spanText3",
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
    "spanText4",
    "spanText5",
    "union1",
    "union2",
    "inflightShopping",
    "inflightEntertainment",
    "preselectYourFavouriteShows",
    "yourFlightToHong",
    "rectangle34",
    "theHouseOfGucci",
    "x2H37M2021",
    "playNow1",
    "watchLater1",
    "rectangle35",
    "nightmareAlley",
    "x2H30M2021",
    "playNow2",
    "watchLater2",
    "rectangle36",
    "name",
    "x1H49M2022",
    "playNow3",
    "watchLater3",
    "homeIndicatorWhiteProps",
    "statusBarWhiteProps",
  ],
};
</script>

<style>
.questionnaire-8 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group7-7 {
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  margin-left: -23px;
  margin-top: -17px;
  position: relative;
  width: 442px;
}

.image-6-9 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 84px;
  width: 24px;
}

.overlap-group-11 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-4@2x.svg);
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

.flex-row-21 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  margin-top: 6px;
  min-width: 311px;
}

.nrt-8 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group4-8 {
  height: 44px;
  margin-left: 1px;
  position: relative;
  width: 165px;
}

.overlap-group3-8 {
  height: 36px;
  left: 0;
  position: absolute;
  top: 0;
  width: 165px;
}

.line-1-10 {
  height: 1px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 21px;
  width: 155px;
}

.cx501-a321neo-3 {
  left: 43px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.x1035am-8 {
  left: 66px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 22px;
  white-space: nowrap;
}

.hkg-10 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-22 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  margin-top: 38px;
  min-width: 311px;
}

.x-container-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 74px;
  width: 248px;
}

.baggage-drop-8,
.security-9,
.immigration-8,
.passport-and-identification-9 {
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
}

.overlap-group1-10 {
  height: 74px;
  position: relative;
  width: 59px;
}

.mins-16 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.number-24 {
  height: 22px;
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.mins-17 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-10-8 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 23px;
}

.number-25 {
  height: 22px;
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-13-8 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 0;
  position: absolute;
  top: 24px;
  width: 32px;
}

.address-23 {
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 26px;
  white-space: nowrap;
}

.flex-row-23 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  height: 22px;
  min-width: 79px;
}

.total-4 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 31px;
  text-align: right;
  white-space: nowrap;
}

.address-24 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 44px;
  text-align: right;
  white-space: nowrap;
}

.please-prepare-9 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 1px;
  margin-top: 5px;
  white-space: nowrap;
}

.flex-row-24 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 171px;
}

.fingerprint-9,
.history_edu-8,
.vaccines-8,
.play_circle-3,
.queue_music-3,
.play_circle-4,
.queue_music-4,
.play_circle-5,
.queue_music-5 {
  height: 22px;
  width: 22px;
}

.flex-row-25 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 4px;
  margin-top: 5px;
  min-width: 171px;
}

.negative-pcr-certification-8 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 141px;
  white-space: nowrap;
}

.vaccin-container-3 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 24px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 178px;
}

.official-vaccination-records-8 {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 148px;
  white-space: nowrap;
}

.flex-row-26 {
  align-items: flex-start;
  display: flex;
  margin-left: 1px;
  margin-top: 13px;
  min-width: 248px;
}

.terminal-9 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-top: 5px;
  min-width: 65px;
  white-space: nowrap;
}

.number-26 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 15px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group5-7 {
  height: 47px;
  margin-left: 66px;
  position: relative;
  width: 91px;
}

.number-27 {
  left: 48px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.overlap-group2-8 {
  height: 42px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 88px;
}

.address-25 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.gate-9 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.address-26 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 3px;
  margin-top: 6px;
  min-width: 129px;
  white-space: nowrap;
}

.cathay-beyond-10 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.union-22 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 355px;
}

.union-23 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 721px;
  width: 355px;
}

.inflight-shopping-10 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 761px;
  white-space: nowrap;
}

.vectorclear-21 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 622px;
  width: 11px;
}

.vectorclear-22 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 762px;
  width: 11px;
}

.inflight-entertainment-8 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 610px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-8 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 633px;
  white-space: nowrap;
}

.rectangle-14-7 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 17px;
  width: 393px;
}

.flex-col {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 7px #00000040;
  display: flex;
  flex-direction: column;
  gap: 19px;
  left: 59px;
  min-height: 626px;
  padding: 19px 21px;
  position: absolute;
  top: 130px;
  width: 322px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 393px;
  width: 279px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 215px;
  width: 279px;
}

.your-flight-to-hong-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 1px;
  min-height: 37px;
}

.flex-row-27 {
  align-items: flex-start;
  display: flex;
  gap: 18px;
  margin-left: 1px;
  margin-top: 19px;
  min-width: 248px;
}

.rectangle-3-1 {
  height: 137px;
  width: 121px;
}

.flex-col-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 137px;
  width: 109px;
}

.the-house-of-gucci-1 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 37px;
}

.m-202 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 5px;
  min-height: 19px;
  white-space: nowrap;
}

.play-container-1 {
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 27px;
  min-width: 88px;
}

.play-now-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 1px;
  min-height: 19px;
  min-width: 60px;
  white-space: nowrap;
}

.group-3 {
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 5px;
  min-width: 109px;
}

.watch-later-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 1px;
  min-height: 19px;
  min-width: 79px;
  white-space: nowrap;
}

.line {
  height: 1px;
  margin-top: 21px;
  object-fit: cover;
  width: 279px;
}

.flex-row-28 {
  align-items: flex-start;
  display: flex;
  gap: 18px;
  margin-left: 1px;
  margin-top: 19px;
  min-width: 259px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 137px;
  width: 120px;
}

.nightmare-alley-1,
.name-1 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  white-space: nowrap;
}

.play-container {
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 45px;
  min-width: 88px;
}

.flex-row-20 {
  align-items: center;
  display: flex;
  gap: 6px;
  margin-top: 5px;
  min-width: 107px;
}

.flex-row-29 {
  align-items: flex-start;
  display: flex;
  gap: 18px;
  margin-left: 1px;
  min-width: 246px;
}

.rectangle-36-1 {
  height: 137px;
  object-fit: cover;
  width: 121px;
}

.flex-col-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 137px;
  width: 107px;
}

.icon-close-1 {
  height: 25px;
  left: 368px;
  position: absolute;
  top: 89px;
  width: 25px;
}
</style>
