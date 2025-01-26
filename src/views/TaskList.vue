<template>
  <div>
    <h1>Task Manager</h1>

    <div>
      <label for="category">Filter by Category:</label>
      <select v-model="selectedCategory">
        <option value="">All</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>

    <form v-if="selectedCategory" @submit.prevent="addNewTask">
      <input v-model="newTask" placeholder="Enter a new task" />
      <button type="submit">Add Task</button>
    </form>

    <ul>
      <TaskItem 
        v-for="task in filteredTasks" 
        :key="task.id" 
        :task="task" 
        @delete-task="deleteTask" />
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from "@/store/taskStore";
import { computed, onMounted, ref } from "vue";
import TaskItem from "@/components/TaskItem.vue";

export default {
  components: { TaskItem },
  setup() {
    const store = useTaskStore();
    const newTask = ref("");
    const selectedCategory = ref("");

    const addNewTask = () => {
      if (newTask.value) {
        if (newTask.category === "") return;
        store.addTask({ id: Date.now(), name: newTask.value, category: selectedCategory.value, completed: false });
        newTask.value = "";
      }
    };

    const deleteTask = (taskId) => {
      store.deleteTask(taskId);
    };

    const filteredTasks = computed(() => {
      if (!selectedCategory.value) return store.tasks;
      return store.tasks.filter((task) => task.category === selectedCategory.value);
    });

    onMounted(() => {
      store.fetchCategories();
    });

    return { newTask, selectedCategory, categories: store.categories, addNewTask, deleteTask, filteredTasks };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>