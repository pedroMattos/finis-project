<script setup>
import { defineProps, computed, defineEmits, ref } from "vue";
import DatePickerComponent from "@/components/DatePicker/DatePickerComponent.vue";
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  openModal: Boolean,
});

const incomeName = ref(null);
const incomeDate = ref(null);
const selectedCategory = ref(null);
const times = ref(1);
const incomeValue = ref(null);
console.log(incomeName);
const modalIsOpenned = computed(() => {
  return props.openModal;
});

function searchDate(value) {
  console.log({ value });
  incomeDate.value = value;
}

// function handleUpdate(event) {
//   // TODO ver essa magia dos infernos
//   console.log(event.target.value);
//   if (!event.target.value.trim()) {
//     return;
//   }
//   const cursorPos = event.target.selectionStart;
//   console.log({ cursorPos });
//   let value = event.target.value.replace(",", ".");
//   value = value.replace(/[^\d]/g, "");
//   const decimals = value.slice(0, -2).padStart(1, "0");
//   const cents = value.slice(-2).padStart(2, "0");
//   if (/^\d*(\.\d{0,2})?$/.test(value)) {
//     const valorFormatado = parseFloat(`${cents}.${decimals}`).toLocaleString(
//       "pt-BR",
//       { currency: "BRL" }
//     );
//     const cursorOffset = cursorPos + 1 - event.target.selectionStart;
//     event.target.setSelectionRange(0, 0);
//     console.log({ cursorOffset });
//     incomeValue.value = valorFormatado;
//   }
// }
</script>

<template>
  <v-dialog v-model="modalIsOpenned" width="auto">
    <v-card>
      <v-card-text>
        <p>Descrição da dívida</p>
        <v-text-field v-model="incomeName" required></v-text-field>
        <p>Número de parcelas</p>
        <v-text-field
          v-model="times"
          hide-details
          single-line
          prefix="x"
          min="1"
          label="Quantas parcelas?"
          type="number"
        />
        <p>{{ times > 1 ? "Fatura em" : "Data do vencimento" }}</p>
        <date-picker-component @dateTerm="searchDate" />
        <p>Selecione uma categoria</p>
        <v-select
          v-model="selectedCategory"
          required
          :items="[
            'Saúde',
            'Educação',
            'Energia/Água',
            'Lazer',
            'Comida',
            'Serviço de assinatura',
            'Veículo',
            'Academia/Fitness',
            'Eletrônicos',
            'Mobilia',
            'Financiamento',
            'Uber',
            'Pet',
            'Internet',
          ]"
        ></v-select>
        <p>Valor da dívida</p>
        <v-text-field
          ref="teste"
          prefix="R$"
          v-model="incomeValue"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" @click="() => emit('closeModal', 'close')"
          >Cancelar</v-btn
        >
        <v-btn color="primary" @click="() => emit('closeModal', 'close')"
          >Salvar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
