<template>
  <nav>
    <SearchInput @searchTerm="search" label="Buscar" />
    <Datepicker @dateTerm="searchDate" />
  </nav>
</template>

<script>
import Datepicker from "@/components/DatePicker/DatePickerComponent.vue";
import SearchInput from "@/components/SearchInput/SearchInput.vue";

export default {
  components: { SearchInput, Datepicker },
  methods: {
    search(value) {
      console.log(value);
    },
    searchDate(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 60%;
  max-height: fit-content;
  background-color: #dedede;
  margin-bottom: 5px;
  border-radius: 5px;
  margin: 12px auto 5px;
  padding: 8px;
  display: flex;
}
</style>
