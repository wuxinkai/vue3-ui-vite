//对没有的对象下一级进行创建

//状态管理
import { reactive } from "vue";
import { createStore } from 'vuex'

//设置本地存储
const setLocalStorage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

// 获取本地存储
const getLocalStorage = () => {
  if(localStorage.cartList){
    return JSON.parse(localStorage.cartList) || {}
  }
}

// 创建一个新的 store 实例
const store = createStore({
  state: reactive({
    name: 'less',
    cartList:getLocalStorage()
    // cartList: {
    //   // 第一层是店铺.店铺可以切换
    //   shopId:{
    //     //商品
    //     productId:{
    //       id:1,
    //       name:'番茄',
    //       imgUrl:"",
    //       oldPrice:"",
    //       price:"",
    //       sales:"",
    //       count:"",
    //     }
    //   }
    // }
  }),
  mutations: reactive({
    //传递给 state
    change(state, str) {
      state.name = str
    },

    //（3）设置购物车
    changeItemToVuex(state, payload) {
      let { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]

      //1111增加店铺  cartList对象中没有对象我们就创建一个对象
      if (!shopInfo) { shopInfo = {} }

      //2222设置商品， 如果shopInfo对象中没productInfo 就创建一个
      let product = shopInfo[productId]
      if (!product) {
        //等于原来对象
        product = productInfo
        state.count = 0
      }
      product.count = product.count + num
      //边界判断
      if (product.count < 0) { product.count = 0 }

      shopInfo[productId] = product

      //333设置store
      state.cartList[shopId] = shopInfo

      //本地存储
      setLocalStorage(state)
    }
  }),
  actions: reactive({
    //传递给 mutations
    changeActions(state, str) {
      setTimeout(() => {
        state.commit('change', str)
      }, 2000)
    }
  })
});

export default store;
