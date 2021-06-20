/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/1/24
 * Time: 21:35
 *
 * vue-i18n
 */

import {Context} from "@nuxt/types";

const Cookies = require("js-cookie");

// TODO：根据 Cookie 和后台设置切换语言
export default ({app, store, route, params, query, env, isDev, isHMR, redirect, error, $config}: Context) => {
  // const cookies = req && req.headers.cookie || '';
  // const cookiesLocale = cookies['locale'] || ''  // 新增
  // const defaultLocale = cookiesLocale || app.i18n.fallbackLocale  // 修改
  // store.commit('setLanguage', 'en-US');
  // app.i18n.locale = 'en-US';
}
