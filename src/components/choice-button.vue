<template>
  <button
    class="choice-button choice-button-default"
    :id="'choice-button-' + index"
    @click="button_change_style()"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "choice-button",
  props: {
    index: Number,
    text: {
      default: "EUR",
      type: String,
    },
  },
  methods: {
    button_change_style(): void {
      let all_button = document.querySelectorAll("button.choice-button");
      if (all_button.length > 0) {
        for (let i = 0; i < all_button.length; i++) {
          all_button[i].classList.remove("choice-button-active");
          all_button[i].classList.remove("choice-button-default");
          all_button[i].classList.add("choice-button-default");
        }
      }
      let select_item = document.getElementById("choice-button-" + this.index);
      if (select_item == null) return;
      select_item.classList.remove("choice-button-active");
      select_item.classList.remove("choice-button-default");
      select_item.classList.add("choice-button-active");
    },
  },
});
</script>
