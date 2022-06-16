<template>
  <h1>{{ msg }}</h1>
  <button @click="handlClick">count is: {{ count }} ====={{countAddFive}}</button>
  <button @click="handlEmit">emit的用法</button>
  <p>页面内容</p>

  <span></span>

  <!-- 传送门 -->
  <Teleport to="#dailog">
    11111111111111111111111111111111111
    <OrderCancel ref="orderCancelCom" />
  </Teleport>
</template>

<script>
// 命令试渲染
// document.querySelector("span").innerHTML="6666"
import { h, ref, computed } from "vue";

// 声明试渲染 提高开发效率
export default {
  name: 'HelloWorld',
  props: {
    //类型
    msg: String
  },

  mounted() {
    console.log('拿到slots', this.$slots)
  },
  //  attrs, slots用法
  // setup(props, context) {
  //   const { attrs, slots, emit } = context
  //   console.log('context集合', attrs, slots, emit)
  //   console.log('attrs用法', attrs.app)
  //   console.log('slots用法', slots.default())
  //   console.log('emit用法', emit)
  //   return () => h('div', { style: { color: 'red' } }, slots.default())
  // },


// 一个页面只能有一个
  setup(props, context) {
    //emit 用法
    const { attrs, slots, emit } = context
    const handlEmit = () => {
      debugger
      emit('change', 123454)
    }

    const count = ref(0)
    const handlClick = () => {
      count.value += 1
    }

    const countAddFive = computed(() => {
      return count.value + 5
    })



    return { count, countAddFive, handlEmit, handlClick }
  }
}
</script>
