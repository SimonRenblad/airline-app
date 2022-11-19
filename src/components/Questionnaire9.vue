<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-9 screen">
      <div class="overlap-group1-11">
        <div class="beyond-background-2"></div>
        <img
          class="subtract-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract@2x.svg"
          alt="Subtract"
        />
        <div class="nrt-9 sfprotext-thin-white-34px">{{ nrt }}</div>
        <div class="number-28 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
        <div class="number-29 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
        <div class="hkg-11 sfprotext-thin-white-34px">{{ hkg }}</div>
        <img
          class="line-1-11"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
          alt="Line 1"
        />
        <div class="cx501-6 sfprotext-light-white-12px">{{ cx501 }}</div>
        <p class="baggage-drop-9 sfprotext-light-white-17px">
          <span class="sfprotext-light-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-light-white-12px">{{ spanText2 }}</span
          ><span class="sfprotext-light-white-17px">{{ spanText3 }}</span>
        </p>
        <div class="security-10 sfprotext-light-white-17px">{{ security }}</div>
        <div class="immigration-9 sfprotext-light-white-17px">{{ immigration }}</div>
        <div class="please-prepare-10 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
        <div class="passport-and-identification-10 sfprotext-regular-normal-white-12px">
          {{ passportAndIdentification }}
        </div>
        <div class="negative-pcr-certification-9 sfprotext-regular-normal-white-12px">
          {{ negativePcrCertification }}
        </div>
        <div class="official-vaccination-records-9 sfprotext-regular-normal-white-12px">
          {{ officialVaccinationRecords }}
        </div>
        <div class="terminal-10 sfprotext-light-white-17px">{{ terminal }}</div>
        <div class="gate-10 sfprotext-light-white-17px">{{ gate }}</div>
        <group1 :className="group1Props.className" />
        <img
          class="fingerprint-10"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint@2x.svg"
          alt="fingerprint"
        />
        <img
          class="history_edu-9"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu@2x.svg"
          alt="history_edu"
        />
        <img
          class="vaccines-9"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines@2x.svg"
          alt="vaccines"
        />
        <div class="mins-18 sfprotext-lightitalic-light-white-17px">{{ mins1 }}</div>
        <div class="text-12 sfprotext-lightitalic-light-white-17px" v-html="text12"></div>
        <div class="mins-19 sfprotext-lightitalic-light-white-17px">{{ mins2 }}</div>
        <img class="image-6-10" :src="image6" alt="image 6" />
        <div class="cathay-beyond-11 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText4 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText5 }}</span>
        </div>
        <div class="address-27 sfprotext-medium-sunglo-12px">{{ address1 }}</div>
        <div class="total-5 sfprotext-medium-white-12px">{{ total }}</div>
        <div class="rectangle-10-9"></div>
        <div class="rectangle-11-5"></div>
        <div class="text-13 sfprotext-lightitalic-light-white-17px" v-html="text13"></div>
        <div class="rectangle-13-9"></div>
        <div class="address-28 sfprotext-lightitalic-light-white-17px">{{ address2 }}</div>
        <img class="union-24" :src="union1" alt="Union" /><img class="union-25" :src="union2" alt="Union" />
        <div class="inflight-shopping-11 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-23"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-24"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-9 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-9 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-8"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhite1Props.className"
          :statusBar3Props="statusBarWhite1Props.statusBar3Props"
        />
        <status-bar-white
          :className="statusBarWhite2Props.className"
          :statusBar3Props="statusBarWhite2Props.statusBar3Props"
        />
        <div class="rectangle-15-1"></div>
        <p class="your-flight-to-hong-4 sfprotext-normal-oracle-17px" v-html="yourFlightToHong1"></p>
        <div class="the-house-of-gucci-2 sfprotext-light-oracle-17px" v-html="theHouseOfGucci"></div>
        <div class="nightmare-alley-2 sfprotext-light-oracle-17px">{{ nightmareAlley }}</div>
        <div class="name-2 sfprotext-light-oracle-17px">{{ name }}</div>
        <div class="x2h-37m-2021-1 sfprotext-lightitalic-light-oracle-12px">{{ x2H37M2021 }}</div>
        <div class="x2h-30m-2021-1 sfprotext-lightitalic-light-oracle-12px">{{ x2H30M2021 }}</div>
        <div class="x1h-49m-2022-1 sfprotext-lightitalic-light-oracle-12px">{{ x1H49M2022 }}</div>
        <div class="play-now-4 sfprotext-regular-normal-oracle-12px">{{ playNow1 }}</div>
        <div class="play-now-5 sfprotext-regular-normal-oracle-12px">{{ playNow2 }}</div>
        <div class="play-now-6 sfprotext-regular-normal-oracle-12px">{{ playNow3 }}</div>
        <div class="watch-later-4 sfprotext-regular-normal-black-12px">{{ watchLater1 }}</div>
        <div class="watch-later-5 sfprotext-regular-normal-oracle-12px">{{ watchLater2 }}</div>
        <div class="watch-later-6 sfprotext-regular-normal-oracle-12px">{{ watchLater3 }}</div>
        <img class="rectangle-34-1" :src="rectangle34" alt="Rectangle 34" /><img
          class="rectangle-35-1"
          :src="rectangle35"
          alt="Rectangle 35"
        /><img class="rectangle-36-2" :src="rectangle36" alt="Rectangle 36" /><img
          class="play_circle-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle@2x.svg"
          alt="play_circle"
        />
        <img
          class="play_circle-7"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-1@2x.svg"
          alt="play_circle"
        />
        <img
          class="play_circle-8"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/play-circle-2@2x.svg"
          alt="play_circle"
        />
        <img
          class="queue_music-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music@2x.svg"
          alt="queue_music"
        />
        <img
          class="queue_music-7"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-1@2x.svg"
          alt="queue_music"
        />
        <img
          class="queue_music-8"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/queue-music-2@2x.svg"
          alt="queue_music"
        />
        <img
          class="line-4-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-4@2x.svg"
          alt="Line 4"
        />
        <img
          class="line-5-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-4@2x.svg"
          alt="Line 5"
        />
        <div class="rectangle-37-1"></div>
        <div class="queued-1 sfprotext-regular-normal-white-17px">{{ queued }}</div>
        <div class="group-59-2">
          <div class="group-49-1">
            <img class="image-5-3" :src="image5" alt="image 5" />
            <div class="overlap-group-12">
              <p class="now-boarding-cx-501-to-hkg-2 sfprotext-normal-oracle-17px">{{ nowBoardingCx501ToHkg }}</p>
            </div>
          </div>
          <p class="your-flight-to-hong-5 sfprotext-normal-oracle-17px-2" v-html="yourFlightToHong2"></p>
        </div>
        <router-link to="/flow-5"
          ><img
            class="icon-close-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/union-1@2x.svg"
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
  name: "Questionnaire9",
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
    "text12",
    "mins2",
    "image6",
    "spanText4",
    "spanText5",
    "address1",
    "total",
    "text13",
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
    "statusBarWhite1Props",
    "statusBarWhite2Props",
  ],
};
</script>

<style>
.questionnaire-9 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group1-11 {
  height: 988px;
  margin-left: -23px;
  margin-top: -118px;
  position: relative;
  width: 442px;
}

.beyond-background-2 {
  background-color: var(--oracle);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  left: 0;
  position: absolute;
  top: 101px;
  width: 442px;
}

.subtract-6 {
  height: 414px;
  left: 40px;
  position: absolute;
  top: 224px;
  width: 355px;
}

.nrt-9 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 258px;
  white-space: nowrap;
}

.number-28 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 580px;
  white-space: nowrap;
}

.number-29 {
  left: 269px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 580px;
  white-space: nowrap;
}

.hkg-11 {
  left: 307px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 258px;
  white-space: nowrap;
}

.line-1-11 {
  height: 1px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 269px;
  width: 155px;
}

.cx501-6 {
  left: 203px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 247px;
  white-space: nowrap;
}

.baggage-drop-9 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 329px;
  white-space: nowrap;
}

.security-10 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 355px;
  white-space: nowrap;
}

.immigration-9 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 381px;
  white-space: nowrap;
}

.please-prepare-10 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 430px;
  white-space: nowrap;
}

.passport-and-identification-10 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 456px;
  white-space: nowrap;
}

.negative-pcr-certification-9 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.official-vaccination-records-9 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 512px;
  white-space: nowrap;
}

.terminal-10 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 585px;
  white-space: nowrap;
}

.gate-10 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 585px;
  white-space: nowrap;
}

.fingerprint-10 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 457px;
  width: 22px;
}

.history_edu-9 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 484px;
  width: 22px;
}

.vaccines-9 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 511px;
  width: 22px;
}

.mins-18 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 329px;
  white-space: nowrap;
}

.text-12 {
  left: 318px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 307px;
}

.mins-19 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 381px;
  white-space: nowrap;
}

.image-6-10 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 185px;
  width: 24px;
}

.cathay-beyond-11 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 191px;
  white-space: nowrap;
}

.address-27 {
  left: 331px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 403px;
  white-space: nowrap;
}

.total-5 {
  left: 296px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 403px;
  white-space: nowrap;
}

.rectangle-10-9 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 351px;
  width: 23px;
}

.rectangle-11-5 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 309px;
  width: 23px;
}

.text-13 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 359px;
}

.rectangle-13-9 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 316px;
  position: absolute;
  top: 354px;
  width: 32px;
}

.address-28 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 355px;
  white-space: nowrap;
}

.union-24 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 642px;
  width: 355px;
}

.union-25 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 822px;
  width: 355px;
}

.inflight-shopping-11 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 862px;
  white-space: nowrap;
}

.vectorclear-23 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 723px;
  width: 11px;
}

.vectorclear-24 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 863px;
  width: 11px;
}

.inflight-entertainment-9 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 711px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-9 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 734px;
  white-space: nowrap;
}

.rectangle-14-8 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 118px;
  width: 393px;
}

.rectangle-15-1 {
  background-color: var(--white);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 7px #00000040;
  height: 626px;
  left: 59px;
  position: absolute;
  top: 231px;
  width: 322px;
}

.your-flight-to-hong-4 {
  left: 81px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 249px;
}

.the-house-of-gucci-2 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 305px;
}

.nightmare-alley-2 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 483px;
  white-space: nowrap;
}

.name-2 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 661px;
  white-space: nowrap;
}

.x2h-37m-2021-1 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 347px;
  white-space: nowrap;
}

.x2h-30m-2021-1 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 507px;
  white-space: nowrap;
}

.x1h-49m-2022-1 {
  left: 220px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 685px;
  white-space: nowrap;
}

.play-now-4 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 395px;
  white-space: nowrap;
}

.play-now-5 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 573px;
  white-space: nowrap;
}

.play-now-6 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 751px;
  white-space: nowrap;
}

.watch-later-4 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 422px;
  white-space: nowrap;
}

.watch-later-5 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 600px;
  white-space: nowrap;
}

.watch-later-6 {
  left: 248px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 778px;
  white-space: nowrap;
}

.rectangle-34-1 {
  height: 137px;
  left: 81px;
  position: absolute;
  top: 306px;
  width: 121px;
}

.rectangle-35-1 {
  height: 137px;
  left: 81px;
  position: absolute;
  top: 484px;
  width: 121px;
}

.rectangle-36-2 {
  height: 137px;
  left: 81px;
  object-fit: cover;
  position: absolute;
  top: 662px;
  width: 121px;
}

.play_circle-6 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 394px;
  width: 22px;
}

.play_circle-7 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 572px;
  width: 22px;
}

.play_circle-8 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 750px;
  width: 22px;
}

.queue_music-6 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 421px;
  width: 22px;
}

.queue_music-7 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 599px;
  width: 22px;
}

.queue_music-8 {
  height: 22px;
  left: 220px;
  position: absolute;
  top: 777px;
  width: 22px;
}

.line-4-1 {
  height: 1px;
  left: 80px;
  object-fit: cover;
  position: absolute;
  top: 464px;
  width: 279px;
}

.line-5-1 {
  height: 1px;
  left: 80px;
  object-fit: cover;
  position: absolute;
  top: 642px;
  width: 279px;
}

.rectangle-37-1 {
  background-color: var(--black);
  border: 1px none;
  height: 136px;
  left: 82px;
  opacity: 0.5;
  position: absolute;
  top: 306px;
  width: 120px;
}

.queued-1 {
  left: 111px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 367px;
  white-space: nowrap;
}

.group-59-2 {
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

.group-49-1 {
  align-items: flex-end;
  display: flex;
  gap: 3616px;
  min-width: 351px;
}

.image-5-3 {
  height: 35px;
  margin-bottom: -409px;
  margin-left: -3646px;
  width: 30px;
}

.overlap-group-12 {
  align-items: flex-end;
  background-color: #d9d9d9e6;
  border-radius: 5px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 69px;
  justify-content: flex-end;
  min-width: 349px;
  padding: 23px 44px;
}

.now-boarding-cx-501-to-hkg-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  min-width: 234px;
  white-space: nowrap;
}

.your-flight-to-hong-5 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-right: 11px;
  min-height: 37px;
  min-width: 262px;
}

.icon-close-2 {
  cursor: pointer;
  height: 25px;
  left: 368px;
  position: absolute;
  top: 190px;
  width: 25px;
}
</style>
