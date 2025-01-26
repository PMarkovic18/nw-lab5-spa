import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
    state: () => ({
        tasks: [
            { id: 1, completed: false, category: "Shopping", name: "Buy a Honda Civic" },
            { id: 2, completed: false, category: "Work", name: "Make a new SPA" },
            { id: 3, completed: false, category: "Work", name: "Review PR" },
            { id: 4, completed: false, category: "Personal", name: "Eat foor" },
            { id: 5, completed: false, category: "Personal", name: "Drink" },
            { id: 6, completed: false, category: "Personal", name: "Sleep" },
            { id: 7, completed: false, category: "Work", name: "Quit the job" },
        ],
        categories: [],
    }),
    actions: {
        addTask(task) {
            if (task.category === "") return;
            this.tasks.push(task);
            console.log(task);
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
        },
        async fetchCategories() {
            const mockCategories = await new Promise((resolve) => {
                setTimeout(() => resolve(["Work", "Personal", "Shopping"]), 1000);
            });
            this.categories = mockCategories;
        },
    },
});