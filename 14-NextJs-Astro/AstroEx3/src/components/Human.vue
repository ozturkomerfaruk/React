<template>
    <h3>A Vue component rendered with client:load (CSR)</h3>
    <h4>Name: {{ name }}, Age: {{age}}</h4>
    <button @click="decrement">Decrement Age</button>
    <button @click="increment">Increment Age</button>
</template>
  
  <script>
  export default {
    data() {
      return {
        name: "Jennifer",
        age: 40
      }
    },
    methods: {
       decrement(){this.age--;},
       increment(){this.age++}
    }
  }
  </script>
  
  <style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
  </style>