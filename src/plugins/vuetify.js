import Vue from 'vue';
import Vuetify, {
  VCard,
  VForm
} from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  components: {
    VCard,
    VForm
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
  },
});
