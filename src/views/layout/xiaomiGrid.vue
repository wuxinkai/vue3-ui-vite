<template>
  <div style="display: flex;">
    <ul class="nav">
      <li>
        <div>
          <a href="#">手机</a>
          <a href="#">电话卡</a>
        </div>
        <i class="iconfont icon-right-arrow"></i>
        <ul class="nav-menu">
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <a href="#">笔记本</a>
          <a href="#">显示器</a>
          <a href="#">平板</a>
        </div>
        <i class="iconfont icon-right-arrow"></i>
        <ul class="nav-menu">
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <a href="#">手机</a>
          <a href="#">电话卡</a>
        </div>
        <i class="iconfont icon-right-arrow"></i>
        <ul class="nav-menu">
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
          <li>
            <img src="./phone.png" alt="">
            <p>小米 MIX FOLD</p>
          </li>
        </ul>
      </li>
      <li>
        <div>
          <a href="#">笔记本</a>
          <a href="#">显示器</a>
          <a href="#">平板</a>
        </div>
        <i class="iconfont icon-right-arrow"></i>
      </li>
      <li>
        <div>
          <a href="#">手机</a>
          <a href="#">电话卡</a>
        </div>
        <i class="iconfont icon-right-arrow"></i>
      </li>
      <li>
        <div>
          <a href="#">笔记本</a>
          <a href="#">显示器</a>
          <a href="#">平板</a>
        </div>
        <i class="iconfont icon-right-arrow"></i>
      </li>
    </ul>
    <div style="padding:50px 0 0 50px">
      <h1>垂直布局</h1>
      <h1>每行显示6个显示不下换行</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
  width: 233px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.nav > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding: 0 28px;
  cursor: pointer;
  color: white;
  position: relative;
}

.nav > li a {
  color: inherit;
}

.nav > li:hover {
  background: #ff6801;
}

.nav > li:hover .nav-menu {
  display: grid;
}

.nav-menu {
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  height: 460px;
  /* 设置6行 平铺自动进行分配  垂直显示6个 */
  grid-template-rows: repeat(6, 1fr);
  /* 横向间距 */
  grid-template-columns: 305px;
  /* 自动换行 */
  grid-auto-flow: column;
  /*  设置第二行第三行的网格宽度*/
  grid-auto-columns: 305px;
  background: white;
  border: 1px #e1e1e1 solid;
  box-shadow: 5px 5px 10px #ccc;
  color: #36303c;
}

.nav-menu > li {
  display: flex;
  align-items: center;
}

.nav-menu > li > img {
  margin-left: 26px;
  margin-right: 21px;
}
</style>
