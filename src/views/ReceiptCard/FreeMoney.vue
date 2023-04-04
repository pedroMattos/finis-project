<template>
  <div class="card">
    <p :class="{ 'value-text': true, 'negative-incoming': valueIncoming < 0 }">
      R$ {{ valueIncoming }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    currency: { type: String, default: "pt-br" },
    valueIncoming: { type: [Number, String], default: "-" },
  },
};
</script>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
