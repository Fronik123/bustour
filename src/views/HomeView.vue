<template>
  <div class="home">
    <CookieComponent />

    <UsersComponent
      v-if="!isLoading"
      :users="users"
      @deleteUser="deleteUser"
      @editUser="editUser"
      @addUser="addUser"
    />

    <Informations
      :informations="informations"
      @deleteInfo="deleteInfo"
      @editInfo="editInfo"
      @createInfo="createInfo"
    />
  </div>
</template>

<script>
import CookieComponent from "@/components/Cookie.vue";
import Informations from "@/components/Informations.vue";
import UsersComponent from "@/components/Users.vue";

import { useUser } from "@/hooks/useUser";
import { useInformation } from "@/hooks/useInformation";
export default {
  name: "HomeView",
  components: {
    CookieComponent,
    UsersComponent,
    Informations,
  },

  setup() {
    const { users, deleteUser, isLoading, editUser, addUser } = useUser();
    const { informations, deleteInfo, editInfo, createInfo } = useInformation();

    return {
      users,
      deleteUser,
      isLoading,
      editUser,
      addUser,
      informations,
      deleteInfo,
      editInfo,
      createInfo,
    };
  },
};
</script>
