<template>
  <div class="widget">
    <div class="widget-header">
      <h1>Курс {{ get_select_corrency }} на {{ get_current_data() }}</h1>
      <div class="widget-header-choice">
        <button
          @click="set_new_size(0)"
          class="widget-header-choice-navigation"
        >
          &triangleleft;
        </button>
        <div class="widget-header-choice-buttons">
          <choice-button
            v-for="(item, index) in get_page"
            @click="change_index_by_name(item)"
            :key="index"
            :index="index"
            :text="item"
          />
        </div>
        <button
          @click="set_new_size(1)"
          class="widget-header-choice-navigation"
        >
          &triangleright;
        </button>
      </div>
    </div>
    <div class="widget-body">
      <div class="widget-body-count">
        <input type="text" v-model="count_money" />
        <a>{{ get_select_corrency }}</a>
      </div>
      <div class="widget-body-content">
        <custom-card
          class="custom-card-1"
          :defalt_meaning="70"
          :factor="count_money"
          currency_conver="RUB"
          :currency="get_select_corrency"
        />
        <custom-card
          class="custom-card-2"
          :defalt_meaning="90"
          :factor="count_money"
          currency_conver="CAN"
          :currency="get_select_corrency"
        />
        <custom-card
          class="custom-card-3"
          :defalt_meaning="40"
          :factor="count_money"
          currency_conver="HRK"
          :currency="get_select_corrency"
        />
        <custom-card
          class="custom-card-4"
          :defalt_meaning="60"
          :factor="count_money"
          currency_conver="JPY"
          :currency="get_select_corrency"
        />
      </div>
    </div>
    <div class="widget-pagination">
      <button @click="change_index_by_index(select_index - 1)">
        &triangleleft; Назад
      </button>
      <button @click="change_index_by_index(select_index + 1)">
        вперёд &triangleright;
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import choiceButton from "./components/choice-button.vue";
import CustomCard from "./components/custom-card.vue";
import { currency_data, get_all_currency } from "./scripts/currency_api";

export default defineComponent({
  components: { choiceButton, CustomCard },
  name: "App",
  data() {
    return {
      count_money: 1,
      select_index: 0,
      min_index: 0,
      max_index: 7,
      all_currency: [
        {
          name: "RUB",
          data: "129",
        },
        {
          name: "EUR",
          data: "129",
        },
        {
          name: "AUD",
          data: "129",
        },
        {
          name: "AZN",
          data: "129",
        },
        {
          name: "BBD",
          data: "129",
        },
        {
          name: "BOB",
          data: "129",
        },
      ],
    };
  },
  async mounted() {
    let element_size = 90;
    let screen_widht = window.innerWidth;
    this.all_currency = await get_all_currency();
    this.max_index = Math.floor(screen_widht / element_size - 1);
  },
  computed: {
    get_select_corrency(): string {
      return this.all_currency[this.select_index].name;
    },
    get_page(): string[] {
      let result = [];
      let element_size = 90;
      let screen_widht = window.innerWidth > 720 ? 720 : window.innerWidth;
      let max_page = Math.floor(screen_widht / element_size - 1);
      for (let i = this.min_index; i < this.all_currency.length; i++) {
        if (max_page == 0) break;
        if (i >= this.max_index) break;
        result.push(this.all_currency[i].name);
        max_page--;
      }
      return result;
    },
  },
  methods: {
    set_new_size(type: number): void {
      switch (type) {
        case 0:
          {
            if (this.min_index <= 0) return;
            this.min_index -= 1;
            this.max_index -= 1;
            this.select_index -= 1;
          }
          break;
        case 1:
          {
            if (this.max_index >= this.all_currency.length) return;
            this.min_index += 1;
            this.max_index += 1;
            this.select_index += 1;
          }
          break;
      }
    },
    get_current_data: (): string => {
      let data = new Date();
      return data.getFullYear() + "." + data.getMonth() + "." + data.getDate();
    },
    change_index_by_index(index: number): void {
      if (index <= 0) return;
      if (index >= this.all_currency.length) return;
      if (this.max_index < index) {
        this.max_index++;
        this.min_index++;
      }
      if (this.min_index > index) {
        this.max_index--;
        this.min_index--;
      }
      this.select_index = index;
    },
    change_index_by_name(name: string): void {
      const lambda = (obj: currency_data) => {
        return obj.name == name;
      };
      this.select_index = this.all_currency.findIndex(lambda);
    },
  },
});
</script>
