import axios from "axios";
import { registerUser } from "../../helpers/firebase";

export default {
  fetchComic: ({ number }) => axios({
    url: `${process.env.VUE_APP_URL_API_COMICS}/${number}/info.0.json?number=${number}`,
    method: 'GET'
  }),
  registerUser: (object) => {
    return registerUser(object)
  },
};
