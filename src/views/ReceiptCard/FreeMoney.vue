<script setup>
import { defineProps } from "vue";
defineProps({
  currency: { type: String, default: "pt-br" },
  valueIncoming: { type: [Number, String], default: "-" },
});
</script>

<template>
  <div class="card">
    <p :class="{ 'value-text': true, 'negative-incoming': valueIncoming < 0 }">
      R$ {{ valueIncoming }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
