<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/6/20
 * Time: 11:40
 *
 * 标签
 */
-->
<template>
  <div>

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
