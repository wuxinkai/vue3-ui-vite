
<template>
  {{age}}
  <img src="../../assets/logo.png" />
  <div>
    <ul>
      <li v-for="(item,index) in users" :key="index">名字：{{ item.name }}===> {{ item.age }}岁===> 号码:{{ item.id }}</li>
    </ul>

  </div>
  <HelloWorld msg="组件传递内容" app="子页面的attr能拿到这个数据" @change="getChange">
    <div>在子页面slots可以拿到</div>
  </HelloWorld>
  <modal-block></modal-block>
</template>

<script>
import { ref, reactive, readonly, toRefs, toRef, computed, watchEffect, watch, provide } from "vue";
import HelloWorld from '../../components/HelloWorld.vue'
import modalBlock from '../../components/HodalBlock.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    modalBlock
  },
  methods: {
    //获取点击的参数
    getChange(item) {
      alert(`子页面发给父页面显示${item}`)
    }
  },
  mounted() {
    console.log(this.$options.setup())
  },
  setup(props, context) {
    // console.log(props, context)

    //基础数据
    let users = reactive([
      { name: '梅西', age: 34, hobby: '足球12345', id: 1 },
      { name: 'C罗', age: 13, hobby: '篮球', id: 2 },
      { name: '内马尔', age: 44, hobby: '排球', id: 3 },
    ])
    //设置最大值
    let _id = Math.max(...users.map(item => item.id)) + 1 //最新id

    let member = { name: '吴磊', age: 22, hobby: '排球' }
    //新增并添加号码
    users.push({ ...member, id: _id })

    users = users.filter(item => item.id != 1)

    let flag1 = users.every(v => v.id == 1) //全部满足才是true
    let flag2 = users.some(v => v.id == 2) //全部满足才是true
    console.log(flag1, flag2);

    // sarchData(() => {
    //   return users.filter(item => item.name.indexOf(input.value) != 1)
    // })
    // sarchData

    //不能被修改，只读属性
    // let copyNameObj = readonly({ name: '吴磊', age: 22, hobby: '排球' })
    // setTimeout(() => {
    //   copyNameObj.name = '吴谨言'
    // }, 2000);


    //给没有的对象属性怎么响应式功能
    const data22 = reactive({ name: 'dell' })
    const age = toRef(data22, 'age')
    setTimeout(() => {
      age.value = 'lee'
    }, 3000)


    // 点击子组件修改父组件
    const name01 = ref('父页面的值')
    provide('chuandi_name', readonly(name01))
    provide('changeName', (val) => {
      name01.value = val
    })
    return {
      users,
      age,
    }
  }
}
</script>

<style>

</style>
