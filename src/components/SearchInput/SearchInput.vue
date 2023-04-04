<script setup>
import { ref, defineProps, defineEmits } from "vue";
defineProps({
  label: { type: String, default: null },
});
const emit = defineEmits(["searchTerm"]);
const inputValue = ref(null);

function onChangeValue(value) {
  emit("searchTerm", value);
}
</script>

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
