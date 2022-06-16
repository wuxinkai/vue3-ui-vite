<template>
  <input :value="inputValue" @input="handleInputValueChang" />
  <button @click="()=>addItemToList(inputValue)">提交</button>

  <ul>
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
  <div>
    <button @click="handlNameClick">传递参数</button>
    <div>{{parent_name}}</div>
  </div>

  <div>
      <div ref="helloDom">加油</div>
  </div>
</template>

<script>
import { reactive, ref, watch, watchEffect, inject, onMounted } from 'vue'
//关于 list 操作的内容进行封装
const listRalativeEffect = () => {
  const list = reactive([])
  const addItemToList = (item) => {
    list.push(item)
  }
  return { list, addItemToList }
}
//关于 input value的内容封装操作
const inputRalativeEffect = () => {
  const inputValue = ref('')
  const handleInputValueChang = (e) => {
    inputValue.value = e.target.value
  }
  return { inputValue, handleInputValueChang }
}

export default {
  name: 'HodalBlock',
  setup(props, context) {
    const { list, addItemToList } = listRalativeEffect()
    const { inputValue, handleInputValueChang } = inputRalativeEffect()


    //监听数据
    watch([inputValue, list], (newData, oldData) => {
      console.log(`监听数据变化666`, newData, oldData);
    })

    //获取父页面值绑定到页面
    const parent_name = inject('chuandi_name')

    //接收父页面事件

    const changeName = inject('changeName')
    const handlNameClick = () => {
      changeName('父页面的值被改变')
    }

    //获取dom
    const helloDom = ref(null)
    
    onMounted(() => {
      console.log('加油',helloDom.value)
    })

    return {
      list, addItemToList, inputValue, handleInputValueChang
      , handlNameClick,
      parent_name,
      helloDom
    }
  }
}
</script>
