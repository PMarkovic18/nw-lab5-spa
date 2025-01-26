<template>
  <div>
    <h1>Welcome to My Vue 3 SPA</h1>
    <p>Message: {{ message }}</p>
  </div>
  <div>
    <input v-model="message" placeholder="Edit the message" />
    <p>You typed: {{ message }}</p>
  </div>
  <div>
    <button @click="updateMessage">Click Me</button>
  </div>
  <p>Message length: {{ messageLength }}</p>
</template>

<script>
export default {
  computed: {
    messageLength() {
      return this.message.length;
    },
  },
  methods: {
    updateMessage() {
      this.message = "The message has been updated!";
    },
  },
  data() {
    return {
      message: "Hello, this is one-way binding!",
    };
  },
  mounted() {
    console.log("Component has been mounted!");
  },
};
</script>