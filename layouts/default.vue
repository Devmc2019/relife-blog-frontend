<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/6/18
 * Time: 9:27
 *
 * 默认视图
 */
-->
<template>
  <div class="min-h-screen
              dark:bg-theme-dark">

    <!-- navbar -->
    <navbar/>

    <!-- 页面 -->
    <nuxt/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Context} from "@nuxt/types";
import Navbar from "~/components/Navbar.vue";

export default Vue.extend({
  components: {Navbar},
  middleware: [
    "i18n"
  ],
  asyncData({app, store, route, params, query, env, isDev, isHMR, redirect, error}: Context) {
    return {}
  },
  props: {},
  data() {
    return {}
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
