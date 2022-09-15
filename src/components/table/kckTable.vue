<template>
  <div class="table">
    <ul class="table__header">
      <li class="table__header-item">
        <h3>ID</h3>
      </li>
      <li class="table__header-item">
        <h3>Номер накладной</h3>
      </li>
      <li class="table__header-item">
        <h3>Тип заказа</h3>
      </li>
      <li class="table__header-item">
        <h3>Дата создания</h3>
      </li>
      <li class="table__header-item">
        <h3></h3>
      </li>
    </ul>
    <ul class="table__content" v-for="card in cards" :key="card.id">
      <li class="table__content-item">{{ card.id }}</li>
      <li class="table__content-item">{{ card.number }}</li>
      <li class="table__content-item">{{ card.type }}</li>
      <li class="table__content-item">{{ card.creationDate }}</li>

      <li class="table__content-item">
        <button class="table__content-btn" @click="toggleDeletePopup(card.id)">
          <i class="icon-burger3"> </i>
        </button>
      </li>
      <KckDeletePopup @deleteCard="deleteCard(card.id)" v-if="card.isVisible" />
    </ul>
  </div>
</template>

<script>
import KckDeletePopup from '@/components//popup/kckDeletePopup.vue';

export default {
  components: { KckDeletePopup },
  props: {
    cards: {
      type: Array,
      require: true,
    },
  },
  methods: {
    deleteCard(id) {
      this.$store.commit('deleteCard', id);
    },
    toggleDeletePopup(id) {
      this.$emit('toggleDeletePopup', id);
    },
  },
};
</script>

<style lang="scss">
.table__header {
  margin-top: 16px;
  width: 100%;
  max-width: 912px;
  display: flex;
  justify-content: space-between;
  gap: 3px;
}

.table__header-item {
  text-align: center;
  padding: 12px 0;
  background: #cccccc57;
}

.table__header-item:nth-child(1) {
  width: 100%;
  max-width: 134px;
}

.table__header-item:nth-child(2) {
  width: 100%;
  max-width: 268px;
}

.table__header-item:nth-child(3) {
  width: 100%;
  max-width: 189px;
}

.table__header-item:nth-child(4) {
  width: 100%;
  max-width: 244px;
}

.table__header-item:nth-child(5) {
  width: 100%;
  max-width: 65px;
}

.table__content {
  position: relative;
  display: flex;
}

.table__content-item {
  padding: 12px 0;
  text-align: center;
  border-bottom: 1px solid #cccccc57;
}

.table__content-item:nth-child(1) {
  width: 100%;
  max-width: 134px;
}

.table__content-item:nth-child(2) {
  width: 100%;
  max-width: 268px;
}

.table__content-item:nth-child(3) {
  width: 100%;
  max-width: 189px;
}

.table__content-item:nth-child(4) {
  width: 100%;
  max-width: 244px;
}

.table__content-item:nth-child(5) {
  width: 100%;
  max-width: 65px;
}

.table__content-btn {
  cursor: pointer;
  border: none;
  background: none;
}
</style>
