<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-2 screen">
      <div class="overlap-group17-2">
        <img
          class="subtract-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-10@2x.svg"
          alt="Subtract"
        />
        <div class="nrt-3 sfprotext-thin-white-34px">{{ nrt }}</div>
        <div class="number-10 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
        <div class="number-11 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
        <div class="hkg-5 sfprotext-thin-white-34px">{{ hkg }}</div>
        <img
          class="line-1-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
          alt="Line 1"
        />
        <div class="cx501-3 sfprotext-light-white-12px">{{ cx501 }}</div>
        <div class="x1035am-4 sfprotext-light-white-12px">{{ x1035Am }}</div>
        <p class="baggage-drop-3 sfprotext-light-white-17px">
          <span class="sfprotext-light-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-light-white-12px">{{ spanText2 }}</span
          ><span class="sfprotext-light-white-17px">{{ spanText3 }}</span>
        </p>
        <div class="security-4 sfprotext-light-white-17px">{{ security }}</div>
        <div class="immigration-3 sfprotext-light-white-17px">{{ immigration }}</div>
        <div class="please-prepare-4 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
        <div class="passport-and-identification-4 sfprotext-regular-normal-white-12px">
          {{ passportAndIdentification }}
        </div>
        <div class="negative-pcr-certification-3 sfprotext-regular-normal-white-12px">
          {{ negativePcrCertification }}
        </div>
        <div class="official-vaccination-records-3 sfprotext-regular-normal-white-12px">
          {{ officialVaccinationRecords }}
        </div>
        <div class="terminal-4 sfprotext-light-white-17px">{{ terminal }}</div>
        <div class="gate-4 sfprotext-light-white-17px">{{ gate }}</div>
        <group1 :className="statusBarWhiteProps.className" />
        <img
          class="fingerprint-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-10@2x.svg"
          alt="fingerprint"
        />
        <img
          class="history_edu-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-9@2x.svg"
          alt="history_edu"
        />
        <img
          class="vaccines-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-9@2x.svg"
          alt="vaccines"
        />
        <div class="mins-6 sfprotext-lightitalic-light-white-17px">{{ mins1 }}</div>
        <img class="image-6-5" :src="image6" alt="image 6" />
        <div class="cathay-beyond-5 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText4 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText5 }}</span>
        </div>
        <div class="text-6 sfprotext-lightitalic-light-white-17px" v-html="text21"></div>
        <div class="mins-7 sfprotext-lightitalic-light-white-17px">{{ mins2 }}</div>
        <div class="rectangle-10-3"></div>
        <div class="rectangle-11-2"></div>
        <div class="text-7 sfprotext-lightitalic-light-white-17px" v-html="text22"></div>
        <div class="rectangle-13-3"></div>
        <div class="address-11 sfprotext-lightitalic-light-white-17px">{{ address }}</div>
        <img class="union-12" :src="union1" alt="Union" /><img class="union-13" :src="union2" alt="Union" />
        <div class="inflight-shopping-5 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-11"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-12"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-3 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-3 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-2"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhiteProps2.className"
          :statusBar3Props="statusBarWhiteProps2.statusBar3Props"
        />
        <div class="overlap-group-6">
          <div class="what-catches-your-fancy-2 sfprotext-normal-oracle-17px">{{ whatCatchesYourFancy }}</div>
          <div class="type-2 sfprotext-regular-normal-oracle-17px">{{ type }}</div>
          <div class="overlap-group-container-12">
            <div class="overlap-group13-2">
              <div class="movies-2 sfprotext-light-white-17px">{{ movies }}</div>
            </div>
            <div class="overlap-group11-2">
              <div class="tv-shows-2 sfprotext-light-oracle-17px">{{ tvShows }}</div>
              <div class="rectangle-26-2"></div>
            </div>
            <div class="overlap-group6-3">
              <div class="audio-2 sfprotext-light-oracle-17px">{{ audio }}</div>
              <div class="rectangle-27-2"></div>
            </div>
          </div>
          <div class="overlap-group-item-2 sfprotext-regular-normal-oracle-17px">{{ production }}</div>
          <div class="overlap-group-container-13">
            <div class="overlap-group9-2">
              <div class="language-6 sfprotext-light-oracle-17px">{{ language1 }}</div>
              <div class="rectangle-17-2"></div>
            </div>
            <div class="overlap-group8-2">
              <div class="language-7 sfprotext-light-oracle-17px">{{ language2 }}</div>
              <div class="rectangle-20-2"></div>
            </div>
            <div class="overlap-group5-3">
              <div class="western-2 sfprotext-light-white-17px">{{ western }}</div>
            </div>
          </div>
          <div class="overlap-group-container-14">
            <div class="overlap-group14-2">
              <div class="language-8 sfprotext-light-oracle-17px">{{ language3 }}</div>
              <div class="rectangle-22-2"></div>
            </div>
            <div class="overlap-group3-4">
              <div class="asian-cinema-2 sfprotext-light-oracle-17px">{{ asianCinema }}</div>
              <div class="rectangle-23-2"></div>
            </div>
          </div>
          <div class="overlap-group-item-2 sfprotext-regular-normal-oracle-17px">{{ genre }}</div>
          <div class="overlap-group-container-15">
            <div class="overlap-group15-2">
              <div class="comedy-2 sfprotext-light-oracle-17px">{{ comedy }}</div>
              <div class="rectangle-28-2"></div>
            </div>
            <div class="overlap-group16-2">
              <div class="action-2 sfprotext-light-oracle-17px">{{ action }}</div>
              <div class="rectangle-2"></div>
            </div>
            <div class="overlap-group7-3">
              <div class="horror-2 sfprotext-light-oracle-17px">{{ horror }}</div>
              <div class="rectangle-2"></div>
            </div>
          </div>
          <div class="overlap-group-container-16">
            <div class="overlap-group1-5">
              <div class="halloween-favourites-2 sfprotext-light-oracle-17px">{{ halloweenFavourites }}</div>
              <div class="rectangle-24-2"></div>
            </div>
            <div class="overlap-group10-2">
              <div class="place-4 sfprotext-light-oracle-17px">{{ place }}</div>
              <div class="rectangle-31-2"></div>
            </div>
          </div>
          <div class="overlap-group-container-17">
            <div class="overlap-group4-4">
              <div class="animation-2 sfprotext-light-oracle-17px">{{ animation }}</div>
              <div class="rectangle-32-2"></div>
            </div>
            <div class="overlap-group2-4">
              <div class="documentary-2 sfprotext-light-oracle-17px">{{ documentary }}</div>
              <div class="rectangle-33-2"></div>
            </div>
          </div>
          <div class="overlap-group12-2">
            <div class="generate-2 sfprotext-normal-white-17px">{{ generate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Group1 from "./Group1";
import HomeIndicatorWhite from "./HomeIndicatorWhite";
import StatusBarWhite from "./StatusBarWhite";
export default {
  name: "Questionnaire2",
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
    "x1035Am",
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
    "image6",
    "spanText4",
    "spanText5",
    "text21",
    "mins2",
    "text22",
    "address",
    "union1",
    "union2",
    "inflightShopping",
    "inflightEntertainment",
    "preselectYourFavouriteShows",
    "whatCatchesYourFancy",
    "type",
    "movies",
    "tvShows",
    "audio",
    "production",
    "language1",
    "language2",
    "western",
    "language3",
    "asianCinema",
    "genre",
    "comedy",
    "action",
    "horror",
    "halloweenFavourites",
    "place",
    "animation",
    "documentary",
    "generate",
    "statusBarWhiteProps",
    "homeIndicatorWhiteProps",
    "statusBarWhiteProps2",
  ],
};
</script>

<style>
.questionnaire-2 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group17-2 {
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  margin-left: -23px;
  margin-top: -17px;
  position: relative;
  width: 442px;
}

.subtract-3 {
  height: 414px;
  left: 40px;
  position: absolute;
  top: 123px;
  width: 355px;
}

.nrt-3 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 157px;
  white-space: nowrap;
}

.number-10 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 479px;
  white-space: nowrap;
}

.number-11 {
  left: 269px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 479px;
  white-space: nowrap;
}

.hkg-5 {
  left: 307px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 157px;
  white-space: nowrap;
}

.line-1-5 {
  height: 1px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 168px;
  width: 155px;
}

.cx501-3 {
  left: 203px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 146px;
  white-space: nowrap;
}

.x1035am-4 {
  left: 197px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 168px;
  white-space: nowrap;
}

.baggage-drop-3 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 228px;
  white-space: nowrap;
}

.security-4 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 254px;
  white-space: nowrap;
}

.immigration-3 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 280px;
  white-space: nowrap;
}

.please-prepare-4 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 329px;
  white-space: nowrap;
}

.passport-and-identification-4 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 355px;
  white-space: nowrap;
}

.negative-pcr-certification-3 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 383px;
  white-space: nowrap;
}

.official-vaccination-records-3 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 411px;
  white-space: nowrap;
}

.terminal-4 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.gate-4 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.fingerprint-4 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 356px;
  width: 22px;
}

.history_edu-3 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 383px;
  width: 22px;
}

.vaccines-3 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 410px;
  width: 22px;
}

.mins-6 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 228px;
  white-space: nowrap;
}

.image-6-5 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 84px;
  width: 24px;
}

.cathay-beyond-5 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.text-6 {
  left: 318px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 206px;
}

.mins-7 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 280px;
  white-space: nowrap;
}

.rectangle-10-3 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 250px;
  width: 23px;
}

.rectangle-11-2 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 208px;
  width: 23px;
}

.text-7 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 258px;
}

.rectangle-13-3 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 316px;
  position: absolute;
  top: 253px;
  width: 32px;
}

.address-11 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 254px;
  white-space: nowrap;
}

.union-12 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 355px;
}

.union-13 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 721px;
  width: 355px;
}

.inflight-shopping-5 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 761px;
  white-space: nowrap;
}

.vectorclear-11 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 622px;
  width: 11px;
}

.vectorclear-12 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 762px;
  width: 11px;
}

.inflight-entertainment-3 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 610px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-3 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 633px;
  white-space: nowrap;
}

.rectangle-14-2 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 17px;
  width: 393px;
}

.overlap-group-6 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 7px #00000040;
  display: flex;
  flex-direction: column;
  left: 58px;
  min-height: 626px;
  padding: 23px 18px;
  position: absolute;
  top: 130px;
  width: 322px;
}

.what-catches-your-fancy-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 5px;
  margin-top: 3px;
  min-height: 19px;
  white-space: nowrap;
}

.type-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 5px;
  margin-top: 23px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group-container-12 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 258px;
}

.overlap-group13-2 {
  align-items: flex-end;
  background-color: var(--oracle);
  border-radius: 30px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  min-width: 80px;
  padding: 6px 2px;
}

.movies-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  text-align: center;
  white-space: nowrap;
  width: 75px;
}

.overlap-group11-2 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 100px;
}

.tv-shows-2 {
  left: 4px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 93px;
}

.rectangle-26-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100px;
}

.overlap-group6-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 66px;
}

.audio-2 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 61px;
}

.rectangle-27-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 66px;
}

.overlap-group-item-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 5px;
  margin-top: 28px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group-container-13 {
  align-items: flex-start;
  display: flex;
  gap: 5px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 251px;
}

.overlap-group9-2 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 83px;
}

.language-6 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 77px;
}

.rectangle-17-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 83px;
}

.overlap-group8-2 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 75px;
}

.language-7 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 70px;
}

.rectangle-20-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 75px;
}

.overlap-group5-3 {
  align-items: flex-end;
  background-color: var(--oracle);
  border-radius: 30px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  min-width: 83px;
  padding: 6px 2px;
}

.western-2 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  text-align: center;
  white-space: nowrap;
  width: 78px;
}

.overlap-group-container-14 {
  align-items: flex-start;
  display: flex;
  gap: 4px;
  margin-left: 5px;
  margin-top: 4px;
  min-width: 226px;
}

.overlap-group14-2 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 94px;
}

.language-8 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 89px;
}

.rectangle-22-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 94px;
}

.overlap-group3-4 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 128px;
}

.asian-cinema-2 {
  left: 4px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 121px;
}

.rectangle-23-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 128px;
}

.overlap-group-container-15 {
  align-items: flex-start;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 243px;
}

.overlap-group15-2 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 84px;
}

.comedy-2 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 79px;
}

.rectangle-28-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 84px;
}

.overlap-group16-2 {
  border-radius: 30px;
  height: 32px;
  margin-left: 7px;
  position: relative;
  width: 72px;
}

.action-2,
.horror-2 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 67px;
}

.rectangle-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 72px;
}

.overlap-group7-3 {
  border-radius: 30px;
  height: 32px;
  margin-left: 8px;
  position: relative;
  width: 72px;
}

.overlap-group-container-16 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 262px;
}

.overlap-group1-5 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 182px;
}

.halloween-favourites-2 {
  left: 6px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 172px;
}

.rectangle-24-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 182px;
}

.overlap-group10-2 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 74px;
}

.place-4 {
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 70px;
}

.rectangle-31-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 74px;
}

.overlap-group-container-17 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 229px;
}

.overlap-group4-4 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 99px;
}

.animation-2 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 93px;
}

.rectangle-32-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 99px;
}

.overlap-group2-4 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 124px;
}

.documentary-2 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 118px;
}

.rectangle-33-2 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 124px;
}

.overlap-group12-2 {
  align-items: center;
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 7px 4px #3d3d3d40;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  margin-top: 151px;
  min-width: 284px;
  padding: 0 62px;
}

.generate-2 {
  letter-spacing: -0.41px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  width: 159px;
}
</style>
