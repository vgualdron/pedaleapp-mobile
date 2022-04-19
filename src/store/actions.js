import authApi from "../api/auth/authApi";
import { Toast } from "native-base";

export default {
  async REGISTER_USER({ commit }, payload) {
    try {
      const response = await authApi.registerUser(payload);
      commit('SET_USER', response);
      console.log(response);
      Toast.show({
        text: `${response}`,
        buttonText: "Ok",
      });
    } catch (error) {
      console.error(error);
    }
  }
};
