<template>
  <h1>API Users</h1>

  <div class="wrapper">
    <div v-for="user in users" :key="user.id" class="wrapperUser">
      <div v-if="editingId !== user.id">
        <div class="innerUser">
          <div>
            <h4>Name</h4>

            <div class="wrapperText">
              <div class="innerText">
                <p>name:</p>
              </div>
              <div>
                <p>{{ user.name }}</p>
              </div>
            </div>
          </div>

          <div>
            <h4>Company:</h4>

            <div class="wrapperText">
              <div class="innerText">
                <p>Company name:</p>
                <p>Catch phrase:</p>
                <p>Bs:</p>
              </div>
              <div>
                <p>{{ user.company.name }}</p>
                <p>{{ user.company.catchPhrase }}</p>
                <p>{{ user.company.bs }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="wrapperButton">
          <div>
            <button class="editButton" @click="editUser(user)">Edit</button>
          </div>
          <div>
            <button class="deleteButton" @click="deleteUser(user.id)">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div v-else class="edit">
        <h3>Edit</h3>

        <input v-model="editedUser.name" placeholder="Name" />
        <input v-model="editedUser.company.name" placeholder="Company Name" />
        <input
          v-model="editedUser.company.catchPhrase"
          placeholder="Catch Phrase"
        />
        <input v-model="editedUser.company.bs" placeholder="Company bs" />

        <div class="editButtons">
          <button class="saveButton" @click="saveEdit(user.id)">Save</button>
          <button class="cancelButton" @click="cancelEdit">Cencel</button>
        </div>
      </div>
    </div>
  </div>

  <h3>Add user</h3>

  <div class="wrapperAdd">
    <input v-model="newUser.name" placeholder="Enter name" />
    <input v-model="newUser.company.name" placeholder="Enter company name" />
    <input
      v-model="newUser.company.catchPhrase"
      placeholder="Enter Catch phrase"
    />
    <input v-model="newUser.company.bs" placeholder="Enter bs" />

    <button class="createButton" @click="addUser">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  emits: ["deleteUser", "editUser", "addUser"],
  name: "UsersComponent",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const editingId = ref(null);
    const editedUser = ref({ ...props.users });
    const newUser = ref({
      name: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });

    const editUser = (user) => {
      editingId.value = user.id;
      editedUser.value = { ...user };
    };

    const saveEdit = () => {
      emit("editUser", editedUser.value);
      cancelEdit();
    };

    const cancelEdit = () => {
      editingId.value = null;
      editedUser.value = null;
    };

    const deleteUser = (id) => {
      emit("deleteUser", id);
    };

    const addUser = () => {
      emit("addUser", newUser.value);
      newUser.value = {
        name: "",
        company: { name: "", catchPhrase: "", bs: "" },
      };
    };

    return {
      newUser,
      editingId,
      editedUser,
      deleteUser,
      editUser,
      saveEdit,
      cancelEdit,
      addUser,
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
.wrapperUser {
  flex: 0 0 calc(33.333% - 10px);

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid firebrick;
  gap: 20px;
  padding: 10px 0;
}

.innerUser {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.wrapperButton {
  gap: 10px;
  display: flex;
  justify-content: center;
}

.edit {
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 5px;
}

.editButtons {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.wrapperText {
  display: flex;
  gap: 10px;
}

.innerText {
  white-space: pre;
  font-weight: 700;
}

.wrapperAdd {
  display: flex;
  justify-content: center;
}
</style>
