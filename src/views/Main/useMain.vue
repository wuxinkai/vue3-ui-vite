<template>
  <div class="g-ant__main">

    <use-header></use-header>
    <div class="g-ant-main__main">
      <keep-alive>
        <router-view v-if="route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!route.meta.keepAlive"></router-view>
    </div>


    <div class="g-ant-main__foot">
      <p>
        <a>Ant Design Pro</a>
        <a><i class="iconfont icon-github-fill"></i></a>
        <a >Ant Design</a>
      </p>
      <p>
        <i class="iconfont icon-user"></i> 底部固定样式
      </p>
    </div>
  </div>
</template>

<script>
import useHeader from './useHeader.vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    useHeader
  },
  setup() {
    const route = useRoute()
    return { route }
  }
}
</script>

<style>
</style>
