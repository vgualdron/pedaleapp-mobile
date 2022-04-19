<template>
  <root>
    <app-navigator v-if="isAppReady"> </app-navigator>
  </root>
</template>

<script>
import { createAppContainer, createStackNavigator } from "vue-native-router";

import { Root } from "native-base";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import Vuelidate from "vuelidate";

Vue.use(VueNativeBase);
Vue.use(Vuelidate);

import Login from "./src/views/Login.vue";
import Home from "./src/views/Home.vue";
import Detail from "./src/views/Detail.vue";

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Detail: Detail,
  },
  {
    initialRouteName: "Login",
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { Root, AppNavigator },
  data() {
    return {
      isAppReady: false,
    };
  },
  created() {
    this.loadFonts();
  },
  methods: {
    async loadFonts() {
      try {
        this.isAppReady = false;
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          ionicons: Ionicons.font["ionicons"],
        });
        this.isAppReady = true;
      } catch (error) {
        console.log("some error occured", error);
        this.isAppReady = true;
      }
    },
  },
};
</script>