import Vue from "vue";
import Router from "vue-router";
import RegularHomepageMode from "./components/RegularHomepageMode";
import ModeHome3 from "./components/ModeHome3";
import Flow5 from "./components/Flow5";
import Questionnaire4 from "./components/Questionnaire4";
import Flow6 from "./components/Flow6";
import Questionnaire1 from "./components/Questionnaire1";
import Questionnaire2 from "./components/Questionnaire2";
import Questionnaire5 from "./components/Questionnaire5";
import Questionnaire10 from "./components/Questionnaire10";
import Questionnaire6 from "./components/Questionnaire6";
import Questionnaire7 from "./components/Questionnaire7";
import Questionnaire8 from "./components/Questionnaire8";
import Questionnaire9 from "./components/Questionnaire9";
import Flow62 from "./components/Flow62";
import ModeHome1 from "./components/ModeHome1";
import ModeHome2 from "./components/ModeHome2";
import Flow2 from "./components/Flow2";
import Flow3 from "./components/Flow3";
import {
  regularHomepageModeData,
  modeHome3Data,
  flow5Data,
  questionnaire4Data,
  flow6Data,
  questionnaire1Data,
  questionnaire2Data,
  questionnaire5Data,
  questionnaire10Data,
  questionnaire6Data,
  questionnaire7Data,
  questionnaire8Data,
  questionnaire9Data,
  flow62Data,
  modeHome1Data,
  modeHome2Data,
  flow2Data,
  flow3Data
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/mode-home3",
      component: ModeHome3,
      props: { ...modeHome3Data },
    },
    {
      path: "/flow-5",
      component: Flow5,
      props: { ...flow5Data },
    },
    {
      path: "/questionnaire-4",
      component: Questionnaire4,
      props: { ...questionnaire4Data },
    },
    {
      path: "/flow-6",
      component: Flow6,
      props: { ...flow6Data },
    },
    {
      path: "/questionnaire-1",
      component: Questionnaire1,
      props: { ...questionnaire1Data },
    },
    {
      path: "/questionnaire-2",
      component: Questionnaire2,
      props: { ...questionnaire2Data },
    },
    {
      path: "/questionnaire-5",
      component: Questionnaire5,
      props: { ...questionnaire5Data },
    },
    {
      path: "/questionnaire-10",
      component: Questionnaire10,
      props: { ...questionnaire10Data },
    },
    {
      path: "/questionnaire-6",
      component: Questionnaire6,
      props: { ...questionnaire6Data },
    },
    {
      path: "/questionnaire-7",
      component: Questionnaire7,
      props: { ...questionnaire7Data },
    },
    {
      path: "/questionnaire-8",
      component: Questionnaire8,
      props: { ...questionnaire8Data },
    },
    {
      path: "/questionnaire-9",
      component: Questionnaire9,
      props: { ...questionnaire9Data },
    },
    {
      path: "/flow-7",
      component: Flow62,
      props: { statusBarProps: flow62Data.statusBarProps, homeIndicatorWhiteProps: flow62Data.homeIndicatorWhiteProps },
    },
    {
      path: "/mode-home1",
      component: ModeHome1,
      props: { ...modeHome1Data },
    },
    {
      path: "/mode-home2",
      component: ModeHome2,
      props: { ...modeHome2Data },
    },
    {
      path: "/flow-2",
      component: Flow2,
      props: { ...flow2Data },
    },
    {
      path: "/flow-3",
      component: Flow3,
      props: { ...flow3Data },
    },
    {
      path: "*",
      component: RegularHomepageMode,
      props: { ...regularHomepageModeData },
    },
  ],
});
