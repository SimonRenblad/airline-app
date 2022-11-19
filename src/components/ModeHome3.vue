<template>
  <div class="container-center-horizontal">
    <div class="mode-home3 screen">
      <div class="overlap-group6">
        <status-bar-white :statusBar3Props="statusBarWhiteProps.statusBar3Props" />
        <div class="flex-row">
          <img class="image-6-1" :src="image6" alt="image 6" />
          <div class="cathay-beyond sfprotext-regular-normal-white-17px">
            <span class="sfprotext-regular-normal-white-17px">{{ spanText1 }}</span
            ><span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
          </div>
        </div>
        <div class="overlap-group-1">
          <div class="flex-row-1">
            <div class="nrt sfprotext-thin-white-34px">{{ store.airport_code_1 }}</div>
            <div class="overlap-group4">
              <div class="overlap-group2">
                <img
                  class="line-1-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1-1@2x.svg"
                  alt="Line 1"
                />
                <group1 />
                <div class="cx501-a321neo sfprotext-light-white-12px">{{ store.flight_number }} • A321neo</div>
              </div>
              <div class="x1035am-1 sfprotext-light-white-12px">{{ departure_time_short }}</div>
            </div>
            <div class="hkg-1 sfprotext-thin-white-34px">{{ store.airport_code_2 }}</div>
          </div>
          <div class="flex-row-2">
            <div class="x-container sfprotext-light-white-17px">
              <p class="baggage-drop">
                <span class="sfprotext-light-white-17px">{{ spanText3 }}</span
                ><span class="sfprotext-light-white-12px">{{ spanText4 }}</span
                ><span class="sfprotext-light-white-17px">{{ spanText5 }}</span>
              </p>
              <div class="security">{{ security }}</div>
              <div class="immigration">{{ immigration }}</div>
            </div>
            <div class="overlap-group1 sfprotext-lightitalic-light-white-17px">
              <div class="number valign-text-bottom">{{ store.bag_drop_duration }} mins</div>
              <div class="rectangle-10"></div>
              <div class="number-1 valign-text-bottom">{{ store.immigration_duration }} mins</div>
              <div class="rectangle-13"></div>
              <div class="address">{{ store.security_duration }} mins</div>
            </div>
          </div>
          <div class="flex-row-3">
            <div class="total sfprotext-medium-white-12px">{{ total }}</div>
            <div class="address-1 sfprotext-medium-sunglo-12px">{{ total_duration }} mins</div>
          </div>
          <div class="please-prepare sfprotext-regular-normal-white-12px">{{ pleasePrepare }}</div>
          <div class="flex-row-4">
            <img
              class="fingerprint"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/fingerprint-1@2x.svg"
              alt="fingerprint"
            />
            <div class="passport-and-identification sfprotext-regular-normal-white-12px">
              {{ passportAndIdentification }}
            </div>
          </div>
          <div class="flex-row-5">
            <img
              class="history_edu"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/history-edu-1@2x.svg"
              alt="history_edu"
            />
            <div class="negative-pcr-certification sfprotext-regular-normal-white-12px">
              {{ negativePcrCertification }}
            </div>
          </div>
          <div class="vaccin-container">
            <img
              class="vaccines"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/vaccines-1@2x.svg"
              alt="vaccines"
            />
            <div class="official-vaccination-records sfprotext-regular-normal-white-12px">
              {{ officialVaccinationRecords }}
            </div>
          </div>
          <div class="flex-row-6">
            <div class="terminal sfprotext-light-white-17px">{{ terminal }}</div>
            <div class="number-2 sfprotext-thinitalic-thin-white-34px">{{ store.terminal_number }}</div>
            <div class="overlap-group5">
              <div class="number-3 sfprotext-thinitalic-thin-white-34px">{{ store.gate_number }}</div>
              <div class="overlap-group3">
                <div class="address-2 sfprotext-regular-normal-white-12px">{{ store.distance_to_gate }} mins away</div>
                <div class="gate sfprotext-light-white-17px">{{ gate }}</div>
              </div>
            </div>
          </div>
          <div class="address-3 sfprotext-medium-white-12px">{{ time_remaining }} until boarding</div>
        </div>
        <div class="overlap-group7">
          <router-link to="/questionnaire-4">
              <img class="union" :src="union1" alt="Union" /><img class="union-1" :src="union2" alt="Union" />
              <div class="preview-inflight-entertainment sfprotext-normal-white-17px">
                {{ previewInflightEntertainment }}
              </div>
              <div class="inflight-shopping sfprotext-normal-white-17px">{{ inflightShopping1 }}</div>
              <img
                class="vectorclear"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
                alt="vectorclear"
              />
              <img class="union-2" :src="union3" alt="Union" />
              <div class="inflight-entertainment sfprotext-normal-white-17px">{{ inflightEntertainment }}</div>
              <div class="preselect-your-favourite-shows sfprotext-light-white-17px">{{ preselectYourFavouriteShows }}</div>
              <img
                class="vectorclear"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
                alt="vectorclear"
              />
          </router-link>
          <a href="https://lifestyle.asiamiles.com/en/campaign/inflightshopping">
              <img class="union-3" :src="union4" alt="Union" />
              <div class="inflight-shopping sfprotext-normal-white-17px">{{ inflightShopping2 }}</div>
              <img
                class="vectorclear-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
                alt="vectorclear"
              />
          </a>
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
import { store } from "../store.js";
import { DateTime } from "luxon";
var pluralize = require("pluralize");

// helper function for mock data
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  name: "ModeHome3",
  components: {
    StatusBarWhite,
    Group1,
    HomeIndicatorWhite,
  },
  data() {
      return {
        store
      }
  },
  mounted() {
        // These values would realistically be from dataset of various wait times of the outbound airport, in this mock they are randomized
        store.immigration_duration = getRandomInt(5,15)  
        store.bag_drop_duration = getRandomInt(5,15)
        store.security_duration = getRandomInt(5,15)

        // These values come from Cathay database/APIs
        store.terminal_number = getRandomInt(1,4)
        store.gate_number = getRandomInt(1,40)
        store.distance_to_gate = getRandomInt(1,4) * 5 
        console.log(store.current_time)
        if(store.current_time === "load") {
            console.log("setting new time")
            store.current_time = DateTime.now().toFormat("HH:mmZZ")
            console.log(store.current_time)
        }
  },
  computed: {
      departure_time_short() {
        let dep_time = DateTime.fromFormat(store.departure_time, "HH:mmZZ")
        return dep_time.toFormat("hh:mma")
      },
      total_duration() {
          return store.immigration_duration + store.security_duration + store.bag_drop_duration
      },
      time_remaining() {

        try {
            let dep_time = DateTime.fromFormat(store.departure_time, "HH:mmZZ")
            let cur_time = DateTime.fromFormat(store.current_time, "HH:mmZZ")
            let time_rem = dep_time.diff(cur_time, ['hours','minutes']).toObject()
            if(time_rem['hours'] < 1) {
                if(time_rem['minutes'] <= 0) {
                    return "0 minutes"
                }
                return pluralize("minute", time_rem['minutes'], true)
            } else {
                return pluralize("hour", time_rem['hours'], true)
            }
        } catch(error) {
            console.log("error computing time_remaining")
        }
      }
  },
  props: [
    "image6",
    "spanText1",
    "spanText2",
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
    "previewInflightEntertainment",
    "inflightShopping1",
    "union3",
    "union4",
    "inflightEntertainment",
    "preselectYourFavouriteShows",
    "inflightShopping2",
    "statusBarWhiteProps",
    "homeIndicatorWhiteProps",
  ],
};
</script>

<style>
.mode-home3 {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  height: 852px;
  overflow: hidden;
  width: 393px;
}

.overlap-group6 {
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

.flex-row {
  align-items: center;
  display: flex;
  gap: 9px;
  margin-right: 3px;
  margin-top: 20px;
  min-width: 151px;
}

.image-6-1 {
  height: 28px;
  width: 24px;
}

.cathay-beyond {
  letter-spacing: -0.41px;
  line-height: 18.5px;
  margin-top: 3px;
  min-height: 19px;
  min-width: 118px;
  white-space: nowrap;
}

.overlap-group-1 {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/6378c0fe9974d0023ddaf573/img/subtract-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-right: 4px;
  margin-top: 11px;
  min-height: 417px;
  padding: 18px 23px;
  width: 358px;
}

.flex-row-1 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  margin-top: 6px;
  min-width: 311px;
}

.nrt {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 66px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group4 {
  height: 44px;
  margin-left: 1px;
  position: relative;
  width: 165px;
}

.overlap-group2 {
  height: 36px;
  left: 0;
  position: absolute;
  top: 0;
  width: 165px;
}

.line-1-1 {
  height: 1px;
  left: 10px;
  object-fit: cover;
  position: absolute;
  top: 21px;
  width: 155px;
}

.cx501-a321neo {
  left: 43px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.x1035am-1 {
  left: 66px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 22px;
  white-space: nowrap;
}

.hkg-1 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 68px;
  text-align: center;
  white-space: nowrap;
}

.flex-row-2 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  margin-top: 38px;
  min-width: 311px;
}

.x-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 74px;
  width: 248px;
}

.baggage-drop,
.security,
.immigration,
.passport-and-identification {
  letter-spacing: -0.41px;
  line-height: 22px;
  white-space: nowrap;
}

.overlap-group1 {
  height: 74px;
  position: relative;
  width: 59px;
}

.mins {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.number {
  height: 22px;
  left: 2px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 0;
  white-space: nowrap;
}

.mins-1 {
  left: 22px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-10 {
  background-color: var(--william);
  border: 1px none;
  height: 21px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 23px;
}

.number-1 {
  height: 22px;
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 52px;
  white-space: nowrap;
}

.rectangle-13 {
  background-color: var(--william);
  border: 1px none;
  height: 29px;
  left: 0;
  position: absolute;
  top: 24px;
  width: 32px;
}

.address {
  left: 8px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: right;
  top: 26px;
  white-space: nowrap;
}

.flex-row-3 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 4px;
  height: 22px;
  min-width: 79px;
}

.total {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 31px;
  text-align: right;
  white-space: nowrap;
}

.address-1 {
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 44px;
  text-align: right;
  white-space: nowrap;
}

.please-prepare {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 1px;
  margin-top: 5px;
  white-space: nowrap;
}

.flex-row-4 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 171px;
}

.fingerprint,
.history_edu,
.vaccines {
  height: 22px;
  width: 22px;
}

.flex-row-5 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 23px;
  margin-left: 4px;
  margin-top: 5px;
  min-width: 171px;
}

.negative-pcr-certification {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 141px;
  white-space: nowrap;
}

.vaccin-container {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 24px;
  margin-left: 4px;
  margin-top: 4px;
  min-width: 178px;
}

.official-vaccination-records {
  align-self: flex-end;
  letter-spacing: -0.41px;
  line-height: 22px;
  min-width: 148px;
  white-space: nowrap;
}

.flex-row-6 {
  align-items: flex-start;
  display: flex;
  margin-left: 1px;
  margin-top: 13px;
  min-width: 248px;
}

.terminal {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-top: 5px;
  min-width: 65px;
  white-space: nowrap;
}

.number-2 {
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 11px;
  min-width: 15px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group5 {
  height: 47px;
  margin-left: 66px;
  position: relative;
  width: 91px;
}

.number-3 {
  left: 48px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 0;
  white-space: nowrap;
}

.overlap-group3 {
  height: 42px;
  left: 0;
  position: absolute;
  top: 5px;
  width: 88px;
}

.address-2 {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 20px;
  white-space: nowrap;
}

.gate {
  left: 0;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.address-3 {
  align-self: center;
  letter-spacing: -0.41px;
  line-height: 22px;
  margin-left: 3px;
  margin-top: 6px;
  min-width: 139px;
  text-align: center;
  white-space: nowrap;
}

.overlap-group7 {
  height: 284px;
  margin-right: 6px;
  margin-top: 1px;
  position: relative;
  width: 358px;
}

.union {
  height: 181px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 355px;
}

.union-1 {
  height: 101px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 355px;
}

.preview-inflight-entertainment {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 80px;
  white-space: nowrap;
}

.inflight-shopping {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 220px;
  white-space: nowrap;
}

.vectorclear {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 81px;
  width: 11px;
}

.vectorclear-1 {
  height: 19px;
  left: 317px;
  position: absolute;
  top: 221px;
  width: 11px;
}

.union-2 {
  height: 184px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 358px;
}

.union-3 {
  height: 104px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 180px;
  width: 358px;
}

.inflight-entertainment {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 69px;
  white-space: nowrap;
}

.preselect-your-favourite-shows {
  left: 30px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 92px;
  white-space: nowrap;
}
</style>
