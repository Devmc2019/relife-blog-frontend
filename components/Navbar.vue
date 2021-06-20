<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/5/16
 * Time: 22:41
 *
 * Navbar
 */
-->
<template>
  <div class="h-16 bg-white shadow flex items-center z-70 px-2
              sticky absolute top-0 left-0 right-0
              dark:bg-theme-dark
              sm:px-4 lg:px-6">

    <!-- Logo -->
    <nuxt-link to="/"
               :title="$t('title')"
               class="h-9 flex items-center flex-shrink-0
                      sm:h-10">
      <img class="h-9 w-9 inline
                  sm:h-10 sm:w-10"
           src="~/assets/img/logo-196.png"
           alt="">

      <span class="logo__title font-bold text-xl tracking-wide ml-1 text-gray-600
                   sm:ml-2 sm:text-2xl">
        {{ $t('appName') }}
      </span>
    </nuxt-link>


    <!-- 菜单、按钮 -->
    <div class="pl-5 h-full flex-grow">
      <!-- 菜单栏 -->
      <nav class="nav-wrapper pl-4 h-full relative
                  hidden md:inline-block">
        <nuxt-link v-for="(item, index) in navItem"
                   :key="index"
                   :to="item.route"
                   class="nav-item h-full relative px-2 font-bold text-gray-600
                          align-middle inline-flex-center"
                   :class="{
                     'active': getActiveNav(item.route, item.child),
                     'mr-2': !item.child.length
                   }">

          <!-- 图标 -->
          <web-font :src="item.icon" size="20" class="inline-block mr-0.5"></web-font>

          <!-- 文字 -->
          <span class="nav-item__title transform translate-y-0.5 transition-colors duration-200">
            {{ item.title }}
          </span>

          <!-- 下拉箭头 -->
          <web-font v-if="item.child.length"
                    src="navbar-arrow"
                    class="nav-item__arrow h-5 w-3 mr-0.5 transform translate-y-px
                           transition-colors duration-200 fill-current text-gray-600">
          </web-font>

          <!-- 下拉菜单 -->
          <nav v-if="item.child.length"
               class="nav-dropdown w-28 z-80 py-2.5 text-center rounded border-t-4 border-theme-color
                      bg-white dark:bg-theme-dark absolute left-1/2
                      transition-all duration-300 opacity-0 invisible">
            <!-- 子菜单 -->
            <nuxt-link v-for="(childItem, childIndex) in item.child"
                       :key="childIndex"
                       :to="childItem.route"
                       class="nav-dropdown__item h-8 flex-center mb-1 transition-colors duration-300"
                       :class="{ 'active': getActiveNav(childItem.route) }">
              <!-- 图标 -->
              <web-font :src="childItem.icon" size="20" class="inline-block"></web-font>

              <!-- 文字 -->
              <span class="transform translate-y-px ml-1 transition-colors duration-200">
                {{ childItem.title }}
              </span>
            </nuxt-link>
          </nav>
        </nuxt-link>
      </nav>

      <!-- 图标 -->
      <div class="float-right h-full inline-flex-center">
        <!-- 搜索 -->
        <div class="icon-button">
          <web-font src="navbar-search"></web-font>
        </div>
        <!-- 设置 -->
        <div class="icon-button">
          <web-font src="navbar-settings"></web-font>
        </div>
        <!-- 菜单 -->
        <div class="icon-button md:hidden!">
          <web-font src="navbar-menu"></web-font>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  props: {},
  data() {
    return {
      // 菜单栏
      navItem: [
        // 主页
        {
          title: this.$t('function.home'),
          route: '/',
          icon: 'navbar-home',
          child: []
        },
        // 文章
        {
          title: this.$t('function.article'),
          route: '',
          icon: 'navbar-article',
          child: [
            // 归档
            {
              title: this.$t('function.archives'),
              route: '/archives',
              icon: 'navbar-archives'
            },
            // 分类
            {
              title: this.$t('function.categories'),
              route: '/categories',
              icon: 'navbar-categories'
            },
            // 标签
            {
              title: this.$t('function.tags'),
              route: '/tags',
              icon: 'navbar-tags'
            }
          ]
        },
        // 随笔
        {
          title: this.$t('function.essay'),
          route: '/essay',
          icon: 'navbar-essay',
          child: []
        },
        // 我的
        {
          title: this.$t('function.mine'),
          route: '/about',
          icon: '',
          child: [
            // 关于
            {
              title: this.$t('function.about'),
              route: '/about',
              icon: '',
            },
            // 友人帐
            {
              title: this.$t('function.friends'),
              route: '/friends',
              icon: '',
            }
          ]
        },
        // 更多
        {
          title: this.$t('function.more'),
          route: '/more',
          icon: '',
          child: []
        }
      ]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    /**
     * 判断当前路由是否激活
     *
     * @param route
     * @param child
     */
    getActiveNav(route: string, child: Array<any> = []) {
      const fullPath = this.$route.fullPath;

      //if (fullPath.indexOf('/publish') != -1) return '/publish';
      // 路由
      let routeContains = false;
      routeContains = route == fullPath;

      // 子路由
      let childContains = false;
      if (child.length) {
        child.forEach((item) => {
          if (item.route == fullPath) childContains = true;
        });
      }

      return routeContains || childContains;
    }
  },
  watch: {}
});
</script>

<style lang="scss">
@media screen and (max-width: 300px) {
  .logo__title {
    display: none;
  }
}

@layer components {
  // 菜单栏
  .nav-wrapper {
    // 左边：divider
    &::before {
      content: "";
      @apply h-6 border-l;
      @apply absolute left-0 top-1/2;
      @apply transform -translate-y-1/2;
    }
  }

  // 菜单
  .nav-item {
    // 激活/悬停
    &.active,
    &:hover {
      // 改变文字颜色
      .nav-item__title,
      .nav-item__arrow {
        @apply text-theme-color;
      }

      // 显示下划线
      &::after {
        @apply opacity-100 scale-x-100;
      }
    }

    // 悬停
    &:hover {
      // 显示下拉菜单
      .nav-dropdown {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateX(-50%) perspective(600px) rotateX(0);
        transform: translateX(-50%) perspective(600px) rotateX(0);
      }
    }

    // 下划线
    &::after {
      content: "";
      @apply h-0.75;
      @apply bg-theme-color rounded-t-md;
      @apply absolute bottom-0 left-1.5 right-1.5;
      @apply transform transition duration-200 opacity-0 scale-x-25;
    }
  }

  // 下拉菜单
  .nav-dropdown {
    top: calc(4rem - 3px);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    transform-origin: top;
    transform: translateX(-50%) perspective(600px) rotateX(-45deg);

    // 三角形
    &::before {
      content: '';
      @apply w-0 h-0;
      @apply border-8 border-t-0 border-transparent;
      @apply absolute -top-2.5 left-1/2;
      @apply transform -translate-x-1/2;
      border-bottom-color: var(--theme-active-color);
    }
  }

  // 下拉菜单选项
  .nav-dropdown__item {
    // 激活/悬停
    &.active,
    &:hover {
      // 改变背景颜色
      @apply bg-theme-color-light dark:bg-transparent;

      // 改变文字颜色
      span {
        @apply text-theme-color;
      }
    }

    // 最后一个无 margin-bottom
    &:last-child {
      @apply mb-0;
    }
  }


  // 图标
  .icon-button {
    @apply w-8 h-8 p-1 ml-2;
    @apply inline-block cur-pointer;
    @apply md:ml-2.5 md:p-1.5 md:rounded-full;
    @apply md:bg-gray-100 md:hover:bg-theme-color-light;
    @apply md:dark:bg-theme-dark-light md:dark:hover:bg-theme-dark;
    @apply transition-colors duration-300;

    &:first-child {
      @apply ml-0;
    }
  }
}
</style>
