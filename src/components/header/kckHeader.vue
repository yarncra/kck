<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Тестовое задание</h1>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  width: 100%;
  min-height: 260px;
  position: relative;
}

.header:before {
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  min-height: 260px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background: linear-gradient(
    267.21deg,
    #900793 0.16%,
    rgba(134, 4, 137, 0.785707) 0.16%,
    rgba(159, 12, 162, 0.762269) 43.22%,
    rgba(5, 1, 190, 0.734375) 98.12%,
    rgba(0, 28, 126, 0.619792) 100.15%,
    rgba(6, 77, 142, 0.447917) 102.03%,
    rgba(1, 0, 60, 0) 102.73%
  );
}
.header__title {
  height: 260px;
  display: flex;
  align-items: center;
}
</style>
