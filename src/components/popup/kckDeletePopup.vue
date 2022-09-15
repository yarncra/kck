<template>
  <div class="delete-popup" @click="deleteCard">
    <div class="delete-popup__msg">удалить</div>
  </div>
</template>

<script>
export default {
  methods: {
    deleteCard() {
      this.$emit('deleteCard');
    },
  },
};
</script>

<style lang="scss">
.delete-popup {
  position: absolute;
  z-index: 999;
  top: calc(100% - 9px);
  right: 31px;
  display: inline-block;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
  border-radius: 2px;
  width: 148px;
  cursor: pointer;
}

.delete-popup__msg {
  position: relative;
  padding: 12px 57px 12px 36px;
  color: #2b2839;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}

.delete-popup:hover .delete-popup__msg {
  color: #045da7;
}

.delete-popup__msg::before {
  content: '\e901';
  position: absolute;
  display: block;
  vertical-align: middle;
  left: 15px;
  font-family: 'icomoon';
  font-size: 10px;
  color: #647a8c;
}

.delete-popup:hover .delete-popup__msg::before {
  color: #045da7;
}
</style>
