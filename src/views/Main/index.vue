
<template>
  <div class="g-ant">
    <use-sidebar></use-sidebar>
    <div class="u-mask"></div>
    <use-main></use-main>
  </div>

  <usr-setting></usr-setting>
</template>

<script>
import useSidebar from './useSidebar.vue'
import useMain from './useMain.vue'
import usrSetting from './usrSetting.vue'

export default {
  name: 'Home',
  components: {
    useSidebar,
    useMain,
    usrSetting
  },
}
</script>

<style>
</style>
