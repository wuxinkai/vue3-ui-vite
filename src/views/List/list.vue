<template>
  <ul class="tab">
    <li v-for="(item,index) in tablist" :key="index" @click="()=>{getTabItem(item)}" :class="{current:item.id==curItem}">{{item.name}}</li>

  </ul>
  <div class="content">
    <ul class="listAll">
      <li class="item" v-for="(item,index) in list" :key="index">
        <div class="item-left">
          <span> {{item.id}}</span>
          <span> {{item.name}}</span>
          <span> {{item.oldPrice}}</span>
          <span> {{item.price}}</span>
          <span> {{item.sales}}</span>
          <span> {{item.count}}</span>
        </div>
        <img :src="item.imgurl" alt="">

        <div class="item-right">
          <i @click="()=>{changeCartItemInfo(shopId,item.id,item,-1)}">-</i>
          <span>{{cartList?.[shopId]?.[item.id]?.count||0}}</span>
          <i @click="()=>{changeCartItemInfo(shopId,item.id,item,1)}">+</i>
        </div>
      </li>
    </ul>
    <!-- ---------- -->
    <settlement></settlement>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import settlement from './components/settlement.vue'
import { reactive, ref, toRefs, watchEffect } from "vue";
import axios from 'axios'
import { useStore } from 'vuex';
const categories = [
  { name: '全部秒杀', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' },
]

//点击table页面切换事件
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

//列表相关内容的逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })

  const getContentData = async () => {
    const result = await axios.get(`https://www.fastmock.site/mock/9d12c14426b750d73d484c14876cc29f/vue3/carList?id=${shopId}`)
    if (result) {
      content.list = result.data.data.list.data
    }
  }
  //监听数据 获取数据
  watchEffect(() => { getContentData(content) })
  // reactive 和 toRefs 可以形成，异步等待
  const { list } = toRefs(content)
  return { list }
}

//购物车  获取uex 的数据 vue3dome1\src\stores\store.js
const useCartEffect = () => {
  const store = useStore()

  //（2）购物车增加内容
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {

    store.commit('changeItemToVuex', { shopId, productId, productInfo, num })
  }
  const { cartList } = store.state
  return { cartList, changeCartItemInfo }
}

//点击切换tab
const usetabsEffect = () => {
  const curItem = ref('')
  const tablist = reactive([
    { id: 1, name: "物美" },
    { id: 2, name: "家乐福" },
    { id: 3, name: "沃尔玛" },
    { id: 4, name: "永辉" },
  ])
  //点击切换事件
  const getTabItem = (item) => {
    curItem.value = item.id
  }

  return { curItem, tablist, getTabItem }
}

export default {
  name: "list",
  components: {
    settlement
  },
  setup() {
    const route = useRoute()
    //获取url里的参数

    const shopId = route.query.id
    //tab切换拦
    const { currentTab, handleTabClick } = useTabEffect()
    //数据
    const { list } = useCurrentListEffect(currentTab, shopId)
    //购物车
    const { cartList, changeCartItemInfo } = useCartEffect()


    //tab切换按钮
    const { curItem, tablist, getTabItem } = usetabsEffect()
    return {
      categories,
      currentTab,
      handleTabClick,
      list,
      shopId,
      cartList,
      tablist,
      getTabItem,
      curItem,
      changeCartItemInfo
    }
  }
}
</script>
<style>
.content {
  display: flex;
}
.listAll {
  width: 800px;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
}
.listAll .item {
  display: flex;
  height: 140px;
  line-height: 140px;
  border-bottom: 1px solid #ccc;
}
.item-left span {
  margin-right: 16px;
}

.item-right {
  display: flex;
  margin-left: auto;
  align-items: center;
}

.item-right i {
  cursor: pointer;
  margin: 0 16px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
}

.tab {
  list-style: none;
  display: flex;
}
.tab li {
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  margin-right: 16px;
}
.tab li:hover {
  background: rgba(235, 233, 233, 0.813);
}

.tab li.current {
  background: rgba(235, 233, 233, 0.813);
}
</style>
