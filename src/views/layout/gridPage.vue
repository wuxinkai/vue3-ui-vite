<template>
  <div class="g-ant-main__main">
    <div class="index-main">
      <div class="m-card">
        <div class="m-card__title">
          活动实时交易情况
        </div>
        <div class="m-card__body">
          <div class="index-main__bg1"></div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-card__title">
          活动情况预测
        </div>
        <div class="m-card__body">
          <div class="index-main__bg2"></div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-card__title">
          券核效率
        </div>
        <div class="m-card__body">
          <div class="index-main__bg3"></div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-card__title">
          各品类占比
        </div>
        <div class="m-card__body">
          <div class="index-main__bg4"></div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-card__title">
          热门搜索
        </div>
        <div class="m-card__body">
          <div class="index-main__bg5"></div>
        </div>
      </div>
      <div class="m-card">
        <div class="m-card__title">
          资源剩余
        </div>
        <div class="m-card__body">
          <div class="index-main__bg6"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.index-main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 285px);
  gap: 24px;
  margin: 24px;
  grid-template-areas:
    'a1 a1 a1 a2'
    'a1 a1 a1 a3'
    'a4 a4 a5 a6';
}

.index-main .m-card:nth-of-type(1) {
  grid-area: a1;
}

.index-main .m-card:nth-of-type(2) {
  grid-area: a2;
}

.index-main .m-card:nth-of-type(3) {
  grid-area: a3;
}

.index-main .m-card:nth-of-type(4) {
  grid-area: a4;
}

.index-main .m-card:nth-of-type(5) {
  grid-area: a5;
}

.index-main .m-card:nth-of-type(6) {
  grid-area: a6;
}

.index-main__bg1,
.index-main__bg2,
.index-main__bg3,
.index-main__bg4,
.index-main__bg5,
.index-main__bg6 {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  height: 100%;
}

.index-main__bg1 {
  background-image: url('../../assets/images/index-1.jpg');
}

.index-main__bg2 {
  background-image:  url('../../assets/images/index-2.jpg');
}

.index-main__bg3 {
  background-image:  url('../../assets/images/index-3.jpg');
}

.index-main__bg4 {
  background-image:  url('../../assets/images/index-4.jpg');
}

.index-main__bg5 {
  background-image: url('../../assets/images/index-5.jpg');
}

.index-main__bg6 {
  background-image: url('../../assets/images/index-6.jpg');
}

@media (max-width: 1400px) {
}

@media (max-width: 1200px) {
  .index-main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 285px);
    gap: 24px;
    margin: 24px;
    grid-template-areas:
      'a1 a1 a1'
      'a1 a1 a1'
      'a2 a3 a5'
      'a4 a4 a6';
  }
}

@media (max-width: 992px) {
  .index-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 285px);
    gap: 24px;
    margin: 24px;
    grid-template-areas:
      'a1 a1'
      'a1 a1'
      'a2 a3'
      'a4 a4'
      'a5 a6';
  }
}

@media (max-width: 768px) {
  .index-main {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 285px);
    gap: 24px;
    margin: 24px;
    grid-template-areas:
      'a1'
      'a2'
      'a3'
      'a4'
      'a5'
      'a6';
  }
}

@media (max-width: 576px) {
}
</style>
