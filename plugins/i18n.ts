/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/1/24
 * Time: 21:04
 *
 * vue-i18n
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {Context} from "@nuxt/types";

Vue.use(VueI18n);

export default ({app, store}: Context) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    // 现在展示的语言
    locale: store.state.locale,
    // 默认语言
    fallbackLocale: 'zh-CN',
    messages: {
      'zh-CN': require('~/locales/zh-CN.json'),
      'en-US': require('~/locales/en-US.json')
    }
  });
};
