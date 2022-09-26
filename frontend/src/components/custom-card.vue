<template>
  <div class="custom-card">
    <h5>
      {{ factor }} <span style="color: #b9b9b9">{{ currency }} =</span>
    </h5>
    <h1>
      <span style="font-size: 48px">{{ calc_result }}</span>
      {{ currency_conver }}
    </h1>
  </div>
</template>

<script lang="ts">
import { get_convert_calculate_currency } from "@/scripts/currency_api";
import { thisExpression } from "@babel/types";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "custom-card",
  data() {
    return {
      calc_result: "",
    };
  },
  watch: {
    currency_conver() {
      this.$forceUpdate();
    },
    factor() {
      this.$forceUpdate();
    },
    currency() {
      this.$forceUpdate();
    },
    defalt_meaning() {
      this.$forceUpdate();
    },
  },
  props: {
    currency_conver: {
      default: "USD",
      type: String,
    },
    currency: {
      default: "USD",
      type: String,
    },
    factor: {
      type: Number,
      default: 1,
    },
    defalt_meaning: {
      type: Number,
      default: 60,
    },
  },
  async mounted() {
    this.calc_result = await get_convert_calculate_currency(
      this.currency_conver,
      this.currency,
      this.factor
    );
  },
  async updated() {
    this.calc_result = await get_convert_calculate_currency(
      this.currency_conver,
      this.currency,
      this.factor
    );
  },
});
</script>
