<script setup>
import { defineProps } from "vue";
defineProps({
  text: { type: String, default: "Texto" },
});
</script>

<template>
  <v-btn variant="text">{{ text }}</v-btn>
</template>
