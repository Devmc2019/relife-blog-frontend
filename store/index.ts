/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/6/18
 * Time: 9:24
 */

export const state = () => ({
  // 语言
  locale: 'zh-CN'
});


export const mutations = {
  /**
   * 设置语言
   *
   * @param state
   * @param locale
   */
  setLanguage: (state: any, locale: string) => {
    state.locale = locale;
  }
};

export const actions = {};
