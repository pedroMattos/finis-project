<script setup>
import FreeMoney from "@/views/ReceiptCard/FreeMoney.vue";
import ReceiptCard from "@/views/ReceiptCard/ReceiptCard.vue";
import SearchBar from "@/views/SearchBar/SearchBar.vue";
import DonnutGraph from "@/components/Graphs/DonnutGraph.vue";
</script>

<template>
  <div class="home">
    <SearchBar />
    <div class="receipt-cards">
      <ReceiptCard :value-incoming="2000" />
      <ReceiptCard :value-incoming="-1400" isExpense />
      <FreeMoney :value-incoming="600" />
    </div>
    <DonnutGraph />
  </div>
</template>

<style lang="scss" scoped>
.receipt-cards {
  display: flex;
  gap: 5px;
}
</style>
