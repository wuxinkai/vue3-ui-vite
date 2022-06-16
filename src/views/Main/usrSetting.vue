<template>
  <div class="m-setting">
    <div class="m-setting__bar">
      <i class="iconfont icon-setting"></i>
    </div>
    <div class="m-setting__item">
      <h3>主题色</h3>
      <ul class="m-setting-item__theme">
        <li class="u-foxiaolan"><i class="iconfont icon-check"></i></li>
        <li class="u-bomu"></li>
        <li class="u-huoshan"></li>
        <li class="u-rimu"></li>
        <li class="u-mingqing"></li>
        <li class="u-jiguanglv"></li>
        <li class="u-jikelan"></li>
        <li class="u-jiangzi"></li>
      </ul>
    </div>
    <div class="u-divider"></div>
    <div class="m-setting__item">
      <h3>固定内容</h3>
      <ul class="m-setting-item__toggle">
        <li>
          <span>内容头部</span>
          <div class="u-switch j-head--fixed">
            <div class="u-switch__handle"></div>
          </div>
        </li>
        <li>
          <span>侧边菜单</span>
          <div class="u-switch j-sider--fixed">
            <div class="u-switch__handle"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="u-divider"></div>
    <div class="m-setting__item">
      <h3>显示内容</h3>
      <ul class="m-setting-item__toggle">
        <li>
          <span>内容头部</span>
          <div class="u-switch j-head--show">
            <div class="u-switch__handle"></div>
          </div>
        </li>
        <li>
          <span>侧边菜单</span>
          <div class="u-switch j-sider--show">
            <div class="u-switch__handle"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="u-mask"></div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'usrSetting',
  setup() {
    onMounted(() => {

      // 切换按钮
      var setting = document.querySelector('.m-setting');
      var settingBar = document.querySelector('.m-setting__bar');

      settingBar.onclick = function () {
        setting.classList.toggle('m-setting--open');
        if (setting.className.includes('m-setting--open')) {
          var icon = this.querySelector('i');
          icon.className = 'iconfont icon-close';
        }
        else {
          var icon = this.querySelector('i');
          icon.className = 'iconfont icon-setting';
        }
      };


      // 控制是否固定头部 和左侧菜单

      var headFixed = document.querySelector('.j-head--fixed');
      var siderFixed = document.querySelector('.j-sider--fixed');
      var headShow = document.querySelector('.j-head--show');
      var siderShow = document.querySelector('.j-sider--show');
      var mainHead = document.querySelector('.g-ant-main__head');
      var siderWrap = document.querySelector('.g-ant-sider__wrap');
      var sider = document.querySelector('.g-ant__sider');

      headFixed.onclick = function () {
        this.classList.toggle('u-switch--closed');
        mainHead.classList.toggle('g-ant-main__head--fixed');
      };
      siderFixed.onclick = function () {
        this.classList.toggle('u-switch--closed');
        siderWrap.classList.toggle('g-ant-sider__wrap--fixed');
      };
      headShow.onclick = function () {
        this.classList.toggle('u-switch--closed');
        mainHead.classList.toggle('hide');
      };
      siderShow.onclick = function () {
        this.classList.toggle('u-switch--closed');
        sider.classList.toggle('hide');
      };


      //设置主题
      var themes = document.querySelectorAll('.m-setting-item__theme>li');
      for (var i = 0; i < themes.length; i++) {
        themes[i].onclick = function () {
          for (var i = 0; i < themes.length; i++) {
            themes[i].innerHTML = '';
          }
          this.innerHTML = '<i class="iconfont icon-check"></i>';
          var color = getComputedStyle(this).backgroundColor;
          document.documentElement.style.setProperty('--theme', color);
        };
      }
    })

  }
}
</script>

<style>
</style>
