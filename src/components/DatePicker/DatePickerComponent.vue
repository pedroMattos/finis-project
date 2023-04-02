<template>
  <date-picker :value="datePickerValue" @change="changeValue"></date-picker>
</template>

<script>
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
export default {
  data() {
    return {
      datePickerValue: null,
    };
  },
  components: {
    DatePicker,
  },
  methods: {
    changeValue(dateValue) {
      this.datePickerValue = dateValue;
      this.$emit("dateTerm", dateValue);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  input[name="date"] {
    height: 40px;
  }
}
</style>
