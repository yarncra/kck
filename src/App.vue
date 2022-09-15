<template>
  <div id="app">
    <KckHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import KckHeader from '@/components/header/kckHeader.vue';

export default {
  components: { KckHeader },
};
</script>

<style lang="scss"></style>
