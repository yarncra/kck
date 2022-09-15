<template>
  <div class="container">
    <section class="main">
      <KckFilter />
      <KckFeed />
    </section>
  </div>
</template>

<script>
import KckFilter from '@/components/filter/kckFilter.vue';
import KckFeed from '@/components/feed/kckFeed.vue';

export default {
  components: { KckFilter, KckFeed },
  mounted() {
    this.$store.dispatch('getCards');
  },
};
</script>

<style lang="scss">
.main {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  gap: 17px;
}
</style>
