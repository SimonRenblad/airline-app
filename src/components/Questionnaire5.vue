<template>
  <div class="container-center-horizontal">
    <div class="questionnaire-5 screen">
      <div class="overlap-group17-3">
        <img
          class="subtract-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-9@2x.svg"
          alt="Subtract"
        />
        <div class="nrt-4 sfprotext-thin-white-34px">{{ nrt }}</div>
        <div class="number-12 sfprotext-thinitalic-thin-white-34px">{{ number1 }}</div>
        <div class="number-13 sfprotext-thinitalic-thin-white-34px">{{ number2 }}</div>
        <div class="hkg-6 sfprotext-thin-white-34px">{{ hkg }}</div>
        <img
          class="line-1-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
          alt="Line 1"
        />
        <div class="cx501-4 sfprotext-light-white-12px">{{ cx501 }}</div>
        <div class="x1035am-5 sfprotext-light-white-12px">{{ x1035Am }}</div>
        <p class="baggage-drop-4 sfprotext-light-white-17px">
          <span class="sfprotext-light-white-17px">{{ spanText1 }}</span
          ><span class="sfprotext-light-white-12px">{{ spanText2 }}</span
          ><span class="sfprotext-light-white-17px">{{ spanText3 }}</span>
        </p>
        <div class="security-5 sfprotext-light-white-17px">{{ security }}</div>
        <div class="immigration-4 sfprotext-light-white-17px">{{ immigration }}</div>
        <div class="please-prepare-5 sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
        <div class="passport-and-identification-5 sfprotext-regular-normal-white-12px">
          {{ passportAndIdentification }}
        </div>
        <div class="negative-pcr-certification-4 sfprotext-regular-normal-white-12px">
          {{ negativePcrCertification }}
        </div>
        <div class="official-vaccination-records-4 sfprotext-regular-normal-white-12px">
          {{ officialVaccinationRecords }}
        </div>
        <div class="terminal-5 sfprotext-light-white-17px">{{ terminal }}</div>
        <div class="gate-5 sfprotext-light-white-17px">{{ gate }}</div>
        <group1 :className="statusBarWhiteProps.className" />
        <img
          class="fingerprint-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-9@2x.svg"
          alt="fingerprint"
        />
        <img
          class="history_edu-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-8@2x.svg"
          alt="history_edu"
        />
        <img
          class="vaccines-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-8@2x.svg"
          alt="vaccines"
        />
        <div class="mins-8 sfprotext-lightitalic-light-white-17px">{{ mins1 }}</div>
        <div class="text-8 sfprotext-lightitalic-light-white-17px" v-html="text17"></div>
        <div class="mins-9 sfprotext-lightitalic-light-white-17px">{{ mins2 }}</div>
        <img class="image-7-1" :src="image7" alt="image 7" />
        <div class="cathay-beyond-6 sfprotext-regular-normal-white-17px">
          <span class="sfprotext-regular-normal-white-17px">{{ spanText4 }}</span
          ><span class="sfprotext-regular-normal-white-17px">{{ spanText5 }}</span>
        </div>
        <div class="rectangle-10-4"></div>
        <div class="rectangle-11-3"></div>
        <div class="text-9 sfprotext-lightitalic-light-white-17px" v-html="text18"></div>
        <div class="rectangle-13-4"></div>
        <div class="address-12 sfprotext-lightitalic-light-white-17px">{{ address }}</div>
        <img class="union-14" :src="union1" alt="Union" /><img class="union-15" :src="union2" alt="Union" />
        <div class="inflight-shopping-6 sfprotext-normal-white-17px">{{ inflightShopping }}</div>
        <img
          class="vectorclear-13"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <img
          class="vectorclear-14"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
          alt="vectorclear"
        />
        <div class="inflight-entertainment-4 sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
        <div class="preselect-your-favourite-shows-4 sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
        <div class="rectangle-14-3"></div>
        <home-indicator-white :className="homeIndicatorWhiteProps.className" />
        <status-bar-white
          :className="statusBarWhiteProps2.className"
          :statusBar3Props="statusBarWhiteProps2.statusBar3Props"
        />
        <div class="overlap-group-7">
          <div class="what-catches-your-fancy-3 sfprotext-normal-oracle-17px">{{ whatCatchesYourFancy }}</div>
          <div class="type-3 sfprotext-regular-normal-oracle-17px">{{ type }}</div>
          <div class="overlap-group-container-18">
            <div class="overlap-group7-4">
              <div class="movies-3 sfprotext-light-white-17px">{{ movies }}</div>
            </div>
            <div class="overlap-group3-5">
              <div class="tv-shows-3 sfprotext-light-oracle-17px">{{ tvShows }}</div>
              <div class="rectangle-26-3"></div>
            </div>
            <div class="overlap-group14-3">
              <div class="audio-3 sfprotext-light-oracle-17px">{{ audio }}</div>
              <div class="rectangle-27-3"></div>
            </div>
          </div>
          <div class="overlap-group-item-3 sfprotext-regular-normal-oracle-17px">{{ production }}</div>
          <div class="overlap-group-container-19">
            <div class="overlap-group9-3">
              <div class="language-9 sfprotext-light-oracle-17px">{{ language1 }}</div>
              <div class="rectangle-17-3"></div>
            </div>
            <div class="overlap-group12-3">
              <div class="language-10 sfprotext-light-oracle-17px">{{ language2 }}</div>
              <div class="rectangle-20-3"></div>
            </div>
            <div class="overlap-group4-5">
              <div class="western-3 sfprotext-light-white-17px">{{ western }}</div>
            </div>
          </div>
          <div class="overlap-group-container-20">
            <div class="overlap-group11-3">
              <div class="language-11 sfprotext-light-oracle-17px">{{ language3 }}</div>
              <div class="rectangle-22-3"></div>
            </div>
            <div class="overlap-group8-3">
              <div class="asian-cinema-3 sfprotext-light-oracle-17px">{{ asianCinema }}</div>
              <div class="rectangle-23-3"></div>
            </div>
          </div>
          <div class="overlap-group-item-3 sfprotext-regular-normal-oracle-17px">{{ genre }}</div>
          <div class="overlap-group-container-21">
            <div class="overlap-group1-6">
              <div class="comedy-3 sfprotext-light-oracle-17px">{{ comedy }}</div>
              <div class="rectangle-28-3"></div>
            </div>
            <div class="overlap-group6-4">
              <div class="action-3 sfprotext-light-oracle-17px">{{ action }}</div>
              <div class="rectangle-3"></div>
            </div>
            <div class="overlap-group16-3">
              <div class="horror-3 sfprotext-light-oracle-17px">{{ horror }}</div>
              <div class="rectangle-3"></div>
            </div>
          </div>
          <div class="overlap-group-container-22">
            <div class="overlap-group2-5">
              <div class="halloween-favourites-3 sfprotext-light-oracle-17px">{{ halloweenFavourites }}</div>
              <div class="rectangle-24-3"></div>
            </div>
            <div class="overlap-group13-3">
              <div class="place-5 sfprotext-light-white-17px">{{ place }}</div>
            </div>
          </div>
          <div class="overlap-group-container-23">
            <div class="overlap-group10-3">
              <div class="animation-3 sfprotext-light-oracle-17px">{{ animation }}</div>
              <div class="rectangle-32-3"></div>
            </div>
            <div class="overlap-group5-4">
              <div class="documentary-3 sfprotext-light-oracle-17px">{{ documentary }}</div>
              <div class="rectangle-33-3"></div>
            </div>
          </div>
          <div class="overlap-group15-3">
            <div class="generate-3 sfprotext-normal-white-17px">{{ generate }}</div>
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
  name: "Questionnaire5",
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
    "text17",
    "mins2",
    "image7",
    "spanText4",
    "spanText5",
    "text18",
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
.questionnaire-5 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group17-3 {
  background-color: var(--oracle);
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  height: 887px;
  margin-left: -23px;
  margin-top: -17px;
  position: relative;
  width: 442px;
}

.subtract-4 {
  height: 414px;
  left: 40px;
  position: absolute;
  top: 123px;
  width: 355px;
}

.nrt-4 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 157px;
  white-space: nowrap;
}

.number-12 {
  left: 140px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 479px;
  white-space: nowrap;
}

.number-13 {
  left: 269px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 479px;
  white-space: nowrap;
}

.hkg-6 {
  left: 307px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 157px;
  white-space: nowrap;
}

.line-1-6 {
  height: 1px;
  left: 141px;
  object-fit: cover;
  position: absolute;
  top: 168px;
  width: 155px;
}

.cx501-4 {
  left: 203px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 146px;
  white-space: nowrap;
}

.x1035am-5 {
  left: 197px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 168px;
  white-space: nowrap;
}

.baggage-drop-4 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 228px;
  white-space: nowrap;
}

.security-5 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 254px;
  white-space: nowrap;
}

.immigration-4 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 280px;
  white-space: nowrap;
}

.please-prepare-5 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 329px;
  white-space: nowrap;
}

.passport-and-identification-5 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 355px;
  white-space: nowrap;
}

.negative-pcr-certification-4 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 383px;
  white-space: nowrap;
}

.official-vaccination-records-4 {
  left: 97px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 411px;
  white-space: nowrap;
}

.terminal-5 {
  left: 64px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.gate-5 {
  left: 221px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 484px;
  white-space: nowrap;
}

.fingerprint-5 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 356px;
  width: 22px;
}

.history_edu-4 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 383px;
  width: 22px;
}

.vaccines-4 {
  height: 22px;
  left: 67px;
  position: absolute;
  top: 410px;
  width: 22px;
}

.mins-8 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 228px;
  white-space: nowrap;
}

.text-8 {
  left: 318px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 206px;
}

.mins-9 {
  left: 338px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 280px;
  white-space: nowrap;
}

.image-7-1 {
  height: 28px;
  left: 144px;
  position: absolute;
  top: 84px;
  width: 24px;
}

.cathay-beyond-6 {
  left: 177px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 90px;
  white-space: nowrap;
}

.rectangle-10-4 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 250px;
  width: 23px;
}

.rectangle-11-3 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 316px;
  position: absolute;
  top: 208px;
  width: 23px;
}

.text-9 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 258px;
}

.rectangle-13-4 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 316px;
  position: absolute;
  top: 253px;
  width: 32px;
}

.address-12 {
  left: 324px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 254px;
  white-space: nowrap;
}

.union-14 {
  height: 181px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 541px;
  width: 355px;
}

.union-15 {
  height: 101px;
  left: 39px;
  object-fit: cover;
  position: absolute;
  top: 721px;
  width: 355px;
}

.inflight-shopping-6 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 761px;
  white-space: nowrap;
}

.vectorclear-13 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 622px;
  width: 11px;
}

.vectorclear-14 {
  height: 19px;
  left: 356px;
  position: absolute;
  top: 762px;
  width: 11px;
}

.inflight-entertainment-4 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 610px;
  white-space: nowrap;
}

.preselect-your-favourite-shows-4 {
  left: 69px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 633px;
  white-space: nowrap;
}

.rectangle-14-3 {
  background-color: var(--cod-gray);
  border: 1px none;
  height: 852px;
  left: 23px;
  opacity: 0.55;
  position: absolute;
  top: 17px;
  width: 393px;
}

.overlap-group-7 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0px 4px 7px #00000040;
  display: flex;
  flex-direction: column;
  left: 60px;
  min-height: 626px;
  padding: 23px 18px;
  position: absolute;
  top: 130px;
  width: 322px;
}

.what-catches-your-fancy-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 5px;
  margin-top: 3px;
  min-height: 19px;
  white-space: nowrap;
}

.type-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 5px;
  margin-top: 23px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group-container-18 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 258px;
}

.overlap-group7-4 {
  align-items: flex-end;
  background-color: var(--oracle);
  border-radius: 30px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  min-width: 80px;
  padding: 6px 2px;
}

.movies-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  text-align: center;
  white-space: nowrap;
  width: 75px;
}

.overlap-group3-5 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 100px;
}

.tv-shows-3 {
  left: 4px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 93px;
}

.rectangle-26-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100px;
}

.overlap-group14-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 66px;
}

.audio-3 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 61px;
}

.rectangle-27-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 66px;
}

.overlap-group-item-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-left: 5px;
  margin-top: 28px;
  min-height: 19px;
  white-space: nowrap;
}

.overlap-group-container-19 {
  align-items: flex-start;
  display: flex;
  gap: 5px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 251px;
}

.overlap-group9-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 83px;
}

.language-9 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 77px;
}

.rectangle-17-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 83px;
}

.overlap-group12-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 75px;
}

.language-10 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 70px;
}

.rectangle-20-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 75px;
}

.overlap-group4-5 {
  align-items: flex-end;
  background-color: var(--oracle);
  border-radius: 30px;
  display: flex;
  height: 32px;
  justify-content: flex-end;
  min-width: 83px;
  padding: 6px 2px;
}

.western-3 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  text-align: center;
  white-space: nowrap;
  width: 78px;
}

.overlap-group-container-20 {
  align-items: flex-start;
  display: flex;
  gap: 4px;
  margin-left: 5px;
  margin-top: 4px;
  min-width: 226px;
}

.overlap-group11-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 94px;
}

.language-11 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 89px;
}

.rectangle-22-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 94px;
}

.overlap-group8-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 128px;
}

.asian-cinema-3 {
  left: 4px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 121px;
}

.rectangle-23-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 128px;
}

.overlap-group-container-21 {
  align-items: flex-start;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 243px;
}

.overlap-group1-6 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 84px;
}

.comedy-3 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 79px;
}

.rectangle-28-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 84px;
}

.overlap-group6-4 {
  border-radius: 30px;
  height: 32px;
  margin-left: 7px;
  position: relative;
  width: 72px;
}

.action-3,
.horror-3 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 67px;
}

.rectangle-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 72px;
}

.overlap-group16-3 {
  border-radius: 30px;
  height: 32px;
  margin-left: 8px;
  position: relative;
  width: 72px;
}

.overlap-group-container-22 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 262px;
}

.overlap-group2-5 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 182px;
}

.halloween-favourites-3 {
  left: 6px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 172px;
}

.rectangle-24-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 182px;
}

.overlap-group13-3 {
  align-items: flex-end;
  background-color: var(--oracle);
  border-radius: 30px;
  display: flex;
  height: 32px;
  min-width: 74px;
  padding: 6px 2px;
}

.place-5 {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  min-height: 19px;
  text-align: center;
  white-space: nowrap;
  width: 70px;
}

.overlap-group-container-23 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  margin-left: 5px;
  margin-top: 5px;
  min-width: 229px;
}

.overlap-group10-3 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 99px;
}

.animation-3 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 93px;
}

.rectangle-32-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 99px;
}

.overlap-group5-4 {
  border-radius: 30px;
  height: 32px;
  position: relative;
  width: 124px;
}

.documentary-3 {
  left: 3px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  text-align: center;
  top: 7px;
  white-space: nowrap;
  width: 118px;
}

.rectangle-33-3 {
  border: 1px solid;
  border-color: var(--oracle);
  border-radius: 30px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 124px;
}

.overlap-group15-3 {
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

.generate-3 {
  letter-spacing: -0.41px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  width: 159px;
}
</style>
