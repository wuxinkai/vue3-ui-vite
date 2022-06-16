<template>
  <h1>ajax请求</h1>
  <button @click="getList">点击获取数据</button>

  <ul class="list-box">
    <li v-for="(item,index) in result_data" :key="index">
      <span>{{item.id}}</span>
      <span>{{item.name}}</span>
      <span>{{item.age}}</span>
      <!-- <video ref="videoPlayer" controls :src="item.video" :poster="item.top_comments_header" controlslist="nodownload"   :class="[porel,fullwidth,mal,fla,mat,'movie-show-video']" style="width: 100%; height: 100%; object-fit: fill">
      </video> -->
    </li>
  </ul>
  <Toast v-if="toastData.showToast" :message="toastData.toastMessage"></Toast>
</template>


<script>
// 知识点
// 封装事件
// 组件导出事件
// 导出参数外部使用
import { ref, onBeforeMount, reactive } from "vue";
import axios from 'axios'
// import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast/toast.vue'
export default {
  name: 'about',
  components: { Toast },
  setup(props, context) {
    // import { getCurrentInstance } from "vue";

    // //引入
    // const { ctx, proxy } = getCurrentInstance();

    //应用
    // proxy.$axios.get('https://pvp.qq.com/web201605/js/herolist.json').then(res => {
    //   console.log(77777, res);
    //   debugger
    // })

    // axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then(async res => {
    //   let { code, result, message } = res.data
    //   if (code == 200) {
    //     result_data = result
    //   }
    //   return {
    //     result_data
    //   }
    // })'


    let result_data = ref([])
    onBeforeMount(() => {
      getList();
    });

    const { toastData, showClickToast } = useToastEffect()

    const getList = () => {
      axios.get('https://www.fastmock.site/mock/9d12c14426b750d73d484c14876cc29f/vue3/userlist').then(res => {
        //双问号写法
        // 对象层级只有有就往下走
        // console.log(res?.data?.code)
        // //对象如果没有就抛出undefined
        // console.log(res?.data2?.code2)
        // //无论在哪一集都可以
        console.log(res?.data?.data?.array)
        if (res?.data?.data?.array22) {
          result_data.value = res.data.data.array
        } else {
          showClickToast('暂无数据')
        }
      }).catch(function (error) {
        showClickToast('网络错误')
      });

      // try {
      //   let result = await post('/vue3/userlist', {})
      //   console.log(555,result)
      //   if (result?.data?.array) {
      //     result_data.value = data.array
      //   } else {
      //     alert('暂无数据')
      //   }
      // } catch {
      //   alert('接口请求')
      // }


    }
    return { toastData, result_data, getList }
  }
}
</script>

<style>
.list-box {
  width: 500px;
  margin: 100px auto;
  border: 1px solid #ccc;

  padding: 0;
}
.list-box li {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.list-box span {
  height: 40px;
  line-height: 40px;
  width: 30%;
}
</style>
