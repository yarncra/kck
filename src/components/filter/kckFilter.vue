<template>
  <div class="filter">
    <h2 class="filter__title">Фильтр</h2>
    <h3 class="filter__invoice-title">Номер накладной:</h3>
    <input
      class="filter__invoice-inp inp"
      type="text"
      placeholder="Введите фрагмент"
      v-model="invoiceNumber"
    />
    <h3 class="filter__order-title">Тип заказа:</h3>
    <div class="filter__order-select">
      <KckSelect
        :options="types"
        @selectOption="selectOption"
        :selectedOption="selectedOption"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import KckSelect from '@/components/select/kckSelect.vue';

export default {
  components: { KckSelect },
  data() {
    return {
      selectedOption: { name: 'Выберите из списка', value: 0 },
      invoiceNumber: '',
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.$store.commit('filterByCardType', option.name);
    },
  },
  computed: {
    ...mapGetters(['cards', 'types']),
    options() {
      const result = [];
      const set = new Set();
      this.cards.map((el) => set.add(el.type));
      Array.from(set).map((el, index) => {
        result.push({ name: el, value: index + 1 });
        return el;
      });
      result.push({ name: 'Все', value: result.length + 1 });
      return result;
    },
  },
  watch: {
    options() {
      this.$store.commit('setTypes', this.options);
    },
    invoiceNumber() {
      this.$store.commit('searchInvoiceNumber', this.invoiceNumber);
    },
  },
};
</script>

<style lang="scss">
.filter {
  display: inline-block;
  height: 100%;
  padding: 16px 16px;
  background: #ffffff;
  filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25));
}

.filter__title {
  padding-bottom: 8px;
  border-bottom: 1px solid #f8f8f8;
}

.filter__invoice-title {
  margin-top: 16px;
}

.filter__invoice-inp {
  margin-top: 4px;
  width: 248px;
}

.filter__order-title {
  margin-top: 16px;
}

.filter__order-select {
  margin-top: 4px;
}
</style>
