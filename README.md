# vue3 学习

```
import {  ref,reactive, toRefs, computed, watchEffect, watch } from "vue";
```

### setup 事件和属性
-  在created实例完全初始化之前，
-  拥有 props,context两个属性
-   setup必须return 出来的值才能被使用
-   用了setup就不会再用this，因为获取不到
-   在外部mounted,可以调用setup里面的方法 
```
 setup(props,context) {
   //属性
    const mycount = ref(222);

  //事件
    const changeMyCount = () => {
      mycount.value = mycount.value + 2;
    }

   // setup是一个函数
    return {
      mycount,
      changeMyCount,
    }
  }
```
### 在外部mounted,可以调用setup里面的方法 
  ```
  mounted() {
    console.log(this.$options.setup())
  },
  ```
## 响应式的引入
- 原理 通过proxy对数据进行封装，当数据变化时 触发模板的内容更新
## ref 是字符串类型 实现响应式
- ref 处理基础类型数据
- 特点：必须用到.value数据
```
const mycount = ref(222);
 mycount.value =mycount.value + 2
 //结果 224
```

## reactive (瑞哎可提屋) 对象类型实现响应式
- 处理非基础类型的数据
```
  const users = reactive({
      name: '梅西',
      age: 34,
      hobby: '足球12345',
    })

    //改变数据
  const changeHobby = () => {
      users.hobby = '篮球篮球篮球篮球篮球篮球'
    }
```
## readonly  只读不能被修改
```
  let copyNameObj = readonly( { name: '吴磊', age: 22, hobby: '排球' })
    setTimeout(() => {
      copyNameObj.name = '吴谨言'
    }, 2000);
```

## toRefs 转成对象直接用，实现响应式
-  toRefs proxy({name:'dell'}) 转成 {name:proxy({value:'dell'})}
-  把对象转成proxy应用
-  结果赋值不具备响应式，如果想要响应式就toRefs转一下
```
 ...toRefs(users)

  <ul>
    <li>姓名:{{name}}</li>
    <li>年龄:{{age}}</li>
    <li @click="changeHobby">（可点击）爱好:{{hobby}}</li>
    <li>computed计算属性改变:{{reverseType}}</li>
  </ul>
```
## toRef，给没有的对象属性怎么响应式功能 
- 如果对象没有这个属性，还想让属性具有响应式功能

  ``` 
    const data22 = reactive({ name: 'dell' })
    const age = toRef(data22, 'age')
    setTimeout(() => {
      age.value = 'lee'
    }, 3000)
  ```

## 父子通讯
父页面
```
 <HelloWorld msg="组件传递内容" app="子页面的attr能拿到这个数据" @change="getChange">
    <div>在子页面slots可以拿到</div>
  </HelloWorld>
 
 //js 代码
    methods: {
    //获取点击的参数
    getChange(item) {
      alert(`子页面发给父页面显示${item}`)
    } 
  },
```
子页面 
- attrs属性接受从哪的话
- slots插槽接受参数
- emit发送给父页面数据
```
  setup(props, context) {
    const { attrs, slots, emit } = context
    console.log('context集合', attrs, slots, emit)
    console.log('attrs用法', attrs.app)
    console.log('slots用法', slots.default())
    console.log('emit用法', emit)
    return () => h('div', { style: { color: 'red' } }, slots.default())
  },

  setup(props, context) {
    const { attrs, slots, emit } = context
    function handlEmit() {
      debugger
      emit('change', 123454)
    }
    return { handlEmit }
  }
```
vue模块化开发代码,将代码分组
```
<template>
  <input :value="inputValue" @input="handleInputValueChang" />
  <button @click="()=>addItemToList(inputValue)">提交</button>
  <ul>
    <li v-for="(item, index) in list" :key="index">{{item}}</li>
  </ul>
</template>

<script>
import { reactive, ref } from 'vue'
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
    return {
      list, addItemToList, inputValue, handleInputValueChang

    }
  }
}
</script>
```

## computed 计算属性

```
//对象属性进行计算
 const users = reactive({
      reverseType: computed(() => {
        return users.hobby.split('').reverse().join('')
      })

    })

```

## watchEffect 和 watch 监听
 - currentVal, 当前值
 - prevValue 之前的值
```
  
  // 具有一定的惰性 lazy 
  // 参数可以拿到原始值和当前值

  //监听对象的某个字段
  const nameObj= reactive({name:'dell'})
      
    watch(()=>nameObj.name, (newData, oldData) => {  //监听单个
      console.log(`监听数据变化666`, newData, oldData);
    })

  //  监听多个数据
  //  watchEffect会立刻执行，没有惰性
  // 不能获取之前的数据值
  // 不需要穿丢监听的内容，自动感知代码，不需要传递很多参数，只要传递一个回调函数
   //可以停止监听
   watchEffect(() => {
      console.log(`监听多个数据变化`, users.hobby);
    })

    //单独监听
    // {immediate:true} 立即执行
    watch(mycount, (newData, oldData) => {  //监听单个
      console.log(`监听数据变化666`, newData, oldData);

    },{immediate:true})

    //多个监听方式：；里面只要有一个发生变化就都会变化
  let stop1=  watch([mycount, users], (newData, oldData) => {
      console.log(`监听数据变化666`, newData, oldData);
       setTimeout(() => {
        stop1()
      }, 4000)

    })

    //停止监听
      let stop = watchEffect(() => {
      console.log(`可以停止监听`, list);
      setTimeout(() => {
        stop()
      }, 4000)
    })
```

# 生命周期

1、beforeCreate -> 使用 setup()

2、created -> 使用 setup()

3、beforeMount -> onBeforeMount

4、mounted -> onMounted

5、beforeUpdate -> onBeforeUpdate

6、updated -> onUpdated

7、beforeDestroy -> onBeforeUnmount

8、destroyed -> onUnmounted

9、errorCaptured -> onErrorCaptured

10、 onRenderTracked 响应式的依赖每次被渲染，都会触发

11、 onRenderTriggered 每词渲染被触发的是 执行

```

```

# 父子传参
单项数据流 只能是父组件自己修改自己，子组件不能修改父组件
父

```
import { provide} from "vue";

const student = reactive({
name: 'C 罗',
age: 24,
})
//传递
provide('student', student)

```

子组件

```
import { inject } from "vue"

 setup(props, content) {
    const student = inject('student')
    console.log(444,student);
    return {...student}
  }
```
## 点击子组件修改父组件
父组件
```
  const name01 = ref('父页面的值')
  provide('chuandi_name', readonly(name01))
  provide('changeName', (val) => {
    name01.value = val
  })
```
子组件接收
```
    //获取父页面值绑定到页面
    const parent_name = inject('chuandi_name')

    //接收父页面事件

    const changeName = inject('changeName')
    const handlNameClick = () => {
      changeName('父页面的值被改变')
    }

```
## 获取dom
```
  <div>
      <div ref="helloDom">加油</div>
  </div>

  const helloDom = ref(null)
  onMounted(() => {
    console.log('加油',helloDom.value)
  })
  return {
    helloDom  
  }
```

# 路由

```
npm install vue-router@4
```

设置传参

```
  <router-link to="/news12234456">Go to About</router-link>

  import news from '../components/news.vue'

  const routes = [
  { path: '/news:id', component: news },
]

```

# 跳转 404

```
import NotFound from '../components/NotFound.vue'
  { path: '/:path(.*)', component: NotFound },
```

# 前进后退

```
    <button @click="$router.go(1)">前进</button>
    <button @click="$router.go(-1)">后退</button>
```

# 命名视图 一个路由可以加载多个组件

```
//引入
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Baz from '../components/Baz.vue'
//连接
 {
    path: '/Bartext',
    components: {
      default: Foo,
      a: Bar,
      b: Baz
    }
  },

//插入
  <router-view class="view one"></router-view>
  <router-view class="view two" name="a"></router-view>
  <router-view class="view three" name="b"></router-view>
```

# js 点击跳转

```
//引入
import { useRouter } from 'vue-router';
 //事件
 setup(props, content) {
   // 引用
     const router = useRouter();
    const gopath = () => {
      //调用
      router.push({ path: 'Bartext' })
    }
    return {
      gopath
    }
  }
```

# 重定向

```
  { path: '/chongdingxiang',redirect:'/Bartext' }, //重定向
  { path: '/chongdingxiang',alias:'/abc' }, //重定向
```

# 取别名（别名也可以访问到路由）

```
 { path: '/about', alias: '/abc', component: About },

  { path: '/about', alias: ['abc','cba','a1], component: About }, //可以取多个名字
```

# createWebHashHistory(哈希) createWebHistory 模式区别

createWebHistory 不带井号
createWebHistory 需要服务器配置比较麻烦

# 导航守卫 src\router\index.js

```
router.beforeEach((to, from, next) => {
  // ...
})
```

# 状态管理 vuex

设置状态

```
//状态管理
import { reactive } from "vue";
import { createStore } from 'vuex'
// 创建一个新的 store 实例
const store = createStore({
  state:reactive( {
    name: 'less'
  }),
  mutations: reactive({
    //传递给 state
    change(state, str) {
      state.name = str
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

```
在min.js中引入
```
import store from './stores/store'
app.use(store)
```
在vuex页面中展示
-  store.commit提交给 mutations
-  store.dispatch 提交给 Actions
```
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
```



# 全局引入插件 src\main.js

```
// 下载
npm install axios

// 引入
import axios from 'axios'

//全局注册
app.config.globalProperties.$axios =axios ;
```

引入应该 src\App.vue

```
// 组件引入
import { getCurrentInstance } from "vue";

//引入
const { ctx, proxy } = getCurrentInstance();

//应用
  proxy.$axios.get('https://pvp.qq.com/web201605/js/herolist.json').then(res => {
    console.log(77777,res);
  })
```

# vite 解决服务器跨域

vite.config.js

```
module.exports = {
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com/api',
      changeOrigin: true, //开启代理
      rewrite: (path) => path.replace(/^\/api/, '')//重写
    }
  }
}
```

发送请求

```
 let api = '/web201605/js/herolist.json'
proxy.$axios.get(api).then(res => {
  console.log(77777, res);
})
```


# mock js
```
npm install mockjs --save-dev

```

# 脚手架创建
```
vue create 项目名称 
```
### .editorconfig配置
```

```
# 异步接口等待  获取的数对象，通过对象的形式展示
```
reactive 和 toRefs 可以形成，异步等待

  const content = reactive({ list: [] })

  const getContentData = async () => {
    const result = await axios.get(`https://www.fastmock.site/mock/9d12c14426b750d73d484c14876cc29f/vue3/carList?id=${1}`)
    if (result) {
      content.list = result.data.data.list.data
    }

  }
  //监听数据 获取数据
  watchEffect(() => { getContentData(content) })

  // reactive 和 toRefs 可以形成，异步等待
  const { list } = toRefs(content)
  return { list }
```
# 异步 字符串拿数据 ,获取的是数组，通过字符串形式展示
```
let result_data = ref([])

onBeforeMount(() => {
  getList();
});

const getList = () => {
  axios.get('https://www.fastmock.site/mock/9d12c14426b750d73d484c14876cc29f/vue3/userlist').then(res => {
    if (res?.data?.data?.array22) {
      result_data.value = res.data.data.array
    } 
  })
}

    return { toastData, result_data, getList }
```

# 对象也可以循环
### 区分不同种类的商品用
### 相同内容不会重复怎么，可以改变对象中的所需要的字段
html内容
```
  <ul class="listAl2">
    <li class="item" v-for="(item,index) in obj" :key="index">
      <div class="item-left">
        <span> {{item.id}}</span>
        <span> {{item.name}}</span>
        <span> {{item.oldPrice}}</span>
        <span> {{item.count}}</span>
      </div>
    </li>
  </ul>
```
js内容
```
  setup() {
    let obj = {
      "1": { "id": 1, "name": "小米", "oldPrice": 16, "count": 1 },
      "2": { "id": 2, "name": "小米",  "oldPrice": 9, "count": 1 },
      "4": { "id": 4, "name": "小米", "oldPrice": 4, "count": 1 },
      "5": { "id": 5, "name": "小米", "oldPrice": 7, "count": 1 }
      }
    return { obj }
  }
```

# 发布项目
```
# 打开docker

#下载docker中下载nginx
docker pull nginx

# 安装vue项目中的npm依赖
npm install

# 本地打包，生成dist文件
npm run build

# 查看进行
docker images 

# 停止镜像
 docker container stop ecac195d15af

# 删除镜像
docker rmi ecac195d15af 
docker rm -f  ecac195d15af
# 创建docker 镜像
docker build -t vue3-docker01 .

# 启动docker镜像  本地localhost:4000端口监听容器80容器
docker run -p 4000:8080 -d vue3-docker01

```

现在就可以在本机游览器查看在docker中启动的项目了。http://localhost:4000/

```

