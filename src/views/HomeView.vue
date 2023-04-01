<template>
  <div class="home">
    <SearchBar />
    <div class="receipt-cards">
      <ReceiptCard />
      <ReceiptCard isExpense />
      <FreeMoney />
    </div>
    <DonnutGraph />
  </div>
</template>

<script>
// @ is an alias to /src
import FreeMoney from "@/views/ReceiptCard/FreeMoney.vue";
import ReceiptCard from "@/views/ReceiptCard/ReceiptCard.vue";
import SearchBar from "@/views/SearchBar/SearchBar.vue";
import DonnutGraph from "@/components/Graphs/DonnutGraph.vue";

export default {
  name: "HomeView",
  components: {
    FreeMoney,
    ReceiptCard,
    SearchBar,
    DonnutGraph,
  },
};
</script>

<style lang="scss" scoped>
.receipt-cards {
  display: flex;
  gap: 5px;
  // justify-content: center;
}
</style>
