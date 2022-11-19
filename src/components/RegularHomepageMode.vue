<template>
  <div class="container-center-horizontal">
    <select class="user_selector" name="user_selected" @change="switch_user_event($event)">
      <option value="Rebecca">Rebecca</option>
      <option value="Tiffany">Tiffany</option>
      <option value="Gemma">Gemma</option>
      <option value="Collin">Collin</option>
    </select>
    <input type="number" class="current_time_selector" name="current_time_selector" min="0" max="23" @change="switch_current_time($event)">
    <span class="current_time_display">Current time: {{ store.current_time }}</span>
    <div class="regular-homepage-mode screen">
      <status-bar :statusBar2Props="statusBarProps.statusBar2Props" />
      <div class="overlap-group">
        <img class="image-3" :src="image3" alt="image 3" />
        <div class="rectangle-4"></div>
        <div class="rectangle-5"></div>
        <img class="image-5" :src="image5" alt="image 5" />
        <div class="rectangle-6"></div>
        <router-link to="/mode-home3"> <div class="beyond-background"></div>
            <div class="cx501 sfprotext-light-white-12px">{{ store.flight_number }}</div> <!--Flight Number -->
            <div class="place sfprotext-light-white-12px">{{ store.place1 }}</div> <!--Starting Airport Code-->
            <div class="place-1 sfprotext-light-white-12px">{{ store.place2 }}</div><!--Destination Airport Code-->
            <div class="x1035am">{{ departure_time_short }}</div> <!-- Departure Time -->
            <h1 class="title sfprotext-thin-white-34px">{{ store.airport_code_1 }}</h1>
            <div class="hkg sfprotext-thin-white-34px">{{ store.airport_code_2 }}</div>
            <p class="your-flight-is-in-6 sfprotext-regular-normal-white-17px">
              <span class="sfprotext-regular-normal-white-17px">{{ time_remaining }}</span>
              <br>
              <span class="sfprotext-regular-normal-white-17px">{{ spanText2 }}</span>
            </p>
            <img
              class="vectorhold"
              src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vectorhold@2x.svg"
              alt="vectorhold"
            />
        </router-link>
        <div class="rectangle-7"></div>
        <div class="book-a-trip sfprotext-normal-oracle-17px">{{ bookATrip }}</div>
        <div class="surname sfprotext-regular-normal-oracle-17px">{{ greeting }}, {{ store.user }}</div>
        <div class="add-booking sfprotext-normal-oracle-17px">{{ addBooking }}</div>
        <home-indicator-white />
        <img
          class="vector-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/vector-1@2x.svg"
          alt="Vector 1"
        />
        <div class="rectangle-8"></div>
        <img
          class="line-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-1@2x.svg"
          alt="Line 1"
        />
        <img
          class="line-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/63788e94b2527424d3817e23/releases/63788ebdbce254c682469e28/img/line-2@2x.svg"
          alt="Line 2"
        />
        <img class="image-6" :src="image6" alt="image 6" />
      </div>
    </div>
  </div>
</template>

<script>
import StatusBar from "./StatusBar";
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
  name: "RegularHomepageMode",
  components: {
    StatusBar,
    HomeIndicatorWhite,
  },
  data() {
    return {
        store
    }
  },
  computed: {
        // display remaining time to flight depending on the current time
      time_remaining() {
        let dep_time = DateTime.fromFormat(store.departure_time, "HH:mmZZ")
        let cur_time = DateTime.fromFormat(store.current_time, "HH:mmZZ")
        let time_rem = dep_time.diff(cur_time, ['hours','minutes']).toObject()
        if(time_rem['hours'] < 1) {
            if(time_rem['minutes'] <= 0) {
                return "Welcome aboard!"
            }
            return "Your flight is in ".concat(pluralize("minute", time_rem['minutes'], true))
        } else {
            return "Your flight is in ".concat(pluralize("hour", time_rem['hours'], true))
        }
      },
      // dynamically change greeting depending on the time of day
      greeting() {
        let cur_time = DateTime.fromFormat(store.current_time, "HH:mmZZ")
        if(cur_time.hour < 12) {
            return "Good morning"
        } 
        if(cur_time.hour < 17) {
            return "Good afternoon"
        } 
        return "Good evening"
      },
      departure_time_short() {
        let dep_time = DateTime.fromFormat(store.departure_time, "HH:mmZZ")
        return dep_time.toFormat("hh:mma")
      }
  },
  methods: {
      switch_user_event(event) {
          this.switch_user(event.target.value)
      },
      switch_user(new_user) {

        // gets mock data from mock database, in reality this would come from Cathay user database
        store.user = new_user
        console.log(this.spanText1)
        let d = this.user_data[new_user]
        store.place1 = d["from"][0]
        store.place2 = d["to"][0]
        store.airport_code_1 = d["from"][1]
        store.airport_code_2 = d["to"][1]
        store.flight_number = d["flight_number"]
        store.departure_time = d["departure_time"]

        // These values would realistically be from dataset of various wait times of the outbound airport, in this mock they are randomized
        store.immigration_duration = getRandomInt(5,15)  
        store.bag_drop_duration = getRandomInt(5,15)
        store.security_duration = getRandomInt(5,15)

        // These values come from Cathay database/APIs
        store.terminal_number = getRandomInt(1,4)
        store.gate_number = getRandomInt(1,40)
        store.distance_to_gate = getRandomInt(1,4) * 5 
      },
      switch_current_time(event) {
        let hours = event.target.value
        store.current_time = hours.toString().padStart(2,"0").concat(":00+08:00") 
      }
  },
  mounted() {
   this.switch_user("Rebecca") 
   store.current_time = DateTime.now().toFormat("HH:mmZZ")
  },
  props: [
    "image3",
    "image5",
    "bookATrip",
    "spanText1",
    "spanText2",
    "addBooking",
    "image6",
    "statusBarProps",
    "user_data"
  ],
};
</script>

<style>
.current_time_selector {
    position: absolute;
    left: 0;
    top: 25px;
}

.current_time_display {
    position: absolute;
    left: 0;
    top: 50px;
}
.user_selector {
    position: absolute;
    left: 0;
    top: 0;
}

.regular-homepage-mode {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 852px;
  position: relative;
  width: 393px;
}

.overlap-group {
  height: 787px;
  position: relative;
  width: 393px;
}

.image-3 {
  height: 775px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 393px;
}

.rectangle-4 {
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 0.82) 36.5%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px none;
  height: 88px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 393px;
}

.rectangle-5 {
  background: linear-gradient(
    180deg,
    rgba(26.56, 26.56, 26.56, 0) 0%,
    rgba(14.53, 14.53, 14.53, 0.46) 45.31%,
    rgba(0, 0, 0, 0.71) 100%
  );
  border: 1px none;
  height: 199px;
  left: 0;
  position: absolute;
  top: 588px;
  width: 393px;
}

.image-5 {
  height: 35px;
  left: 181px;
  position: absolute;
  top: 0;
  width: 30px;
}

.rectangle-6 {
  background-color: var(--white);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 7px 4px #3d3d3d40;
  height: 50px;
  left: 16px;
  position: absolute;
  top: 602px;
  width: 360px;
}

.beyond-background {
  background-color: var(--oracle);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 4px #3d3d3d40;
  cursor: pointer;
  height: 138px;
  left: 16px;
  position: absolute;
  top: 450px;
  width: 360px;
}

.rectangle-7 {
  background-color: var(--white);
  border: 1px none;
  border-radius: 5px;
  box-shadow: 0px 4px 7px 4px #3d3d3d40;
  height: 50px;
  left: 16px;
  position: absolute;
  top: 663px;
  width: 360px;
}

.book-a-trip {
  left: 153px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 615px;
  white-space: nowrap;
}

.your-flight-is-in-6 {
  left: 38px;
  letter-spacing: -0.41px;
  line-height: 18.5px;
  position: absolute;
  top: 531px;
}

.cx501 {
  left: 179px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 486px;
  white-space: nowrap;
}

.place {
  left: 38px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 497px;
  white-space: nowrap;
}

.place-1 {
  left: 295px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 497px;
  white-space: nowrap;
}

.x1035am {
  color: var(--white);
  font-family: var(--font-family-sf_pro_text-thin);
  font-size: var(--font-size-m);
  font-weight: 100;
  left: 164px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 469px;
  white-space: nowrap;
}

.title {
  left: 38px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 475px;
  white-space: nowrap;
}

.hkg {
  left: 287px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 475px;
  white-space: nowrap;
}

.surname {
  left: 16px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  top: 68px;
  white-space: nowrap;
}

.add-booking {
  left: 146px;
  letter-spacing: -0.41px;
  line-height: 22px;
  position: absolute;
  text-align: center;
  top: 676px;
  white-space: nowrap;
}

.vector-1 {
  height: 11px;
  left: 186px;
  position: absolute;
  top: 738px;
  width: 19px;
}

.vectorhold {
  height: 19px;
  left: 344px;
  position: absolute;
  top: 547px;
  width: 11px;
}

.rectangle-8 {
  background-color: #7e6689;
  border: 1px none;
  border-radius: 2px;
  height: 13px;
  left: 18px;
  position: absolute;
  top: 90px;
  width: 28px;
}

.line-1 {
  height: 1px;
  left: 110px;
  object-fit: cover;
  position: absolute;
  top: 486px;
  width: 41px;
}

.line-2 {
  height: 1px;
  left: 240px;
  object-fit: cover;
  position: absolute;
  top: 486px;
  width: 39px;
}

.image-6 {
  height: 7px;
  left: 38px;
  position: absolute;
  top: 92px;
  width: 6px;
}
</style>
