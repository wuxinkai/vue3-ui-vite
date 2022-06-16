<template>
  <div class="main">
    <img src="../../assets/images/phone.png" alt="">
    <span>自制</span>
    <p>手机热卖中.....</p>
  </div>

  <br>
  <br>
  <br>
  <br>
  <br>
  <div class="box">
    <h1>grid-area 属性</h1>

    <p>您可以使用 <em>grid-area</em> 属性来规定放置项目的位置。</p>
    <br>
    <p>语法是 grid-row-start / grid-column-start / grid-row-end / grid-column-end.</p>
    <br>
    <p style="color:red;font-size:30px"> grid-area: 2 / 1 / span 2 / span 3;</p>
    <br>
    <p>项目将在开始位置是第 2行的 第1列开始显示   并横跨 2 行 3 列：</p>

    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  width: 530px;
  height: 300px;
  background: skyblue;
  display: grid;
}
.main img {
  /* 所占网格的开始位置和结束位置 */
  /** grid-area: x , y :height,widht*/
  /* grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end */
  grid-area: 1/1/1/1;
}
.main span {
  grid-area: 1/1/1/1;
  justify-self: end;
  /* align-self:inherit; */
  margin: 5px;

  padding: 4px 10px;
  background: blue;
  color: #fff;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  cursor: pointer;
}
.main p {
  grid-area: 1/1/1/1;
  align-self: end;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 30px;
  line-height: 30px;
  color: white;
}

/* 设置行列 */
.box {
  width: 800px;
  margin: 0 auto;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  background-color: #2196f3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-area: 2 / 1 / span 2 / span 3;
}
</style>
