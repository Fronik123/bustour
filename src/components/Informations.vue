<template>
  <h1>Info</h1>

  <div class="wrapper">
    <div v-for="info in informations" :key="info.id" class="wrapperInfo">
      <div v-if="editingId !== info.id">
        <div class="innerInfo">
          <div>
            <h4>INFO</h4>

            <div class="wrapperText">
              <div class="innerText">
                <p>title:</p>
                <p>description:</p>
              </div>

              <div>
                <p>{{ info.title }}</p>
                <p>{{ info.description }}</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Assigned User</h4>

            <div class="wrapperText">
              <div class="innerText">
                <p>name:</p>
                <p>email:</p>
              </div>

              <div>
                <p>{{ info.assignedUser.name }}</p>
                <p>{{ info.assignedUser.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapperButton">
          <button class="editButton" @click="editUser(info)">Edit</button>

          <button class="deleteButton" @click="deleteInfo(info.id)">
            Delete
          </button>
        </div>
      </div>

      <div v-else class="edit">
        <h3>Edit</h3>

        <input v-model="editedInfo.title" placeholder="Name" />
        <input v-model="editedInfo.description" placeholder="company" />

        <input v-model="editedInfo.assignedUser.name" placeholder="Name" />
        <input v-model="editedInfo.assignedUser.email" placeholder="Email " />

        <div class="editButtons">
          <button class="saveButton" @click="saveEdit">Save</button>
          <button class="cancelButton" @click="cancelEdit">Cencel</button>
        </div>
      </div>
    </div>
  </div>

  <h3>Create new Info</h3>

  <div class="wrapperAdd">
    <div>
      <input v-model="newInfo.title" placeholder="Title" />
      <input v-model="newInfo.description" placeholder="Description" />
      <input v-model="newInfo.assignedUser.name" placeholder="Name" />
      <input v-model="newInfo.assignedUser.email" placeholder="Email" />
      <button class="createButton" @click="createNew">Add</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "InformationsComponent",
  emits: ["deleteInfo", "editInfo", "createInfo"],

  props: {
    informations: {
      type: Array,
      required: true,
    },
  },
  setup(_, { emit }) {
    const editingId = ref(null);
    const editedInfo = ref(null);
    const newInfo = ref({
      title: "",
      description: "",
      assignedUser: { name: "", email: "" },
    });

    const createNew = () => {
      emit("createInfo", newInfo.value);

      newInfo.value = {
        title: "",
        description: "",
        assignedUser: {
          name: "",
          email: "",
        },
      };
    };

    const editUser = (info) => {
      editingId.value = info.id;
      editedInfo.value = JSON.parse(JSON.stringify(info));
    };

    const deleteInfo = (id) => {
      emit("deleteInfo", id);
    };

    const cancelEdit = () => {
      editingId.value = null;
      editedInfo.value = null;
    };

    const saveEdit = () => {
      if (editedInfo.value) {
        emit("editInfo", editedInfo.value);
        editingId.value = null;
        editedInfo.value = null;
      }
    };

    return {
      editingId,
      cancelEdit,
      editUser,
      deleteInfo,
      editedInfo,
      saveEdit,
      newInfo,
      createNew,
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.wrapperInfo {
  flex: 0 0 calc(33.333% - 10px);

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid firebrick;
  gap: 20px;
  padding: 10px 0;
}

.wrapperButton {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.innerInfo {
  display: flex;
  gap: 50px;
}

.wrapperText {
  display: flex;
  gap: 5px;
}

.innerText {
  font-weight: 700;
}

.wrapperAdd {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
