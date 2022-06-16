<template>
<h1>三列布局 中间实现最小宽度</h1>
  <div class="main">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  height: 400px;
  background: skyblue;
  display: grid;
  /* grid-template-columns: 100px 1fr 100px; */
  grid-template-columns: 100px minmax(400px, 1fr) 100px;
  grid-template-rows: 100px;
}
.main div {
  background: pink;
  border: 1px black solid;
}
</style>
