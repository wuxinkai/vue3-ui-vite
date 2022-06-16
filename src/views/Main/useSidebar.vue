<template>
  <div class="g-ant__sider">
    <div class="g-ant-sider__wrap g-ant-sider__wrap--fixed">
      <div class="g-ant-sider__head">
        <a class="m-logo" href="#">
          <img src="../../assets/images/logo.png" alt="">
          <h1>Ant Design Pro</h1>
        </a>
      </div>
      <ul class="g-ant-sider__main">
        <li class="m-menu " v-for="(item,index) in menuList" :key="index">
          <div class="m-menu__title">
            <i v-if="item.meta &&item.meta.icon" class="iconfont " :class="item.meta.icon"></i>
            <span>{{item.meta &&item.meta.title}}</span>
            <i v-if="item.children && item.children.length > 0" class="iconfont icon-arrowup"></i>
          </div>
          <ul class="m-menu__sub" v-if="item.children && item.children.length > 0">
            <li :class="{'m-menu__sub--selected':idx==curIdx}" @click="()=>{handleSelect(it,idx)}" v-for="(it,idx) in item.children" :key="idx">{{it.meta&&it.meta.title}}</li>
          </ul>
        </li>
      </ul>
      <div class="g-ant-sider__foot">
        <i class="iconfont icon-outdent u-bar"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

const useRouterEffect = () => {
  const curIdx = ref(null)
  const router = useRouter()
  //设置菜单
  const menuList = ref(router.options.routes)
  //点击菜单按钮
  const handleSelect = (it, idx) => {
    curIdx.value = idx
    router.push(it.path)
  }

  return { curIdx, menuList, handleSelect }
}

// 点击这地展开菜单
const useMenuListEffect = (sider) => {
  var menuTitles = document.querySelectorAll('.m-menu__title');
  for (var i = 0; i < menuTitles.length; i++) {
    menuTitles[i].onclick = function () {
      var menu = this.parentElement;
      menu.classList.toggle('m-menu--selected');
      if (menu.className.includes('m-menu--selected')) {
        //打开状态
        var arrow = this.querySelector('[class*="icon-arrow"]');
        arrow.className = 'iconfont icon-arrowup';
      }
      else {
        //关闭状态
        var arrow = this.querySelector('[class*="icon-arrow"]');
        arrow.className = 'iconfont icon-arrowdown';
      }
    };
  }


  // 点击折叠还是展开
  var bar = document.querySelector('.u-bar');
  var menus = document.querySelectorAll('.m-menu');
  bar.onclick = function () {
    sider.classList.toggle('g-ant__sider--closed');
   //让第一个菜单展开
    menus[0].classList.add('m-menu--selected');
    menus[0].querySelector('[class*="icon-arrow"]').className = 'iconfont icon-arrowup';
 // 折叠后让所有展开的菜单都关闭 
    for (var i = 1; i < menus.length; i++) {
      menus[i].classList.remove('m-menu--selected');
      menus[i].querySelector('[class*="icon-arrow"]').className = 'iconfont icon-arrowdown';
    }
  };
}

// 点击
const useHeadMenuEffect=(sider)=>{
    var bar2 = document.querySelector('.m-logo2 .u-bar');
        var mask = document.querySelector('.g-ant__sider + .u-mask');
        bar2.onclick = function(){
            if( !sider.className.includes('hide') ){
                sider.classList.add('show');
            }
        };

        mask.onclick = function(){
            sider.classList.remove('show');
        };
}
import { useRoute, useRouter } from 'vue-router'
export default {
  name: "useSidebar",
  setup() {
    let { curIdx, menuList, handleSelect } = useRouterEffect()

    //dom 加载完成
    onMounted(() => {
        var sider = document.querySelector('.g-ant__sider');
      useMenuListEffect(sider)

      useHeadMenuEffect(sider)
    })


    return { menuList, curIdx, handleSelect }
  }
}
</script>

<style>
</style>
