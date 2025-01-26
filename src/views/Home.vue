<template>
    <div class="homepage">
      <h1>Welcome to the Task Manager</h1>
      
      <p>To add a new task, you must first select a category from the filter. Only after selecting a category will the option to enter a new task be available.</p>
  
      <div class="button-container">
        <p>Ready to get started?</p>
        <router-link to="/tasks">
          <button>Go to Tasks</button>
        </router-link>
      </div>
  
      <p class="note">
        <strong>Note:</strong> Tasks are organized by categories, and only tasks in the selected category will be shown on the tasks page.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style scoped>
  .homepage {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 15px;
  }
  
  .button-container {
    margin-top: 30px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  .note {
    margin-top: 30px;
    font-style: italic;
  }
  </style>
  