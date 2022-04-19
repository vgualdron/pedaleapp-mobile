<template>
  <scroll-view
    :content-container-style="{
      contentContainer: {
        paddingVertical: 120,
      },
    }"
  >
    <container>
      <image
        slot="top"
        :style="{
          height: 340,
          width: 340,
          alignContent: 'center',
          borderWidth: 1,
        }"
        :source="require('../assets/img/icon.png')"
      />
      <nb-content padder slot="middle">
        <nb-form>
          <nb-item
            :error="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
          >
            <nb-input
              placeholder="Email"
              v-model="email"
              auto-capitalize="none"
              :on-blur="() => $v.email.$touch()"
            />
          </nb-item>
          <nb-item last :error="!$v.password.required && $v.password.$dirty">
            <nb-input
              placeholder="Password"
              v-model="password"
              auto-capitalize="none"
              secure-text-entry
              :on-blur="() => $v.password.$touch()"
            />
          </nb-item>
        </nb-form>
        <view :style="{ marginTop: 10 }">
          <nb-button block :on-press="login" class="btn">
            <!-- <nb-spinner v-if="logging" size="small" /> -->
            <nb-text>Iniciar sesión</nb-text>
          </nb-button>
        </view>
      </nb-content>
    </container>
  </scroll-view>
</template>

<script>
import Container from "../components/containers/Container.vue";
import { required, email } from "vuelidate/lib/validators";
// import { Dimensions, Platform, AsyncStorage } from "react-native";
import store from '../store';
export default {
  data: function () {
    return {
      email: "",
      password: "",
      logging: true,
    };
  },
  props: {
    navigation: {
      Object,
    },
  },
  components: { Container },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  computed: {
    userData () {
      return store.state.user;
    }
  },
  methods: {
    async login() {
      await store.dispatch('REGISTER_USER', {
        email: this.email,
        password: this.password
      });
      
    },
  },
};
</script>