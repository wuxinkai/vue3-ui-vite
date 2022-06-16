<template>
  <div class="tt-list">
    <div class="tt-suan">结算个数：{{totalAll}}</div>
    <div class="tt-suan">结算总价：{{priceAll}}</div>
    <ul class="listAl2">
      <li class="item" v-for="(item,index) in curCartList" :key="index">
        <div class="item-left">
          <span> {{item.id}}</span>
          <span> {{item.name}}</span>
          <span> {{item.oldPrice}}</span>
          <span> {{item.price}}</span>
          <span> {{item.sales}}</span>
          <span> {{item.count}}</span>
        </div>
        <img :src="item.imgurl" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

//购物车逻辑

const useShoppingEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.query.id
  const cartList = store.state.cartList

  //获取商品数量
  const totalAll = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    //一进来 有可能不存在
    if (productList) {
      for (let i in productList) {
        const productItem = productList[i]
        count += productItem.count
      }
    }
    return count
  })


  //获取商品总价
  const priceAll = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    //一进来 有可能不存在
    if (productList) {
      for (let i in productList) {
        const priceItem = productList[i]
        count += (priceItem.count * priceItem.price)
      }
    }
    return count.toFixed(2)
  })


  //展示页面响应内容
  const curCartList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })
  return { totalAll, priceAll, curCartList }
}

export default {
  name: 'settlement',
  setup() {
    let { totalAll, priceAll, curCartList } = useShoppingEffect()

    // let obj = {
    //   "1": { "id": 1, "name": "小米", "imgurl": "http://dummyimage.com/200x100/02adea&text=牛肉面", "sales": 10, "price": 12, "oldPrice": 16, "count": 1 },
    //   "2": { "id": 2, "name": "小米", "imgurl": "http://dummyimage.com/200x100/02adea&text=牛肉面", "sales": 5, "price": 12, "oldPrice": 9, "count": 1 },
    //   "4": { "id": 4, "name": "小米", "imgurl": "http://dummyimage.com/200x100/02adea&text=牛肉面", "sales": 39, "price": 13, "oldPrice": 4, "count": 1 },
    //   "5": { "id": 5, "name": "小米", "imgurl": "http://dummyimage.com/200x100/02adea&text=牛肉面", "sales": 35, "price": 10, "oldPrice": 7, "count": 1 }
    //   }

    return { totalAll, priceAll, curCartList  }
  }
}
</script>

<style>
.tt-list {
  margin: 200px;
}
.tt-suan {
  font-size: 50px;
  height: 200px;
  line-height: 200px;
}
</style>
