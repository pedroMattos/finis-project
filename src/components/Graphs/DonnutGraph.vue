<script setup>
import { ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import VChart from "vue-echarts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
const option = ref({
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "Expenses",
      type: "pie",
      radius: ["40%", "70%"],
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      data: [
        { value: 1048, name: "Aluguel" },
        { value: 735, name: "Cartão" },
        { value: 580, name: "Lazer" },
        { value: 484, name: "Gastos imprevistos" },
        { value: 300, name: "Financiamento" },
      ],
    },
  ],
});
</script>

<template>
  <div>
    <p class="expenses-graph">Gastos</p>
    <v-chart :option="option" />
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: #dedede;
  border-radius: 5px;
  height: 500px;
  width: 66%;
  padding: 16px;
}
.expenses-graph {
  font-size: 24px;
  font-weight: 700;
}
</style>
