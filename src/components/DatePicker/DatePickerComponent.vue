<template>
  <date-picker
    popup-class="picker"
    :value="datePickerValue"
    :default-panel="panel"
    @change="changeValue"
  ></date-picker>
</template>

<script>
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";
export default {
  props: {
    panel: { type: String, default: "month" },
  },
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

<style lang="scss">
::v-deep {
  input[name="date"] {
    height: 40px;
  }
}
.picker {
  z-index: 9999;
}
</style>
