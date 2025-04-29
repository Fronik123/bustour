<template>
  <div>
    <h1>Cookies</h1>

    <div class="wrapper">
      <select v-model="selectedValue">
        <option disabled value="">Select option</option>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3">Option 3</option>
      </select>

      <div>
        <input type="checkbox" v-model="saveToCookie" />
        Save in cookies
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "CookieComponent",
  setup() {
    const selectedValue = ref("");
    const saveToCookie = ref(false);

    watch([selectedValue, saveToCookie], () => {
      if (saveToCookie.value && selectedValue.value) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 15);

        document.cookie = `selectedValue=${
          selectedValue.value
        }; expires=${now.toUTCString()}; path=/`;

        alert(`Save in cookies ${selectedValue.value}`);
      }
    });

    return { selectedValue, saveToCookie };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
