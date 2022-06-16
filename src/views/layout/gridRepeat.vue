<template>
  <h1>不换行显示</h1>
  <div class="main2">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
  </div>
  <br>
  <br>
  <br>
  <br>
  <h1>换行显示</h1>
  <div class="main">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main2 {
  width: 80%;
  margin: 0 auto;
  background: skyblue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 5px;
}
.main2 > div {
  background: rgb(255, 255, 0);
}

/* 换行布局 */
.main {
  width: 80%;
  margin: 0 auto;
  background: skyblue;
  display: grid;
  /*
            repeat 重复渲染
            auto-fill 自适应宽度，如果没有接触到父盒子的宽度正常显示，触到父盒子宽度换行
            minmax（） 200px 是最小宽度换行， 1fr是自适应
             */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* 第一行高度 */
  grid-template-rows: 100px;
  /* 行高 */
  grid-auto-rows: 150px;
  /* 上下间距 */
  grid-gap: 20px 20px;
}

.main div {
  background: pink;
  border: 1px black solid;
}
</style>
