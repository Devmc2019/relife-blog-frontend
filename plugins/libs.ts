/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/6/20
 * Time: 16:31
 */

import Vue from 'vue'

const $libs = {
  install(Vue: any) {
    Vue.prototype.$libs = {

      /**
       * 判断对象是否含有某个键，并且有元素
       *
       * @param obj
       * @param childKey
       */
      hasChild(obj: any, childKey = 'child') {
        if (typeof obj != "object") return false;
        if (!obj.hasOwnProperty(childKey)) return false;
        return obj[childKey].length > 0;
      }


    };
  }
}
Vue.use($libs);
