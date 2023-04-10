<script setup>
import { defineProps, computed, defineEmits, ref } from "vue";
import { formatDate } from "@/utils/formatters";
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  openModal: Boolean,
});

const incomeName = ref(null);
const incomeDate = ref(null);
const incomeValue = ref(null);
const incomeMonthly = ref(null);
console.log(incomeName);
const modalIsOpenned = computed(() => {
  return props.openModal;
});
</script>

<template>
  <v-dialog v-model="modalIsOpenned" width="auto">
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="incomeName"
          label="Nome da renda"
          required
        ></v-text-field>
        <v-text-field
          v-model="incomeDate"
          label="Data (Mês e dia)"
          @change="(value) => formatDate(value.target.value)"
          required
        ></v-text-field>
        <v-text-field
          v-model="incomeValue"
          label="Valor"
          required
        ></v-text-field>
        <v-switch
          v-model="incomeMonthly"
          hide-details
          inset
          :label="`${incomeMonthly ? 'Entrada mensal' : 'Única entrada'}`"
        ></v-switch>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="() => emit('closeModal', 'close')"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
