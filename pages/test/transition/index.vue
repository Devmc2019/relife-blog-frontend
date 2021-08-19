<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/8/19
 * Time: 22:15
 */
-->
<template>
  <div class="w-88 bg-pink-200 flex-shrink-0">
    <button v-on:click="show = !show">
      Toggle
    </button>

    <transition name="collapse">
      <div class="w-20 h-20 bg-blue-200" v-if="show"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Context} from "@nuxt/types";

export default Vue.extend({
  components: {},
  asyncData({app, store, route, params, query, env, isDev, isHMR, redirect, error}: Context) {
    return {}
  },
  props: {},
  data() {
    return {
      show: true
    }
  },
  head(this: any) {
    return {
      title: '',
      meta: [
        {hid: '', name: '', content: ''},
      ]
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {},
  watch: {}
});
</script>

<style lang="scss">

.collapse-enter {
  height: 0 !important;
}

.collapse-enter-active {
  height: 80px;
  transition: all .3s ease-out;
}

.collapse-leave {
  height: 80px;
}

.collapse-leave-active {
  height: 0 !important;
  transition: all .3s ease-out;
}


.fade-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.fade-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease;
}

.fade-leave-active {
  transform: translateX(100%);
  transition: all 1s ease;
}

.fade-leave {
  transform: translateX(0);
}
</style>
