<script setup>
import ButtonAdd from "@/components/ButtonAdd/ButtonAdd.vue";
import ModalAddIncome from "@/views/Modals/ModalAddIncome.vue";
import ModalAddInvoice from "../Modals/ModalAddInvoice.vue";
import { defineProps, ref } from "vue";
const props = defineProps({
  isExpense: { type: Boolean, default: false },
  currency: { type: String, default: "pt-br" },
  valueIncoming: { type: [Number, String], default: "-" },
});

let openModal = ref(false);
const isInvoice = ref(props.isExpense)

function setModalState(state, type) {
  switch (state) {
    case "open":
      openModal.value = type;
      break;
    case "close":
      openModal.value = null;
      break;
    default:
      openModal.value = 'receipt';
      break;
  }
}
</script>

<template>
  <div class="card">
    <p :class="{ 'value-text': true, 'negative-incoming': isInvoice }">
      R$ {{ valueIncoming }}
    </p>
    <ButtonAdd
      :text="isInvoice ? 'Adicionar gasto' : 'Adicionar renda'"
      @click="() => setModalState('open', isInvoice ? 'invoice' : 'receipt')"
    />
    <ModalAddIncome :openModal="openModal === 'receipt'" @closeModal="setModalState" />
    <ModalAddInvoice :openModal="openModal === 'invoice'" @closeModal="setModalState" />
  </div>
</template>

<style lang="scss" scoped>
@import url("./styles.scss");
</style>
