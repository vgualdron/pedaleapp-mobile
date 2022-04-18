<template>
  <view class="view">
    <text>{{ label }}</text>
    <text-input
      class="text"
      :value="value"
      :placeholder="placeholder"
      :on-change-text="updateSelf"
    />
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
    placeholder: {
      String
    },
    label: {
      String
    },
    value: {
      String
    }
  },
  methods: {
    updateSelf(value) {
      this.$emit("changeValue", value);
    }
  },
};
</script>

<style>
.view {
  margin-top: 12px;
}
.text {
  flex: 1;
  border-color: gray;
  border-radius: 8px;
  border-width: 1;
  color: gray;
  font-size: 14px;
  padding: 6px;
  margin-top: 3px;
  margin-bottom: 10px;
}
</style>