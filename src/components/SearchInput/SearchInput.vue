<template>
  <v-text-field
    v-model="inputValue"
    :label="label"
    @update:model-value="onChangeValue"
    hide-details
  >
    <slot name="append-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </slot>
  </v-text-field>
</template>

<script>
export default {
  props: {
    label: { type: String, default: null },
  },
  data() {
    return {
      inputValue: null,
    };
  },
  methods: {
    onChangeValue(value) {
      this.$emit("searchTerm", value);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .v-input__control {
    width: 300px;
  }
  .v-label.v-field-label {
    font-size: var(0.75em);
    top: 0;
  }
  .v-field__input {
    flex-direction: row-reverse;
    max-height: 40px;
    min-height: 40px;
    padding-top: var(--v-field-padding-top, 10px);
  }
  .v-field {
    background-color: #bdbdbd;
  }
  .v-label {
    color: black;
  }
}
</style>
