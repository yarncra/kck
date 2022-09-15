<template>
  <div class="select" :class="{ select_active: isVisible }">
    <div
      class="select__selected inp"
      :class="{ select__selected_active: selectedOption.value }"
      @click="filterOptions(selectedOption)"
    >
      {{ selectedOption.name }}
    </div>
    <div class="select__items">
      <div
        class="select__item-wrapper"
        v-for="option in filteredOptions"
        :key="option.value"
        @click="selectOption(option)"
      >
        <p class="select__item" v-if="isVisible">{{ option.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedOption: {
      type: Object,
      default() {
        return '';
      },
    },
  },
  data() {
    return {
      isVisible: false,
      filteredOptions: [],
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('selectOption', option);
    },
    hideSelect() {
      this.isVisible = false;
    },
    filterOptions(selectedOption) {
      this.isVisible = !this.isVisible;
      this.filteredOptions = this.options.filter(
        // eslint-disable-next-line comma-dangle
        (el) => el.name !== selectedOption.name
      );
    },
  },
  mounted() {
    document.addEventListener('click', () => this.hideSelect(), true);
  },
  beforeDestroy() {
    document.removeEventListener('click', () => this.hideSelect);
  },
};
</script>

<style lang="scss">
.select {
  position: relative;
  user-select: none;
  width: 248px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
}

.select::before {
  font-family: 'icomoon';
  font-size: 10px;
  content: '\e906';
  display: block;
  position: absolute;
  top: calc(34px / 2 - 8px);
  right: 12px;
}

.select_active::before {
  transform: rotate(180deg);
}

.select__selected {
  color: #a5a5a5;
}

.select__selected_active {
  color: #000000;
}

.select__items {
  position: absolute;
  z-index: 998;
  top: 40px;
  left: 0;
  background: #ffffff;
  width: 100%;
}

.select__item {
  padding: 8px 12px;
  border: 1px solid #e0e5e6;
}

.select__item:hover {
  background-color: rgba(191, 191, 191, 0.2);
}
</style>
