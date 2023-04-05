<script setup>
import { defineProps, computed, defineEmits, ref } from "vue";
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  openModal: Boolean,
});

const addInformations = ref({
  name: null,
  payBy: null,
  value: null,
  incomeDate: null,
});
const incomeName = ref(null);
console.log(addInformations, incomeName);
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
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="() => emit('closeModal', 'close')"
          >Close Dialog</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
