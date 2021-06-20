<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/6/19
 * Time: 13:21
 *
 * 错误视图
 */
-->
<template>
  <div class="container">
    <h1>页面不存在</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Context} from "@nuxt/types";

export default Vue.extend({
  components: {},
  middleware: [
    "i18n"
  ],
  layout: 'template',
  props: {
    'error': String
  },
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
