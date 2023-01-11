<script setup>
// This starter template is using Vue 3 <script setup> Single File Component (SFC)s
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted } from 'vue'

// reactive state
const showData = ref(true)
const fname = ref('Cem')
const lname = ref('Kaya')
const num = ref(125)
const age = ref(20)

// functions that mutate state and trigger updates
function toggleShowData(){showData.value = !showData.value}

function increment() {
  age.value++
}

function decrement(){
  age.value--;
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial age is ${age.value}.`)
})
</script>

<template>
  <!-- Conditional Rendering using v-if/v-else -->
  <div v-if="showData">
    <h2>Hello {{fname}} {{lname}}</h2>
    <h3>Your id is {{num}}</h3>
    <h3>Your age is {{age}}</h3>
    <button v-on:click="increment">Age+</button>
    <button @click="decrement">Age-</button>
  </div>
  
  <p v-show="showData">We are showing the data</p>

  <button @click="toggleShowData">
    <span v-if="showData">Hide Data</span>
    <span v-else>show Data</span>
  </button>
</template>

<style scoped>
button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
