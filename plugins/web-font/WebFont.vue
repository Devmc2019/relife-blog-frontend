<!--
/**
 * Created by PhpStorm.
 * User: Devmc
 * Date: 2021/1/25
 * Time: 15:44
 */
-->
<template>
  <component
    v-if="src"
    :is="option"
    class="web-font"
    :class="`size-${size}`">
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    // 资源
    src: String,
    // 大小：16 24 32
    size: String
  },
  computed: {
    option(): object {
      return require('./icons/' + this.src + '.vue').default;
    }
  }
});
</script>

<style lang="scss">
.web-font {
  // 大小
  &.size {
    &-16 {
      width: 1em;
      height: 1em;
    }

    &-20 {
      width: 1.25em;
      height: 1.25em;
    }

    &-24 {
      width: 1.5em;
      height: 1.5em;
    }

    &-32 {
      width: 2em;
      height: 2em;
    }
  }
}
</style>
