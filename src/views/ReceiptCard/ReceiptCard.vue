<script setup>
import ButtonAdd from "@/components/ButtonAdd/ButtonAdd.vue";
import ModalAddIncome from "@/views/Modals/ModalAddIncome.vue";
import { defineProps, ref } from "vue";
defineProps({
  isExpense: { type: Boolean, default: false },
  currency: { type: String, default: "pt-br" },
  valueIncoming: { type: [Number, String], default: "-" },
});

let openModal = ref(false);

function setModalState(state) {
  switch (state) {
    case "open":
      openModal.value = true;
      break;
    case "close":
      openModal.value = false;
      break;
    default:
      openModal.value = true;
      break;
  }
}
</script>

<template>
  <div class="card">
    <p :class="{ 'value-text': true, 'negative-incoming': valueIncoming < 0 }">
      R$ {{ valueIncoming }}
    </p>
    <ButtonAdd
      :text="valueIncoming < 0 ? 'Adicionar gasto' : 'Adicionar renda'"
      @click="() => setModalState('open')"
    />
    <ModalAddIncome :openModal="openModal" @closeModal="setModalState" />
  </div>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
