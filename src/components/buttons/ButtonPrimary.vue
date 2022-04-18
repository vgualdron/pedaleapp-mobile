<template>
  <button class="button" color="#022c82" :title="title" @press="click"></button>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  props: {
    navigation: {
      Object,
    },
    title: {
      String,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.button {
  background-color: #022c82;
  border-color: #022c82;
  border-radius: 20px;
  border-width: 1;
  color: black;
  font-size: 16px;
  margin: 10px;
  height: 50px;
}
</style>