<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/8/3
 * Time: 14:55
 */
-->
<template>
  <div class="w-72 flex-shrink-0 relative">
    <div class="w-72 fixed">
          <span
            class="type-select__item"
            :class="{ 'active': showType == 'category' }"
            @click="changeTypeSelect('category')">
            分类
          </span>
      <span
        class="type-select__item"
        :class="{ 'active': showType == 'tag' }"
        @click="changeTypeSelect('tag')">
            标签
          </span>
    </div>

    <!-- 分类 -->
    <ul class="category-wrapper">
      <li v-for="(item, index) in typeDataList"
          :key="item.name"
          class="category__item"
          :class="{ 'active': item.name == showParams }">

        <div class="category__title">
          <a class="left"
             :href="getCategoryUrl(item.name)"
             @click.prevent="changeCategory(item.name)">

            <img :src="item.icon" alt="">

            <span>{{ item.name }}</span>
          </a>

          <!-- 下拉 -->
          <div v-if="$libs.hasChild(item)"
               class="right"
               @click="item.expand = !item.expand">
            <web-font src="index-arrow-down"></web-font>
          </div>
        </div>

        <!-- 子分类 -->
        <transition name="category-collapse">
          <ul class="category-wrapper__second" v-if="item.expand && $libs.hasChild(item)">
            <li v-for="(childItem, childIndex) in item.child"
                :key="childItem.name"
                class="category__item child"
                :class="{ 'active': childItem.name == showParams }">

              <!-- 标题 -->
              <div class="category__title">
                <a class="left"
                   :href="getCategoryUrl(childItem.name)"
                   @click.prevent="changeCategory(childItem.name)">
                  <img :src="childItem.icon" alt="">
                  <span>{{ childItem.name }}</span>
                </a>
              </div>

            </li>
          </ul>
        </transition>
      </li>
    </ul>
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
      /**
       * 类型
       *
       * //blog 全部博客
       * //collection 博客集合（文件夹）
       * category 分类
       * tag 标签
       */
      showType: 'category',
      /**
       * 参数
       */
      showParams: '',

      typeDataList: [
        {
          type: 'category',
          name: '全部分类',
          icon: require('~/static/icons/1.png'),
          id: 1,
          expand: true,
          child: []
        },
        {
          type: 'category',
          name: '当下不杂',
          icon: require('~/static/icons/2.png'),
          id: 2,
          expand: true,
          child: [
            {
              type: 'category',
              name: '随想',
              icon: require('~/static/icons/3.png'),
              id: 3,
              parent_id: 2
            },
            {
              type: 'category',
              name: '游戏',
              icon: require('~/static/icons/4.png'),
              id: 4,
              parent_id: 2
            }
          ]
        },
        {
          type: 'category',
          name: '格物致知',
          icon: require('~/static/icons/5.png'),
          id: 5,
          expand: true,
          child: [
            {
              type: 'category',
              name: '随想2',
              icon: require('~/static/icons/3.png'),
              id: 3,
              parent_id: 5
            },
          ]
        }
      ]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    changeCategory(name: string) {
      this.showParams = name;
      history.pushState(null, "", this.getCategoryUrl(name));
    },

    changeTypeSelect(type: string) {
      this.showType = type;
    },

    getCategoryUrl(name: String) {
      return this.$router.options.base + `category/${name}`;
    }
  },
  watch: {}
});
</script>

<style lang="scss">
@layer components {
  // 选择类型
  .type-select__item {
    @apply h-9 px-4 inline-block rounded-lg shadow-sm;
    @apply bg-white select-none tracking-wide leading-9 text-center cur-pointer;
    @apply dark:bg-theme-dark-light;

    &.active,
    &:hover {
      @apply transition-colors duration-300;
      @apply text-theme-color font-bold bg-theme-color-light
    }
  }

  // 分类
  .category-wrapper {
    height: calc(100% - 8rem);
    @apply w-72 mt-11 pb-4;
    @apply fixed overflow-y-auto;
  }

  // 二级分类
  .category-wrapper__second {
  }

  // 列表
  .category__item {
    // 二级列表
    &.child {
      @apply ml-6;

      // 标题
      .category__title {
        @apply h-10;
      }
    }
  }

  // 分类标题
  .category__title {
    @apply h-12 w-full mb-1 flex;
    @apply rounded-l-md;
    @apply transition-all duration-300;
    @apply cur-default #{!important};

    .left {
      @apply flex items-center flex-grow pl-6;
      @apply cur-pointer;
    }

    .right {
      @apply w-16 flex-center;
    }

    // 图标
    img {
      @apply w-6 h-6 rounded;
      @apply transition-all duration-300 filter grayscale;
    }

    // 文字
    span {
      @apply mt-px ml-2;
      @apply transition-all duration-300;
    }

    // svg
    svg {
      @apply w-7 h-7 p-0.75;
      @apply cur-pointer;
      @apply transition-all duration-300 transform;
    }
  }


  // 分类：激活/悬停
  .category__title:hover,
  .category__item.active > .category__title {
    @apply bg-white;
    box-shadow: 0 6px 10px 0 rgb(235, 235, 235);

    img {
      @apply grayscale-0;
      transform: translateX(-2px);
    }

    span {
      transform: translateX(-2px);
    }
  }

  // 分类：激活
  .category__item.expand {
    .category__title svg {
      @apply rotate-180;
    }
  }
}
</style>
<style lang="scss">
/*二级列表的出入动画*/
.category-collapse-enter-active,
.category-collapse-leave-active {
  transition: all .3s ease-in;
  height: 100%;
}

.category-collapse-enter,
.category-collapse-leave-to {
  height: 0;
  opacity: 0;
}
</style>
