<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-10 screen">
      <div class="overlap-group1-7">
        <img
          class="subtract-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-3@2x.svg"
          alt="Subtract"
        />
        <div class="nrt-5 sfprotext-thin-white-34px">{{ nrt }}</div>
        <div class="number-14 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
        <div class="number-15 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
        <div class="hkg-7 sfprotext-thin-white-34px">{{ hkg }}</div>
        <img
          class="line-1-7"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
          alt="Line 1"
        />
        <div class="cx501-5 sfprotext-light-white-12px">{{ cx501 }}</div>
        <p class="baggage-drop-5 sfprotext-light-white-17px">
          <span class="sfprotext-light-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-light-white-12px">{{ spanText2 }}</span
          ><span class="sfprotext-light-white-17px">{{ spanText3 }}</span>
        </p>
        <div class="security-6 sfprotext-light-white-17px">{{ security }}</div>
        <div class="immigration-5 sfprotext-light-white-17px">{{ immigration }}</div>
        <div class="please-prepare-6 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
        <div class="passport-and-identification-6 sfprotext-regular-normal-white-12px">
          {{ passportAndIdentification }}
        </div>
        <div class="negative-pcr-certification-5 sfprotext-regular-normal-white-12px">
          {{ negativePcrCertification }}
        </div>
        <div class="official-vaccination-records-5 sfprotext-regular-normal-white-12px">
          {{ officialVaccinationRecords }}
        </div>
        <div class="terminal-6 sfprotext-light-white-17px">{{ terminal }}</div>
        <div class="gate-6 sfprotext-light-white-17px">{{ gate }}</div>
        <group1 :className="group1Props.className" />
        <img
          class="fingerprint-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-3@2x.svg"
          alt="fingerprint"
        />
        <img
          class="history_edu-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-2@2x.svg"
          alt="history_edu"
        />
        <img
          class="vaccines-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-2@2x.svg"
          alt="vaccines"
        />
        <div class="mins-10 sfprotext-lightitalic-light-white-17px">{{ mins1 }}</div>
        <div class="text-10 sfprotext-lightitalic-light-white-17px" v-html="text10"></div>
        <div class="mins-11 sfprotext-lightitalic-light-white-17px">{{ mins2 }}</div>
        <img class="image-6-6" :src="image6" alt="image 6" />
        <div class="cathay-beyond-7 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText4 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText5 }}</span>
        </div>
        <div class="address-13 sfprotext-medium-sunglo-12px">{{ address1 }}</div>
        <div class="total-1 sfprotext-medium-white-12px">{{ total }}</div>
        <div class="rectangle-10-5"></div>
        <div class="rectangle-11-4"></div>
        <div class="text-11 sfprotext-lightitalic-light-white-17px" v-html="text11"></div>
        <div class="rectangle-13-5"></div>
        <div class="address-14 sfprotext-lightitalic-light-white-17px">{{ address2 }}</div>
        <img class="union-16" :src="union1" alt="Union" /><img class="union-17" :src="union2" alt="Union" />
        <div class="inflight-shopping-7 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-15"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-16"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-5 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-5 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-4"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhiteProps.className"
          :statusBar3Props="statusBarWhiteProps.statusBar3Props"
        />
        <div class="rectangle-15"></div>
        <p class="your-flight-to-hong-1 sfprotext-normal-oracle-17px" v-html="yourFlightToHong1"></p>
        <div class="the-house-of-gucci sfprotext-light-oracle-17px" v-html="theHouseOfGucci"></div>
        <div class="nightmare-alley sfprotext-light-oracle-17px">{{ nightmareAlley }}</div>
        <div class="name sfprotext-light-oracle-17px">{{ name }}</div>
        <div class="x2h-37m-2021 sfprotext-lightitalic-light-oracle-12px">{{ x2H37M2021 }}</div>
        <div class="x2h-30m-2021 sfprotext-lightitalic-light-oracle-12px">{{ x2H30M2021 }}</div>
        <div class="x1h-49m-2022 sfprotext-lightitalic-light-oracle-12px">{{ x1H49M2022 }}</div>
        <div class="play-now sfprotext-regular-normal-oracle-12px">{{ playNow1 }}</div>
        <div class="play-now-1 sfprotext-regular-normal-oracle-12px">{{ playNow2 }}</div>
        <div class="play-now-2 sfprotext-regular-normal-oracle-12px">{{ playNow3 }}</div>
        <div class="watch-later sfprotext-regular-normal-black-12px">{{ watchLater1 }}</div>
        <div class="watch-later-1 sfprotext-regular-normal-oracle-12px">{{ watchLater2 }}</div>
        <div class="watch-later-2 sfprotext-regular-normal-oracle-12px">{{ watchLater3 }}</div>
        <img class="rectangle-34" :src="rectangle34" alt="Rectangle 34" /><img
          class="rectangle-35"
          :src="rectangle35"
          alt="Rectangle 35"
        /><img class="rectangle-36" :src="rectangle36" alt="Rectangle 36" /><img
          class="play_circle"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-3@2x.svg"
          alt="play_circle"
        />
        <img
          class="play_circle-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-4@2x.svg"
          alt="play_circle"
        />
        <img
          class="play_circle-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-5@2x.svg"
          alt="play_circle"
        />
        <img
          class="queue_music"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-3@2x.svg"
          alt="queue_music"
        />
        <img
          class="queue_music-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-4@2x.svg"
          alt="queue_music"
        />
        <img
          class="queue_music-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-5@2x.svg"
          alt="queue_music"
        />
        <img
          class="line-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-4@2x.svg"
          alt="Line 4"
        />
        <img
          class="line-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-4@2x.svg"
          alt="Line 5"
        />
        <div class="rectangle-37"></div>
        <div class="queued sfprotext-regular-normal-white-17px">{{ queued }}</div>
        <div class="group-59-1">
          <div class="overlap-group-8">
            <img class="image-5-2" :src="image5" alt="image 5" />
            <p class="now-boarding-cx-501-to-hkg-1 sfprotext-normal-oracle-17px">{{ nowBoardingCx501ToHkg }}</p>
          </div>
          <p class="your-flight-to-hong-2 sfprotext-normal-oracle-17px-2" v-html="yourFlightToHong2"></p>
        </div>
        <img
          class="icon-close"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c9929974d0023ddaf581/img/union-1@2x.svg"
          alt="icon-close"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
import StatusBarWhite from "./StatusBarWhite";
export default {
  name: "Questionnaire10",
  components: {
    Group1,
    HomeIndicatorWhite,
    StatusBarWhite,
  },
  props: [
    "nrt",
    "number1",
    "number2",
    "hkg",
    "cx501",
    "spanText1",
    "spanText2",
    "spanText3",
    "security",
    "immigration",
    "pleasePrepare",
    "passportAndIdentification",
    "negativePcrCertification",
    "officialVaccinationRecords",
    "terminal",
    "gate",
    "mins1",
    "text10",
    "mins2",
    "image6",
    "spanText4",
    "spanText5",
    "address1",
    "total",
    "text11",
    "address2",
    "union1",
    "union2",
    "inflightShopping",
    "inflightEntertainment",
    "preselectYourFavouriteShows",
    "yourFlightToHong1",
    "theHouseOfGucci",
    "nightmareAlley",
    "name",
    "x2H37M2021",
    "x2H30M2021",
    "x1H49M2022",
    "playNow1",
    "playNow2",
    "playNow3",
    "watchLater1",
    "watchLater2",
    "watchLater3",
    "rectangle34",
    "rectangle35",
    "rectangle36",
    "queued",
    "image5",
    "nowBoardingCx501ToHkg",
    "yourFlightToHong2",
    "group1Props",
    "homeIndicatorWhiteProps",
    "statusBarWhiteProps",
  ],
};
</script>

<style>
.questionnaire-10 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group1-7 {
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  margin-left: -23px;
  margin-top: -17px;
  position: relative;
  width: 442px;
}

.subtract-5 {
  height: 414px;
  left: 40px;
  position: absolute;
  top: 123px;
  width: 355px;
}

.nrt-5 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 157px;
  white-space: nowrap;
}

.number-14 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 479px;
  white-space: nowrap;
}

.number-15 {
  left: 269px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 479px;
  white-space: nowrap;
}

.hkg-7 {
  left: 307px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 157px;
  white-space: nowrap;
}

.line-1-7 {
  height: 1px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 168px;
  width: 155px;
}

.cx501-5 {
  left: 203px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 146px;
  white-space: nowrap;
}

.baggage-drop-5 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 228px;
  white-space: nowrap;
}

.security-6 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 254px;
  white-space: nowrap;
}

.immigration-5 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 280px;
  white-space: nowrap;
}

.please-prepare-6 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 329px;
  white-space: nowrap;
}

.passport-and-identification-6 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 355px;
  white-space: nowrap;
}

.negative-pcr-certification-5 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 383px;
  white-space: nowrap;
}

.official-vaccination-records-5 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 411px;
  white-space: nowrap;
}

.terminal-6 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.gate-6 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.fingerprint-6 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 356px;
  width: 22px;
}

.history_edu-5 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 383px;
  width: 22px;
}

.vaccines-5 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 410px;
  width: 22px;
}

.mins-10 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 228px;
  white-space: nowrap;
}

.text-10 {
  left: 318px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 206px;
}

.mins-11 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 280px;
  white-space: nowrap;
}

.image-6-6 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 84px;
  width: 24px;
}

.cathay-beyond-7 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.address-13 {
  left: 331px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 302px;
  white-space: nowrap;
}

.total-1 {
  left: 296px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 302px;
  white-space: nowrap;
}

.rectangle-10-5 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 250px;
  width: 23px;
}

.rectangle-11-4 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 208px;
  width: 23px;
}

.text-11 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 258px;
}

.rectangle-13-5 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 316px;
  position: absolute;
  top: 253px;
  width: 32px;
}

.address-14 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 254px;
  white-space: nowrap;
}

.union-16 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 355px;
}

.union-17 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 721px;
  width: 355px;
}

.inflight-shopping-7 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 761px;
  white-space: nowrap;
}

.vectorclear-15 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 622px;
  width: 11px;
}

.vectorclear-16 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 762px;
  width: 11px;
}

.inflight-entertainment-5 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 610px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-5 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 633px;
  white-space: nowrap;
}

.rectangle-14-4 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 17px;
  width: 393px;
}

.rectangle-15 {
  background-color: var(--white);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 7px #00000040;
  height: 626px;
  left: 59px;
  position: absolute;
  top: 130px;
  width: 322px;
}

.your-flight-to-hong-1 {
  left: 81px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 148px;
}

.the-house-of-gucci {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 204px;
}

.nightmare-alley {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 382px;
  white-space: nowrap;
}

.name {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 560px;
  white-space: nowrap;
}

.x2h-37m-2021 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 246px;
  white-space: nowrap;
}

.x2h-30m-2021 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 406px;
  white-space: nowrap;
}

.x1h-49m-2022 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 584px;
  white-space: nowrap;
}

.play-now {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 294px;
  white-space: nowrap;
}

.play-now-1 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 472px;
  white-space: nowrap;
}

.play-now-2 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 650px;
  white-space: nowrap;
}

.watch-later {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 321px;
  white-space: nowrap;
}

.watch-later-1 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 499px;
  white-space: nowrap;
}

.watch-later-2 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 677px;
  white-space: nowrap;
}

.rectangle-34 {
  height: 137px;
  left: 81px;
  position: absolute;
  top: 205px;
  width: 121px;
}

.rectangle-35 {
  height: 137px;
  left: 81px;
  position: absolute;
  top: 383px;
  width: 121px;
}

.rectangle-36 {
  height: 137px;
  left: 81px;
  object-fit: cover;
  position: absolute;
  top: 561px;
  width: 121px;
}

.play_circle {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 293px;
  width: 22px;
}

.play_circle-1 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 471px;
  width: 22px;
}

.play_circle-2 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 649px;
  width: 22px;
}

.queue_music {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 320px;
  width: 22px;
}

.queue_music-1 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 498px;
  width: 22px;
}

.queue_music-2 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 676px;
  width: 22px;
}

.line-4 {
  height: 1px;
  left: 80px;
  object-fit: cover;
  position: absolute;
  top: 363px;
  width: 279px;
}

.line-5 {
  height: 1px;
  left: 80px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 279px;
}

.rectangle-37 {
  background-color: var(--black);
  border: 1px none;
  height: 136px;
  left: 82px;
  opacity: 0.5;
  position: absolute;
  top: 205px;
  width: 120px;
}

.queued {
  left: 111px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 266px;
  white-space: nowrap;
}

.group-59-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  left: 46px;
  min-height: 136px;
  position: absolute;
  top: 87px;
  width: 351px;
}

.overlap-group-8 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  gap: 18px;
  height: 69px;
  margin-right: 2px;
  min-width: 349px;
  padding: 0 23px;
}

.image-5-2 {
  height: 35px;
  width: 30px;
}

.now-boarding-cx-501-to-hkg-1 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 4px;
  min-height: 19px;
  min-width: 234px;
  white-space: nowrap;
}

.your-flight-to-hong-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-right: 11px;
  min-height: 37px;
  min-width: 262px;
}

.icon-close {
  height: 25px;
  left: 368px;
  position: absolute;
  top: 89px;
  width: 25px;
}
</style>
