import { informationsStore } from "@/store/informationsStore";
import { storeToRefs } from "pinia";

export function useInformation() {
  const store = informationsStore();

  const { informations } = storeToRefs(store);

  const deleteInfo = (id) => {
    store.handleDelete(id);
  };

  const editInfo = (info) => {
    store.handleEdit(info);
  };

  const createInfo = (info) => {
    store.handleAdd(info);
  };

  return { informations, deleteInfo, editInfo, createInfo };
}
