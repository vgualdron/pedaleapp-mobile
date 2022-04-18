<template>
  <view class="style">
    <slot name="top"></slot>
    <slot name="middle"></slot>
    <slot name="bottom"></slot>
  </view>
</template>

<script>
export default {
  data: function () {
    return {
    };
  },
  props: {
    navigation: {
      Object,
    },
  },
  methods: {
  },
};
</script>

<style>
.style {
  flex: 1;
  padding: 25px;
}
</style>