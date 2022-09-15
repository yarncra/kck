<template>
  <div class="card">
    <div class="card__header">
      <div class="card__title">{{ card.id }}</div>
      <button class="card__header-btn" @click="toggleDeletePopup(card.id)">
        <i class="icon-burger3"> </i>
      </button>
      <KckDeletePopup @deleteCard="deleteCard(card.id)" v-if="card.isVisible" />
    </div>
    <div class="card__items">
      <div class="card__number">
        <p class="card__item-title">Номер накладной:</p>
        <p class="card__item-info">{{ card.number }}</p>
      </div>
      <div class="card__order">
        <p class="card__item-title">Тип заказа:</p>
        <p class="card__item-info">{{ card.type }}</p>
      </div>
      <div class="card__date">
        <p class="card__item-title">Дата создания:</p>
        <p class="card__item-info">{{ card.creationDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import KckDeletePopup from '@/components/popup/kckDeletePopup.vue';

export default {
  components: { KckDeletePopup },
  props: {
    card: {
      type: Object,
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
.card {
  width: 100%;
  max-width: 290px;
}

.card__header {
  position: relative;
  width: 100%;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(237, 232, 245, 0.5);
}

.card__header-btn {
  cursor: pointer;
  border: none;
  background: none;
}

.card__items {
  min-height: 153px;
  padding: 8px 16px;
  padding-bottom: 8px;
  background: #f6fafb;
  box-shadow: 0px 4px 12px #ebebeb;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}

.card__number {
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
}

.card__order {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
}

.card__date {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
}

.card__item-title {
  color: #647a8c;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
}

.card__item-info {
  margin-left: 10px;
  display: inline-block;
  width: 100%;
  max-width: 120px;
  color: #000000;
  word-wrap: break-word;
}
</style>
