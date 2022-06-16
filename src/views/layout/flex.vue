<template>
  <ul class="u-list">
    <li>(1) flex 适合做一维布局 适合一行或者一列 ,flex列自适应不好做，会把父容器给撑开的</li>
    <li>(2) grid 网格布局适合做二维布局, </li>
    <li>内联与块的上下左右居中布局 </li>
    <li>不定项居中：用弹性盒子 设置父元素</li>
    <li>均分列布局：用弹性盒子 设置父元素 </li>
    <li>子分组布局：用弹性盒子 设置父元素</li>
    <li>等高布局：设置子盒子属性</li>
    <li>两列或三列布局：弹性布局</li>
    <li>利用vh进行高度布局</li>
    <li>Sticky Footer 布局（粘性页脚布局）：不满一屏的时候是在底部显示，要是超出底部就跟着内容往下显示 </li>
    <li>溢出项布局：可以用于轮播图</li>
  </ul>


  <div class="main">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>3</div>
    <div>3</div>
    <div>3</div>
    <div>3</div>
    <div>3</div>
    <div>3</div>
    <div>3</div>
  </div>

  <h2>不定项居中</h2>
  <div class="box">
    <section>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </section>
  </div>
  <br>
  <div class="main2">
    <div class="col1"></div>
    <div class="col2"></div>
  </div>

<br>
<br>
<br>
  <h1>高度不够，页面内容上下展示模块</h1>

  <div class="main3">
    <div class="header"></div>
    <div class="content">
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>

      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*



*/

.main {
  width: 600px;
  height: 500px;
  margin: 0 auto;
  background: skyblue;
  display: flex;
  /* 横向展示 */
  flex-direction: row;
  /*是否换行  */
  flex-wrap: wrap;
  /* 简写   */
  /* flex-flow: row  wrap; */

  /* 主轴对齐 */
  justify-content: start;

  /* 交叉轴对齐 */
  align-items: start;
  /* 不换行不生效的 */
  align-content: flex-end;
}

.main > div {
  width: 100px;
  height: 100px;
  background: pink;
  font-size: 20px;
  /* 扩展比例
   flex-grow: 0,不占用剩余的空白    1子盒子自适应

  */
  flex-grow: 0;
  /* 收缩比列  默认值是1 */
  flex-shrink: 1;
  /* 垂直放心进行缩放 */
  flex-basis: 50%;

  /* 简写方式 */
  flex: 1 0 50%;

  /*   */
}

ul.u-list {
  list-style: none;
  width: 700px;
  margin: 0 auto;
  text-align: left;
  border: 1px solid #ccc;
  padding: 0;
}
.u-list li {
  height: 40px;
  padding: 0 16px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
}

/* 不定项居中 */
.box {
  width: 300px;
  height: 150px;
  background: skyblue;
  position: relative;
  /* 实现不定向居中 */
  /* display: flex;
    justify-content:center;
    align-items: flex-end; */
}
.box section {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 0;
}
.box > div {
  width: 30px;
  height: 30px;
  background: pink;
  border-radius: 50%;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
}

.main2 {
  height: 100vh;
  background: skyblue;
}
.col1 {
  width: 200px;
  height: 60%;
  float: left;
  background: pink;
}
.col2 {
  height: 100%;
  background: lightcoral;
  margin-left: 200px;
  /* 利用bfc的写法 */
  /*  overflow: hidden; */
}

/* 粘性页脚 */

.main3 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main3 .header {
  height: 100px;
  background: pink;
}
.main3 .content {
  flex-grow: 1;
}
.main3 .footer {
  height: 100px;
  background: skyblue;
}
</style>
