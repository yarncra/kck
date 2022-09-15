<template>
  <div class="feed">
    <div class="feed__controls">
      <div class="feed__select">
        <KckSelect
          :options="options"
          @selectOption="selectOption"
          :selectedOption="selectedOption"
        />
      </div>
      <div class="feed__toggle">
        <button
          class="feed__toggle-table"
          :class="{ feed__toggle_active: !isCard }"
          @click="isCard = !isCard"
        >
          <i class="icon-burger1"></i>
        </button>
        <button
          class="feed__toggle-card"
          :class="{ feed__toggle_active: isCard }"
          @click="isCard = !isCard"
        >
          <i class="icon-burger2"></i>
        </button>
      </div>
    </div>
    <div class="feed__table" v-if="!isCard">
      <KckTable :cards="filteredCards" @toggleDeletePopup="toggleDeletePopup" />
    </div>
    <div class="feed__cards" v-if="isCard">
      <KckCard
        v-for="card in filteredCards"
        :card="card"
        :key="card.id"
        @toggleDeletePopup="toggleDeletePopup"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import KckSelect from '@/components/select/kckSelect.vue';
import KckCard from '@/components/card/KckCard.vue';
import KckTable from '@/components/table/kckTable.vue';

export default {
  components: { KckSelect, KckCard, KckTable },
  data() {
    return {
      isCard: false,
      options: [
        { name: 'Номер накладной ↑ ', value: 1 },
        { name: 'Номер накладной ↓ ', value: 2 },
      ],
      selectedOption: { name: 'Выберите из списка', value: 0 },
    };
  },
  methods: {
    toggleDeletePopup(id) {
      this.$store.commit('toggleDeletePopup', id);
    },
    selectOption(option) {
      this.selectedOption = option;
      this.$store.commit('sortByCardNumber', option);
    },
  },

  computed: {
    ...mapGetters(['filteredCards']),
  },
};
</script>

<style lang="scss">
.feed {
  width: 100%;
}

.feed__controls {
  display: flex;
  align-items: center;
}

.feed__select {
  width: 100%;
  padding: 16px;
  max-width: 815px;
  background: #ffffff;
  box-shadow: 0px 4px 12px #e7e7e7;
  border-radius: 3px;
}

.feed__toggle {
  margin-left: 16px;
  width: 80px;
  height: 40px;
  display: flex;
}

.feed__toggle-table {
  width: 100%;
  background: #e5e9ec;
  border: 1px solid #647a8c;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  cursor: pointer;
}

.feed__toggle-card {
  width: 100%;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #e5e9ec;
  border: 1px solid #647a8c;
  cursor: pointer;
}

.feed__cards {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}

.icon-burger1,
.icon-burger2 {
  border: none;
  font-size: 16px;
}

.feed__toggle_active {
  background: #ffffff;
}
</style>
