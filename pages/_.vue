<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/5/16
 * Time: 22:23
 *
 * 主页
 */
-->
<template>
  <div class="page-index px-8 pt-4 bg-theme-bg dark:bg-theme-bg-dark">

    <div class="flex">
      <!-- 分类、标签 -->
      <index-left/>

      <!-- 占位 -->
      <index-middle :show-type="showType" :show-params="showParams"/>

      <!-- 信息 -->
      <index-right></index-right>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Context} from "@nuxt/types";
import Template from "~/layouts/template.vue";
import IndexLeft from "~/components/index/left.vue";
import IndexMiddle from "~/components/index/middle.vue";
import IndexRight from "~/components/index/right.vue";

/**
 * 获取路由内的参数，同时进行拦截
 *
 * @param route
 * @param error
 */
function getRouteParams(route: any, error: any) {
  const fullPath = route.fullPath;
  // 类型
  let showType = 'category';
  // 参数
  let showParams = '';
  // 匹配
  const matchBlog = fullPath == '/';
  // const matchCollection = fullPath.match(/^\/collection\/(.*?)$/i);
  const matchCategory = fullPath.match(/^\/category(\/(.*?))?$/i);
  const matchTag = fullPath.match(/^\/tag(\/(.*?))?$/i);

  // blog
  if (matchBlog) showType = 'category';
    // collection
    /*else if (matchCollection) {
      showType = 'collection';
      showParams = matchCollection[1];
    }*/
  // category
  else if (matchCategory) {
    showType = 'category';
    showParams = matchCategory[2] || '';
  }
  // tag
  else if (matchTag) {
    showType = 'tag';
    showParams = matchTag[2] || '';
  }
  // 404
  else {
    error({statusCode: 400});
  }

  showParams = '全部分类';

  return {
    showType,
    showParams
  }
}


export default Vue.extend({
  components: {
    IndexRight,
    IndexMiddle,
    IndexLeft,
    Template,
  },
  asyncData({app, store, route, params, query, env, isDev, isHMR, redirect, error}: Context) {
    return {
      // 获取路由内的参数，同时进行拦截
      ...getRouteParams(route, error)
    }
  },
  data() {
    return {

    }
  },
  head(this: any) {
    return {
      title: this.$t('title'),
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {

  },
  watch: {}
});
</script>

<style lang="scss">
</style>
