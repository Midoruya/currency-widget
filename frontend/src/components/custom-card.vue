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
import { defineComponent } from "vue";

export default defineComponent({
  name: "custom-card",
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
  computed: {
    calc_result(): string {
      if (this.factor == 0) return "0";
      if (this.factor <= 1) return this.defalt_meaning.toString();
      let mul = (i: number, j: number) => i * j;

      return mul(this.factor, this.defalt_meaning).toString();
    },
  },
});
</script>