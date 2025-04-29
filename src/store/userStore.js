import { defineStore } from "pinia";
import axios from "axios";

export const userStore = defineStore("userStore", {
  state: () => ({
    users: [],
    isLoading: false,
  }),
  actions: {
    async fetchUsers() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        this.users = response.data;
      } catch (error) {
        console.log("error :", error.message);
      } finally {
        this.isLoading = false;
      }
    },

    deleteUser(id) {
      this.users = this.users.filter((user) => user.id !== id);
    },

    handleEdit(editedUser) {
      const index = this.users.findIndex((user) => user.id === editedUser.id);
      if (index !== -1) {
        this.users[index] = { ...editedUser };
      }
    },

    addUser(user) {
      const newId = this.users.length + 1;

      this.users.push({
        id: newId,
        ...user,
      });
    },
  },
});
