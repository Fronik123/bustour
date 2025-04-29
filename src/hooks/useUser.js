import { userStore } from "@/store/userStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

export function useUser() {
  const store = userStore();

  const { users, isLoading } = storeToRefs(store);

  onMounted(async () => {
    await store.fetchUsers();
  });

  const deleteUser = (id) => {
    store.deleteUser(id);
  };

  const addUser = (newUser) => {
    store.addUser(newUser);
  };

  const editUser = (editedUser) => {
    store.handleEdit(editedUser);
  };

  return { users, deleteUser, isLoading, editUser, addUser };
}
