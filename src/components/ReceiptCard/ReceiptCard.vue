<template>
  <div class="card">
    <p v-if="isExpense">Gastos</p>
    <p v-else>Entradas</p>
  </div>
</template>

<script>
export default {
  props: {
    isExpense: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
