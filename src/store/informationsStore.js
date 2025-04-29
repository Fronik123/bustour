import { defineStore } from "pinia";

export const informationsStore = defineStore("informationsStore", {
  state: () => ({
    informations: [
      {
        id: 1,
        title: "sample text",
        description: "description",
        assignedUser: {
          id: 1,
          name: "sample",
          email: "sample@sample.com",
        },
      },
      {
        id: 2,
        title: "sample text2",
        description: "description 2",
        assignedUser: {
          id: 2,
          name: "sample2",
          email: "sampl2e@samp2le.com",
        },
      },
    ],
  }),
  actions: {
    handleDelete(id) {
      this.informations = this.informations.filter((user) => user.id !== id);
    },

    handleEdit(info) {
      const index = this.informations.findIndex((item) => item.id === info.id);
      if (index !== -1) {
        this.informations[index] = {
          ...this.informations[index],
          ...info,
          assignedUser: {
            ...this.informations[index].assignedUser,
            ...info.assignedUser,
          },
        };
      }
    },

    handleAdd(info) {
      const id = this.informations.length + 1;

      const newInfo = {
        id,
        ...info,
        assignedUser: {
          id,
          ...info.assignedUser,
        },
      };
      this.informations.push(newInfo);
    },
  },
});
