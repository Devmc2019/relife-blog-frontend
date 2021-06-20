<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/6/20
 * Time: 11:29
 *
 * 归档
 */
-->
<template>
  <div>
    归档
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Context} from "@nuxt/types";

export default Vue.extend({
  components: {},
  asyncData({app, store, route, params, query, env, isDev, isHMR, redirect, error,}: Context) {
    return {}
  },
  props: {},
  data() {
    return {}
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

</style>
