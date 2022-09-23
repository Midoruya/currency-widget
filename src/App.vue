<template>
  <div class="widget">
    <div class="widget-header">
      <h1>Курс {{ select_currency }} на {{ get_current_data() }}</h1>
      <div class="widget-header-choice">
        <choice-button :index="0" text="EUR" />
        <choice-button :index="1" text="EUR" />
        <choice-button :index="2" text="EUR" />
        <choice-button :index="3" text="EUR" />
      </div>
    </div>
    <div class="widget-body">
      <div class="widget-body-count"></div>
      <div class="widget-body-content">
        <custom-card class="custom-card-1" :defalt_meaning="70" :factor="2" />
        <custom-card class="custom-card-2" :defalt_meaning="90" :factor="1" />
        <custom-card class="custom-card-3" :defalt_meaning="40" :factor="0" />
        <custom-card class="custom-card-4" :defalt_meaning="60" :factor="5" />
      </div>
    </div>
    <div class="widget-pagination"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import choiceButton from "./components/choice-button.vue";
import CustomCard from "./components/custom-card.vue";

export default defineComponent({
  components: { choiceButton, CustomCard },
  name: "App",
  data() {
    return {
      all_currency: [],
      select_currency: "EUR",
    };
  },
  computed: {},
  methods: {
    get_current_data: (): string => {
      let data = new Date();
      return data.getFullYear() + "." + data.getMonth() + "." + data.getDate();
    },
  },
});
</script>