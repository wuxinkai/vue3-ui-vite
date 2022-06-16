<template>
  <div>
    <!-- 水水水水水 -->
    <button style="margin-right:20px" @click="handleMutationsClick">点击mutations切换</button> 
    <button @click="handleActionsClick">点击异步actions切换 等到3秒</button>
    <p>通过store:<span style="color:red">{{name}}</span></p>
  </div>
</template>

<script >

import { toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'vuex',
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state);
    const handleMutationsClick = () => {
      //mutations 执行
      store.commit('change', `你好 mutations！${Math.random()}`)
    }

    const handleActionsClick = () => {
      //Actions 执行
      store.dispatch('changeActions', `你好 Actions！${Math.random()}`)
    }

    return {
      name,
      handleMutationsClick,
      handleActionsClick
    };
  },
};
</script>
<style lang='less' scoped>
</style>